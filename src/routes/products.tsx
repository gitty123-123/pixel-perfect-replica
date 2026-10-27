import { createFileRoute } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/products";
import { PageHero, Reveal, Dot, SectionHeading } from "@/components/site/primitives";
import { CtaBanner } from "@/components/site/blocks";
import { QuoteButton } from "@/components/site/QuoteButton";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products – 6 oz & 6.5 oz Hot and Cold Paper Cups | Tashkil" },
      { name: "description", content: "Tashkil's paper cup range: 6 oz and 6.5 oz cups for hot beverages and for cold beverages. Specifications confirmed on enquiry." },
      { property: "og:title", content: "Tashkil Paper Cup Products" },
      { property: "og:description", content: "6 oz and 6.5 oz paper cups for hot and cold beverages." },
    ],
  }),
  component: Products,
});

const SPEC_ROWS = ["Capacity", "Beverage type", "Dimensions", "Paper weight", "Lid compatibility", "Packing per carton", "Minimum order"];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Four cups. <span className="italic text-primary-deep">One clear choice.</span></>}
        intro="Our confirmed range covers 6 oz and 6.5 oz paper cups, each offered for hot beverages or cold beverages. Choose by serving size and drink type, then confirm the details with our team."
        image={hero}
        imageAlt="Paper cups on a cream marble surface"
      />

      <section className="container-x py-20">
        <div className="grid gap-4 md:grid-cols-4">
          {PRODUCTS.map((p) => (
            <a key={p.id} href={`#${p.id}`} className="rounded-full border border-border px-5 py-3 text-center text-sm hover:border-primary hover:text-primary-deep">
              {p.name}
            </a>
          ))}
        </div>
      </section>

      {PRODUCTS.map((p, i) => (
        <section key={p.id} id={p.id} className={`scroll-mt-24 py-20 md:py-28 ${i % 2 === 0 ? "bg-cream/50" : ""}`}>
          <div className={`container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20`}>
            <Reveal className={i % 2 ? "lg:order-2" : ""}>
              <img src={p.image} alt={p.name} width={912} height={1104} loading="lazy" className="mx-auto aspect-[4/5] w-full max-w-md rounded-[1.5rem] object-cover shadow-lift" />
            </Reveal>
            <Reveal delay={120}>
              <span className="eyebrow">{p.type} beverages · {p.size}</span>
              <h2 className="mt-4 text-5xl md:text-6xl">{p.name}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
              <p className="mt-6 text-sm font-medium">Commonly used for</p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
                {p.uses.map((u) => <li key={u} className="flex items-center gap-2"><Dot />{u}</li>)}
              </ul>
              <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
                {SPEC_ROWS.map((r) => (
                  <div key={r} className="flex justify-between gap-6 py-3">
                    <dt className="text-muted-foreground">{r}</dt>
                    <dd className={r === "Capacity" || r === "Beverage type" ? "font-medium" : "italic text-muted-foreground"}>
                      {r === "Capacity" ? p.size : r === "Beverage type" ? `${p.type} beverages` : "Contact us to confirm"}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8"><QuoteButton label="Request this cup" /></div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="container-x py-24">
        <SectionHeading eyebrow="Choosing a cup" title={<>Hot or cold — <span className="italic text-primary-deep">which do you need?</span></>} intro="Hot and cold cups are built for different conditions, so they shouldn't be treated as interchangeable. Consider the following when choosing." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            ["Drink temperature", "Hot cups are intended for heated drinks; cold cups for chilled drinks that may produce condensation."],
            ["Serving size", "6 oz suits short drinks and tasting portions; 6.5 oz gives a little extra room, for example for milk."],
            ["Your setting", "Think about how drinks are carried, how long they're held and whether lids are needed — then confirm suitability with us."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 90} className="border-t border-primary pt-6">
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
