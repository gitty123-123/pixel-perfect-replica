import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading } from "@/components/site/primitives";
import { CtaBanner } from "@/components/site/blocks";
import branding from "@/assets/branding.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Customisation – Branded Paper Cups | Tashkil" },
      { name: "description", content: "Understand paper cup construction, product suitability and how to enquire about custom-printed cups with Tashkil." },
      { property: "og:title", content: "Quality & Customisation – Tashkil" },
      { property: "og:description", content: "Paper cup quality considerations and branded cup enquiries." },
    ],
  }),
  component: Quality,
});

const QUALITY = [
  ["Correct forming", "A cup that is evenly shaped stacks cleanly, dispenses easily and sits steadily on a counter."],
  ["Seam & base", "Well-sealed side seams and bases are central to a cup that holds its drink reliably."],
  ["Clean rim", "A smoothly rolled rim is comfortable to drink from and helps lids sit properly where used."],
  ["Visual consistency", "Matching appearance across cartons keeps your service looking orderly."],
  ["Right cup, right drink", "Using hot cups for hot drinks and cold cups for cold drinks matters for performance."],
  ["Careful packing", "Protective packing helps cups arrive clean and undamaged."],
];

const ARTWORK = [
  ["Share your brand", "Logo files, colours and any brand guidelines you follow."],
  ["Choose the cup", "6 oz or 6.5 oz, hot or cold — the cup determines the print area."],
  ["Confirm print options", "We'll explain which options apply to your cup and quantity."],
  ["Review a proof", "Check the proposed design and specification before approval."],
  ["Confirm production", "Quantities, timelines and delivery are agreed before production begins."],
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality & Customisation"
        title={<>Details that <span className="italic text-primary-deep">make the difference.</span></>}
        intro="Understanding paper cup construction, product suitability and branding options helps businesses make more informed packaging decisions."
        image={branding}
        imageAlt="Illustrative branded cups for a fictional café"
      />

      <section className="container-x py-24">
        <SectionHeading eyebrow="Quality considerations" title={<>What to look for <span className="italic text-primary-deep">in a paper cup.</span></>} />
        <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {QUALITY.map(([t, d], i) => (
            <Reveal key={t} delay={(i % 3) * 80} className="border-t border-primary/60 pt-6">
              <span className="font-display italic text-primary-deep">0{i + 1}</span>
              <h3 className="mt-2 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="customisation" className="bg-ink py-24 text-ink-foreground">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <span className="eyebrow text-primary">Customisation</span>
            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Enquire about <span className="italic text-primary">branded cups.</span></h2>
            <p className="mt-6 leading-relaxed text-ink-foreground/65">
              Printed cups can carry your identity to every customer. Print options, colours, quantities and timelines vary, so they are confirmed with Tashkil for each request rather than guaranteed in advance.
            </p>
          </Reveal>
          <ol>
            {ARTWORK.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 70} className="flex gap-6 border-b border-ink-foreground/15 py-6">
                <span className="font-display text-2xl italic text-primary">0{i + 1}</span>
                <div>
                  <h3 className="text-2xl">{t}</h3>
                  <p className="mt-1 text-sm text-ink-foreground/60">{d}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Artwork tips" title={<>Preparing <span className="italic text-primary-deep">your artwork.</span></>} intro="A little preparation makes the review stage quicker." />
        <ul className="mt-10 grid gap-4 md:grid-cols-3 text-sm">
          {["Supply vector logo files where possible", "Note any exact brand colours you use", "Keep key details away from the seam and rim", "Simple designs read well on a small cup", "Mention if you need different designs per size", "Ask us anything you're unsure about"].map((t) => (
            <li key={t} className="rounded-[1rem] bg-cream/70 px-6 py-5">{t}</li>
          ))}
        </ul>
      </section>

      <CtaBanner title="Thinking about branded cups?" text="Tell us about your brand and preferred cup, and we'll explain the options available." />
    </>
  );
}
