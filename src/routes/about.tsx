import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Reveal, SectionHeading, Dot } from "@/components/site/primitives";
import { CtaBanner } from "@/components/site/blocks";
import appCafe from "@/assets/app-cafe.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Tashkil – Paper Cup Manufacturer in Ajman, UAE" },
      { name: "description", content: "Tashkil Paper Cups Manufacturing Factory – L.L.C. is a paper cup manufacturer based in Ajman, United Arab Emirates." },
      { property: "og:title", content: "About Tashkil Paper Cups" },
      { property: "og:description", content: "A focused paper cup manufacturer in Ajman, UAE." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Tashkil"
        title={<>A focused maker of <span className="italic text-primary-deep">paper cups.</span></>}
        intro="Tashkil Paper Cups Manufacturing Factory – L.L.C. is based in Ajman, United Arab Emirates, and manufactures paper cups for businesses serving hot and cold beverages."
        image={appCafe}
        imageAlt="A paper cup handed across a café counter"
      />

      <section className="container-x grid gap-14 py-24 lg:grid-cols-2 lg:gap-20">
        <SectionHeading eyebrow="What we do" title={<>Simple range. <span className="italic text-primary-deep">Clear purpose.</span></>} />
        <Reveal className="space-y-5 leading-relaxed text-muted-foreground">
          <p>We concentrate on a deliberately compact product range: 6 oz and 6.5 oz paper cups, each available for hot or for cold drinks. This keeps choices straightforward for the cafés, restaurants, hotels and other businesses we work with.</p>
          <p>The name Tashkil reflects the idea of forming and shaping — which is, at heart, what we do: turning paper into a cup that's ready for service.</p>
          <p>We'd rather explain our products clearly and confirm the details with you than make promises on a website. Every enquiry is an opportunity to understand what you serve and recommend the most suitable cup.</p>
        </Reveal>
      </section>

      <section className="bg-cream/50 py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <img src={manufacturing} alt="Illustrative paper cup production" loading="lazy" className="aspect-[4/5] w-full rounded-[1.5rem] object-cover shadow-lift" />
            <p className="mt-3 text-xs text-muted-foreground">Illustrative image.</p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="How we work" title={<>Principles we <span className="italic text-primary-deep">work by.</span></>} />
            <div className="mt-10 space-y-8">
              {[
                ["Clarity", "Honest product information, with specifications confirmed directly rather than assumed."],
                ["Consistency", "Cups that look and perform alike from carton to carton."],
                ["Responsiveness", "Practical answers to the questions businesses actually ask."],
                ["Partnership", "Understanding your service so we can suggest the right cup."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 80} className="flex gap-5">
                  <Dot className="mt-3" />
                  <div>
                    <h3 className="text-2xl">{t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading center eyebrow="Who we serve" title={<>Businesses that <span className="italic text-primary-deep">serve drinks.</span></>} />
        <Reveal className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-x-10 gap-y-4 font-display text-2xl">
          {["Cafés", "Restaurants", "Hotels", "Offices", "Caterers", "Beverage retailers", "Distributors"].map((x) => (
            <span key={x} className="flex items-center gap-3"><Dot />{x}</span>
          ))}
        </Reveal>
        <p className="mt-8 text-center text-xs text-muted-foreground">Typical customer types — not a list of named clients.</p>
      </section>

      <CtaBanner />
    </>
  );
}
