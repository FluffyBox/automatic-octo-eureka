"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

const SESSION_KEY = "popup-oferta-shown";
const EXCLUDED_PATHS = ["/oferta", "/contact"];
const DELAY_MS = 20000;

export function ContactPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (EXCLUDED_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "1");
    }, DELAY_MS);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Solicită o ofertă"
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-card p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Închide"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
        >
          <X className="size-5" />
        </button>
        <h2 className="pr-8 text-xl font-semibold text-primary">
          Ai nevoie de ajutor pentru alegerea ușilor?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Trimite-ne detaliile proiectului și solicită o ofertă personalizată.
        </p>
        <Button
          href={whatsappHref(defaultWhatsappMessage)}
          variant="primary"
          className="mt-6 w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Solicită oferta
        </Button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="mt-3 w-full text-center text-sm text-muted-foreground hover:text-foreground"
        >
          Nu acum
        </button>
      </div>
    </div>
  );
}
