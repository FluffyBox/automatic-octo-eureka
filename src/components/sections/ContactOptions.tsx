import { MessageCircle, Phone, Mail } from "lucide-react";
import { siteConfig, whatsappHref, telHref, mailtoHref, defaultWhatsappMessage } from "@/lib/site-config";

export function ContactOptions() {
  const options = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Scrie-ne direct pentru un răspuns rapid.",
      cta: "Discută cu noi pe WhatsApp",
      href: whatsappHref(defaultWhatsappMessage),
      external: true,
    },
    {
      icon: Phone,
      title: "Telefon",
      description: siteConfig.phone,
      cta: "Sună acum",
      href: telHref(),
      external: false,
    },
    {
      icon: Mail,
      title: "E-mail",
      description: siteConfig.email,
      cta: "Trimite un e-mail",
      href: mailtoHref("Solicitare ofertă uși de interior"),
      external: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {options.map((option) => (
        <a
          key={option.title}
          href={option.href}
          target={option.external ? "_blank" : undefined}
          rel={option.external ? "noopener noreferrer" : undefined}
          className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-colors hover:border-accent"
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-accent/10 text-accent">
            <option.icon className="size-7" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-lg font-semibold text-primary">{option.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{option.description}</p>
          <span className="mt-5 text-sm font-semibold text-accent">{option.cta} →</span>
        </a>
      ))}
    </div>
  );
}
