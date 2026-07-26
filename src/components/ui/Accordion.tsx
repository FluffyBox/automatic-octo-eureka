import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item) => (
        <details key={item.question} className="group p-6 open:pb-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-primary marker:content-none">
            <span>{item.question}</span>
            <ChevronDown
              className="size-5 shrink-0 text-accent-text transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="mt-4 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
