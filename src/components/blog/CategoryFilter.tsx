import Link from "next/link";
import { cn } from "@/lib/cn";
import { blogCategories } from "@/lib/nav";

export function CategoryFilter({ active }: { active?: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/blog"
        className={cn(
          "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
          !active ? "border-accent bg-accent text-accent-foreground" : "border-border text-foreground hover:bg-muted"
        )}
      >
        Toate
      </Link>
      {blogCategories.map((category) => (
        <Link
          key={category}
          href={`/blog?categorie=${encodeURIComponent(category)}`}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            active === category
              ? "border-accent bg-accent text-accent-foreground"
              : "border-border text-foreground hover:bg-muted"
          )}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}
