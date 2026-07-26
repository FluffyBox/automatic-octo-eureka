import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CtaBanner } from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const date = new Date(post.meta.date).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Section className="pb-0">
        <Container className="max-w-3xl">
          <Link
            href={`/blog?categorie=${encodeURIComponent(post.meta.category)}`}
            className="text-xs font-semibold uppercase tracking-wider text-accent-text"
          >
            {post.meta.category}
          </Link>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-primary sm:text-4xl">
            {post.meta.title}
          </h1>
          <time dateTime={post.meta.date} className="mt-3 block text-sm text-muted-foreground">
            {date}
          </time>
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image src={post.meta.cover} alt={post.meta.title} fill sizes="768px" className="object-cover" priority />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <article className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-accent-text">
            <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
          </article>
        </Container>
      </Section>

      <CtaBanner
        title="Ai nevoie de ajutor pentru alegerea ușilor?"
        description="Trimite-ne detaliile proiectului și solicită o ofertă personalizată."
        primaryCta={{ label: "Solicită oferta", href: "/oferta" }}
      />
    </>
  );
}
