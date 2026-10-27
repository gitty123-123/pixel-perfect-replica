import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: { children: ReactNode; className?: string; delay?: number; as?: ElementType }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className, center }: { children: ReactNode; className?: string | undefined; center?: boolean | undefined }) {
  return (
    <div className={cn("flex items-center gap-4", center && "justify-center", className)}>
      <span className="h-px w-10 bg-primary" />
      <span className="eyebrow">{children}</span>
      {center && <span className="h-px w-10 bg-primary" />}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, intro, center, className }: { eyebrow: string; title: ReactNode; intro?: ReactNode; center?: boolean | undefined; className?: string | undefined }) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      <Eyebrow center={center}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl leading-[1.05] md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: ReactNode; intro: ReactNode; image?: string; imageAlt?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="container-x grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
        {image && (
          <Reveal delay={150} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] border border-primary/30 translate-x-4 translate-y-4" />
            <img src={image} alt={imageAlt ?? ""} className="aspect-[4/3] w-full rounded-[1.5rem] object-cover shadow-lift" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

/** Hairline gold-dot used as a list bullet / separator. */
export function Dot({ className }: { className?: string }) {
  return <span aria-hidden className={cn("inline-block h-1.5 w-1.5 rounded-full bg-primary", className)} />;
}
