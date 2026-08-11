import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";
import { JsonLd } from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/blog" },
  title: "Sfaturi despre uși de interior | Blog",
  description: "Ghiduri și recomandări despre alegerea, măsurarea, întreținerea și montarea ușilor de interior.",
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ categorie?: string }>;
}) {
  const { categorie } = await searchParams;
  const allPosts = getAllPosts();
  const posts = categorie ? allPosts.filter((p) => p.category === categorie) : allPosts;

  return (
    <>
      {/* Schema always describes the full, unfiltered listing — the canonical view. */}
      <JsonLd
        data={[
          blogSchema(allPosts),
          breadcrumbSchema([
            { name: "Acasă", path: "" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <PageHero
        title="Idei și sfaturi pentru alegerea ușilor de interior"
        description="Descoperă informații utile despre modele, finisaje, măsurători, montaj și integrarea ușilor în designul locuinței."
      />

      <Section>
        <Container>
          <CategoryFilter active={categorie} />

          {posts.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-10 text-muted-foreground">
              Nu există încă articole publicate în această categorie.
            </p>
          )}
        </Container>
      </Section>

      <CtaBanner
        title="Primește idei utile pentru amenajarea locuinței"
        description="Scrie-ne pe WhatsApp și rămâi la curent cu noutățile și recomandările noastre despre uși și amenajări interioare."
        primaryCta={{ label: "Discută cu noi pe WhatsApp", href: "/oferta" }}
      />
    </>
  );
}
