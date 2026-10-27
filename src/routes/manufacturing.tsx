import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading, Dot } from "@/components/site/primitives";
import { CtaBanner, PROCESS } from "@/components/site/blocks";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing Process – How Paper Cups Are Made | Tashkil" },
      { name: "description", content: "Discover the stages involved in preparing, forming, inspecting and packing paper cups." },
      { property: "og:title", content: "How Paper Cups Are Made – Tashkil" },
      { property: "og:description", content: "Material preparation, printing, blanking, forming, inspection and packing explained." },
    ],
  }),
  component: Manufacturing,
});

const DETAIL = [
  "Paper stock suited to the intended drink is selected. Paper used for beverage cups typically carries a lining that helps it hold liquid. The material is checked and prepared before production begins.",
  "When a cup needs a design, artwork is prepared and applied to the flat paper before it is cut and formed, so the print wraps neatly around the finished cup. The method depends on the manufacturer's setup.",
  "The paper is cut into two parts: a curved fan-shaped blank that becomes the side wall, and a smaller piece that becomes the base.",
  "The blank is wrapped around a mould and its side seam is sealed. The base is inserted and sealed in place, and the top edge is rolled to form the rim you drink from.",
  "Finished cups are checked for appearance, consistent forming, seam integrity and their overall condition before packing.",
  "Cups are nested into stacks, sleeved and packed into cartons that protect them in storage and transit, then prepared for delivery.",
];

function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Process"
        title={<>How a paper cup <span className="italic text-primary-deep">takes shape.</span></>}
        intro="Discover the stages involved in preparing, forming, inspecting and packing paper cups."
        image={manufacturing}
        imageAlt="Illustrative paper cup forming line"
      />

      <section className="container-x py-24">
        <SectionHeading eyebrow="Construction basics" title={<>What makes a <span className="italic text-primary-deep">good cup.</span></>} intro="A paper cup is a simple object that depends on getting a few things right." />
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {[["Suitable material", "Paper chosen for the drink it will hold."], ["Accurate forming", "A true shape that stacks and sits steadily."], ["Seam integrity", "A side seam that stays sealed in use."], ["A sound base", "A properly fitted, sealed bottom."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80} className="rounded-[1.25rem] border border-border bg-card p-7">
              <Dot />
              <h3 className="mt-4 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream/50 py-24">
        <div className="container-x">
          <SectionHeading eyebrow="The stages" title={<>Six steps, <span className="italic text-primary-deep">paper to carton.</span></>} />
          <ol className="mt-16 space-y-0">
            {PROCESS.map((s, i) => (
              <Reveal as="li" key={s.title} className="grid gap-6 border-t border-border py-10 md:grid-cols-[120px_1fr_2fr] md:items-start">
                <span className="font-display text-6xl italic text-primary/70">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-center gap-4">
                  <s.icon className="h-6 w-6 text-primary-deep" strokeWidth={1.3} />
                  <h3 className="text-3xl">{s.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground">{DETAIL[i]}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-xs text-muted-foreground">
            This page describes the general paper cup manufacturing process. The specific equipment, printing methods and inspection steps used at Tashkil can be confirmed on enquiry. Images are illustrative.
          </p>
        </div>
      </section>

      <CtaBanner title="Have a question about how your cups are made?" />
    </>
  );
}
