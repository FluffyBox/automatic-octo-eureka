// Notify IndexNow-participating search engines (Bing, Yandex, Seznam, Naver)
// that URLs on this site have changed.
//
// Run manually after a deploy that changes page content:
//   node scripts/indexnow.mjs            # submit every URL in the sitemap
//   node scripts/indexnow.mjs /preturi /usi-de-interior/usi-glisante
//   node scripts/indexnow.mjs --dry-run  # print what would be sent
//
// Notes on how this protocol works, so the next person doesn't have to re-read
// the spec: the key is NOT a secret. It is published at a public URL and the
// only thing it proves is that whoever submits URLs also controls the domain.
// That is why it is safe to commit — see public/<key>.txt.
//
// One submission reaches all participating engines; they share the feed. Google
// does NOT participate, so this is complementary to Search Console, not a
// replacement. Bing's index is what ChatGPT search reads, which is the main
// reason this is worth wiring up at all.
import { setTimeout as sleep } from "node:timers/promises";

const KEY = "094e87dcf4fc4b59a534d27c5a252dc3";
const HOST = "www.parchet-usi.ro";
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/IndexNow";

// IndexNow rejects a submission outright if any URL is on a different host, so
// bad input costs the whole batch. Validate before sending.
function normalise(input) {
  const url = input.startsWith("http") ? input : `${ORIGIN}${input.startsWith("/") ? "" : "/"}${input}`;
  const parsed = new URL(url);
  if (parsed.host !== HOST) {
    throw new Error(`Refusing to submit "${input}" — host is ${parsed.host}, expected ${HOST}`);
  }
  return parsed.toString();
}

async function urlsFromSitemap() {
  const res = await fetch(`${ORIGIN}/sitemap.xml`);
  if (!res.ok) throw new Error(`Could not read sitemap: HTTP ${res.status}`);
  const xml = await res.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

/** Confirm the key file is actually served before submitting; a 404 here is the cause of a 403 there. */
async function assertKeyIsLive() {
  const res = await fetch(KEY_LOCATION);
  if (!res.ok) {
    throw new Error(`Key file not reachable at ${KEY_LOCATION} (HTTP ${res.status}). Deploy first.`);
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`Key file at ${KEY_LOCATION} contains "${body}", expected "${KEY}".`);
  }
}

const RESPONSE_MEANING = {
  200: "OK — URLs accepted",
  202: "Accepted — key validation pending",
  400: "Bad request — malformed JSON",
  403: "Forbidden — key file missing or does not match",
  422: "Unprocessable — a URL does not belong to this host",
  429: "Rate limited — too many requests, try again later",
};

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const explicit = args.filter((a) => !a.startsWith("--"));

  await assertKeyIsLive();
  console.log(`Key verified at ${KEY_LOCATION}`);

  const urlList = (explicit.length ? explicit : await urlsFromSitemap()).map(normalise);
  if (urlList.length === 0) throw new Error("No URLs to submit.");

  console.log(`${dryRun ? "[dry run] would submit" : "Submitting"} ${urlList.length} URL(s):`);
  for (const u of urlList) console.log(`  ${u}`);
  if (dryRun) return;

  // The spec caps a batch at 10,000 URLs; chunk anyway so this keeps working
  // if the blog grows well past that.
  const CHUNK = 1000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const chunk = urlList.slice(i, i + CHUNK);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: chunk }),
    });
    const meaning = RESPONSE_MEANING[res.status] ?? "Unexpected status";
    console.log(`\nHTTP ${res.status} — ${meaning}`);
    if (!res.ok) {
      console.error(await res.text());
      process.exitCode = 1;
    }
    if (i + CHUNK < urlList.length) await sleep(1000);
  }
}

main().catch((err) => {
  console.error(`\n${err.message}`);
  process.exitCode = 1;
});
