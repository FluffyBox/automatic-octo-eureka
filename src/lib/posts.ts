import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { blogCategories } from "@/lib/nav";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

const frontmatterSchema = z.object({
  title: z.string(),
  date: z.string(),
  category: z.enum(blogCategories),
  excerpt: z.string(),
  cover: z.string(),
});

export type PostMeta = z.infer<typeof frontmatterSchema> & { slug: string };

export function getAllPosts(): PostMeta[] {
  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".mdx"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
    const { data } = matter(raw);
    const parsed = frontmatterSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error(`Invalid frontmatter in ${filename}: ${parsed.error.message}`);
    }
    return { ...parsed.data, slug };
  });

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  const parsed = frontmatterSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error(`Invalid frontmatter in ${slug}.mdx: ${parsed.error.message}`);
  }

  return { content, meta: { ...parsed.data, slug } };
}
