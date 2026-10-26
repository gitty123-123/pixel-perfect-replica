import { Link } from "@tanstack/react-router";
import { ArrowRight, Layers, Printer, Scissors, CircleDashed, ScanSearch, PackageCheck } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { Reveal, Dot } from "./primitives";
import { QuoteButton } from "./QuoteButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function BrandMarquee() {
  const brands = ["BRAND 1", "BRAND 2", "BRAND 3", "BRAND 4", "BRAND 5"];
  const seq = [...brands, ...brands]; // one half
  return (
    <section aria-label="Brands" className="border-y border-border bg-background py-7 overflow-hidden">
      <div className="relative [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <ul key={half} aria-hidden={half === 1} className="flex shrink-0 items-center">
              {seq.map((b, i) => (
                <li key={i} className="flex items-center">
                  <span className="px-10 font-display text-2xl tracking-[0.25em] text-foreground/70 md:px-14 md:text-3xl">{b}</span>
                  <Dot />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ p, i }: { p: (typeof PRODUCTS)[number]; i: number }) {
  return (
    <Reveal delay={i * 90} className="group">
      <Link to="/products" hash={p.id} className="block">
        <div className="relative overflow-hidden rounded-[1.25rem] bg-cream">
          <img src={p.image} alt={p.name} width={912} height={1104} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
          <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary-deep">
            {p.type} beverages
          </span>
        </div>
        <div className="pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-2xl">{p.name}</h3>
            <span className="font-display text-xl italic text-primary-deep">{p.size}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary-deep">
            View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export const PROCESS = [
  { icon: Layers, title: "Material Preparation", text: "Suitable paper material is selected and prepared according to the required product specification and the drink it will hold." },
  { icon: Printer, title: "Printing", text: "Where a design is required, branding and artwork may be applied to the paper before the cup is formed." },
  { icon: Scissors, title: "Blank Preparation", text: "Printed or plain paper is cut into the curved side-wall blanks and base pieces that make up each cup." },
  { icon: CircleDashed, title: "Cup Forming", text: "The blank is wrapped into a cone, the side seam is sealed, the base is fitted and sealed, and the rim is curled." },
  { icon: ScanSearch, title: "Quality Inspection", text: "Finished cups are checked for visual consistency, sound construction and visible defects." },
  { icon: PackageCheck, title: "Packing & Dispatch", text: "Cups are nested, counted into sleeves, packed into cartons and prepared for delivery." },
];

export function ProcessTimeline() {
  return (
    <ol className="relative grid gap-10 lg:grid-cols-6 lg:gap-6">
      <span aria-hidden className="absolute left-6 top-0 bottom-0 w-px bg-primary/40 lg:left-0 lg:right-0 lg:top-6 lg:bottom-auto lg:h-px lg:w-auto" />
      {PROCESS.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 110} className="relative pl-20 lg:pl-0 lg:pt-20">
          <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background text-primary-deep">
            <s.icon className="h-5 w-5" strokeWidth={1.4} />
          </span>
          <span className="font-display text-sm italic text-primary-deep">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-1 text-2xl leading-tight">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((f, i) => (
        <AccordionItem key={i} value={`f${i}`} className="border-border">
          <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline hover:text-primary-deep md:text-2xl">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function CtaBanner({ title = "Ready to discuss your paper cup requirements?", text = "Share your preferred size, beverage type and branding needs, and our team will help you confirm the right specification." }: { title?: string; text?: string }) {
  return (
    <section className="container-x py-20 md:py-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-ink-foreground md:px-16 md:py-20">
        <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-primary/30" />
        <div aria-hidden className="absolute -right-10 -top-10 h-80 w-80 rounded-full border border-primary/20" />
        <div className="relative grid items-end gap-10 md:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="eyebrow text-primary">Enquiries</span>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xl text-ink-foreground/70">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <QuoteButton />
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full border border-ink-foreground/30 px-7 text-sm hover:border-primary hover:text-primary">
              Contact page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
