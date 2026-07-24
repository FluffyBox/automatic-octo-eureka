import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/90 focus-visible:ring-accent",
  secondary:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary",
  ghost: "bg-transparent text-foreground hover:bg-muted focus-visible:ring-primary",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

type CommonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(baseClasses, variantClasses[variant], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isExternal = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
