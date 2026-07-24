import { MessageCircle } from "lucide-react";
import { whatsappHref, defaultWhatsappMessage } from "@/lib/site-config";

export function WhatsappButton() {
  return (
    <a
      href={whatsappHref(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discută cu noi pe WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
