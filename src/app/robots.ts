import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// AI assistant / answer-engine crawlers, split by what they actually do.
// All are explicitly allowed: being cited in AI answers is a lead source for a
// local business, so there is no reason to opt out.
//
// Retrieval bots — fetch a page to answer a live user question and cite it.
const AI_SEARCH_BOTS = [
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT browsing on a user's behalf
  "Claude-User", // Claude browsing on a user's behalf
  "Claude-SearchBot", // Claude search index
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity user-initiated fetch
  "DuckAssistBot", // DuckDuckGo AI answers
  "Amazonbot", // Alexa / Amazon answers
  "Applebot", // Siri / Spotlight
  "MistralAI-User",
  "YouBot",
];

// Training-corpus bots. Separate list because these are the ones a site would
// realistically want to disallow — keep them distinct so the choice stays visible.
const AI_TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended", // Gemini training/grounding (opt-out token; allow = default)
  "Applebot-Extended", // Apple Intelligence training (opt-out token)
  "meta-externalagent",
  "cohere-ai",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Filtered blog views (/blog?categorie=…) are deliberately *not* disallowed:
      // they already declare a canonical of /blog, which consolidates them
      // cleanly. Blocking them instead would only produce "indexed, though
      // blocked by robots.txt" warnings.
      { userAgent: "*", allow: "/" },
      { userAgent: AI_SEARCH_BOTS, allow: "/" },
      { userAgent: AI_TRAINING_BOTS, allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
