"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navLinks, navCta } from "@/lib/nav";
import { cn } from "@/lib/cn";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl font-semibold tracking-tight text-primary"
          onClick={() => setMobileOpen(false)}
        >
          Parquet <span className="text-accent">Doors</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigare principală">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.children) {
              return (
                <div key={link.href} className="group relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                      isActive && "text-accent"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-56 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
                  isActive && "text-accent"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={navCta.href} variant="primary">
            {navCta.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-primary lg:hidden"
          aria-label={mobileOpen ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href={navCta.href} variant="primary" className="mt-3 w-full" onClick={() => setMobileOpen(false)}>
              {navCta.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
