import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, Ruler, Palette, MapPin, Factory, LayoutGrid, Thermometer, Sparkles, MessagesSquare } from "lucide-react";
import hero from "@/assets/hero.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import branding from "@/assets/branding.jpg";
import appCafe from "@/assets/app-cafe.jpg";
import appEvents from "@/assets/app-events.jpg";
import appOffice from "@/assets/app-office.jpg";
import { Button } from "@/components/ui/button";
import { Eyebrow, Reveal, SectionHeading, Dot } from "@/components/site/primitives";
import { BrandMarquee, ProductCard, ProcessTimeline, FaqList, CtaBanner } from "@/components/site/blocks";
import { PRODUCTS } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tashkil Paper Cups – 6 oz & 6.5 oz Paper Cup Manufacturer, Ajman UAE" },
      { name: "description", content: "Tashkil manufactures 6 oz and 6.5 oz paper cups for hot and cold beverages in Ajman, UAE. Explore products, process and custom branding enquiries." },
      { property: "og:title", content: "Tashkil Paper Cups – Ajman, UAE" },
      { property: "og:description", content: "6 oz and 6.5 oz paper cups for hot and cold beverages, manufactured in Ajman." },
    ],
  }),
  component: Home,
});

const STRIP = [
  { icon: Coffee, t: "Hot & Cold Cups", d: "Options for both beverage types." },
  { icon: Ruler, t: "6 oz & 6.5 oz", d: "Two focused, confirmed sizes." },
  { icon: Palette, t: "Branding Enquiries", d: "Ask about printed designs." },
  { icon: Factory, t: "Manufacturing Focus", d: "Made by a dedicated cup factory." },
  { icon: MapPin, t: "Ajman, UAE", d: "Serving businesses in the region." },
];

const WHY = [
  { icon: LayoutGrid, t: "Focused Product Range", d: "Four clear options — 6 oz and 6.5 oz, hot and cold — so you can choose quickly without wading through an oversized catalogue." },
  { icon: Thermometer, t: "Beverage-Specific Options", d: "Hot and cold cups are intended for different uses. We'll help you confirm which suits your drinks and serving conditions." },
  { icon: Sparkles, t: "Professional Presentation", d: "The cup is often the first thing a customer holds. A clean, well-formed cup quietly supports how your business is perceived." },
  { icon: MessagesSquare, t: "Direct Business Enquiries", d: "Speak with the manufacturer to discuss requirements and confirm specifications before placing an order." },
];

const FAQ = [
  { q: "What paper cup sizes does Tashkil offer?", a: "Tashkil's confirmed range covers two sizes: 6 oz and 6.5 oz. Both sizes are offered in versions intended for hot beverages and versions intended for cold beverages." },
  { q: "Are hot and cold paper cups available?", a: "Yes. Each size is available as a hot-beverage cup and a cold-beverage cup, giving four product options in total." },
  { q: "What is the difference between a hot cup and a cold cup?", a: "Hot and cold cups are made for different conditions — hot cups need to hold heat comfortably, while cold cups need to cope with chilled drinks and condensation. Construction can differ between them, so please confirm the right option for your specific drinks with our team." },
  { q: "Can I enquire about custom-printed paper cups?", a: "Yes, you're welcome to enquire. Share your artwork or brand guidelines and the team will confirm which print options are available for your chosen cup and quantity." },
  { q: "How can I confirm the product specifications?", a: "Technical details such as dimensions, paper weight and lid compatibility should be confirmed directly with Tashkil before ordering. Tell us how you plan to use the cups and we'll share the relevant details." },
  { q: "Can businesses discuss bulk requirements?", a: "Yes. Commercial customers can discuss quantities, packing and ongoing supply. Minimum order quantities and lead times are confirmed during the enquiry." },
  { q: "What information should I provide when requesting a quotation?", a: "Helpful details include: cup size (6 oz or 6.5 oz), hot or cold use, estimated quantity, whether you need plain or printed cups, your artwork if available, and your delivery location." },
  { q: "How do I enquire about delivery to my location?", a: "Include your city or emirate when you enquire. Delivery arrangements, timelines and any associated costs are confirmed by the team for each order." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={hero} alt="Ivory and kraft paper cups with gold rims on a cream marble surface" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/55" />
        <div className="container-x relative flex min-h-[640px] items-center py-24 md:min-h-[720px]">
          <div className="max-w-2xl">
            <Reveal><Eyebrow>Paper Cup Manufacturing · Ajman, UAE</Eyebrow></Reveal>
            <Reveal delay={100}>
              <h1 className="mt-7 text-[3.2rem] leading-[0.98] md:text-[5.5rem]">
                Quality Paper Cups <br />
                <span className="italic text-primary-deep">for Every Serve.</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-foreground/75">
                Tashkil Paper Cups Manufacturing Factory – L.L.C. produces 6 oz and 6.5 oz paper cups for hot and cold beverages, made for cafés, hospitality and businesses across the UAE.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="xl">
                <Link to="/products">Explore Our Products <ArrowRight /></Link>
              </Button>
              <Button asChild variant="goldOutline" size="xl">
                <Link to="/manufacturing">How cups are made</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="bg-cream/50">
        <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-border">
          {STRIP.map((s, i) => (
            <Reveal key={s.t} delay={i * 70} className="flex items-start gap-4 px-2 lg:px-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-soft text-primary-deep">
                <s.icon className="h-5 w-5" strokeWidth={1.4} />
              </span>
              <div>
                <p className="text-sm font-medium">{s.t}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <BrandMarquee />

      {/* PRODUCTS */}
      <section className="container-x py-24 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Our Products" title={<>The Right Cup <span className="italic text-primary-deep">for Every Serve.</span></>} intro="Explore our 6 oz and 6.5 oz paper cups, designed for businesses serving hot and cold beverages." />
          <Button asChild variant="goldOutline" size="xl" className="self-start md:self-auto">
            <Link to="/products">View All Products <ArrowRight /></Link>
          </Button>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {PRODUCTS.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">Detailed specifications such as dimensions and paper weight are available on enquiry.</p>
      </section>

      {/* INTRO */}
      <section className="bg-cream/50 py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <img src={manufacturing} alt="Illustrative image of paper cups on a forming line" width={1200} height={1408} loading="lazy" className="aspect-[5/6] w-full rounded-[1.5rem] object-cover shadow-lift" />
            <p className="mt-3 text-xs text-muted-foreground">Illustrative image.</p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="About Tashkil" title={<>Your Paper Cup <span className="italic text-primary-deep">Manufacturing Partner.</span></>} />
            <Reveal delay={100} className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>Tashkil is a paper cup manufacturer based in Ajman, producing cups for businesses that rely on dependable beverage packaging every day — from a busy café counter to a hotel breakfast service.</p>
              <p>Rather than a sprawling catalogue, we focus on two confirmed sizes, 6 oz and 6.5 oz, each available for hot or cold drinks. That focus makes it simpler to match the right cup to your menu.</p>
              <p>We know that consistency matters: cups that look and perform the same from one carton to the next help your service run smoothly and keep your presentation tidy.</p>
            </Reveal>
            <Reveal delay={200} className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {["Hot & cold options", "Two confirmed sizes", "Business-focused enquiries", "Branding discussions"].map((x) => (
                <div key={x} className="flex items-center gap-3"><Dot />{x}</div>
              ))}
            </Reveal>
            <Reveal delay={250} className="mt-10">
              <Link to="/about" className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium hover:text-primary-deep">Discover Tashkil <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="How Paper Cups Are Made" title={<>From Paper to the <span className="italic text-primary-deep">Perfect Cup.</span></>} intro="Paper cup manufacturing turns flat paper stock into a finished beverage cup through a sequence of preparation, forming and checking stages. The overview below describes the general process." />
        <div className="mt-20"><ProcessTimeline /></div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <p className="max-w-xl text-xs text-muted-foreground">General industry overview. Specific equipment and procedures used by Tashkil can be confirmed on enquiry.</p>
          <Link to="/manufacturing" className="inline-flex items-center gap-2 text-sm font-medium text-primary-deep">Explore Our Manufacturing Process <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink py-24 text-ink-foreground md:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-primary">Why Choose Tashkil</span>
            <h2 className="mt-5 text-4xl leading-tight md:text-6xl">Built Around <span className="italic text-primary">Your Business Needs.</span></h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-ink-foreground/10 md:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 90} className="bg-ink p-10 md:p-12">
                <w.icon className="h-7 w-7 text-primary" strokeWidth={1.2} />
                <h3 className="mt-6 text-3xl">{w.t}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-ink-foreground/65">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="container-x py-24 md:py-32">
        <SectionHeading eyebrow="Applications" title={<>Made for <span className="italic text-primary-deep">Everyday Business.</span></>} intro="The right paper cup supports smooth, hygienic beverage service wherever drinks are served on the go or in volume." />
        <div className="mt-16 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          <AppTile img={appCafe} title="Cafés & coffee shops" className="md:row-span-2" tall />
          <AppTile img={appEvents} title="Catering, events & hotels" className="md:col-span-2" />
          <AppTile img={appOffice} title="Offices & workplaces" />
          <Reveal className="flex flex-col justify-between rounded-[1.25rem] bg-cream p-8">
            <ul className="space-y-4 font-display text-2xl">
              <li className="flex items-center gap-3"><Dot />Restaurants & takeaway</li>
              <li className="flex items-center gap-3"><Dot />Hospitality</li>
              <li className="flex items-center gap-3"><Dot />Beverage retailers</li>
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">Typical uses for paper cups — not a list of existing customers.</p>
          </Reveal>
        </div>
      </section>

      {/* BRANDING */}
      <section className="bg-cream/50 py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <img src={branding} alt="Illustrative branded paper cups for a fictional café, Olive & Ember" width={1408} height={1008} loading="lazy" className="w-full rounded-[1.5rem] object-cover shadow-lift" />
            <p className="mt-3 text-xs text-muted-foreground">Illustrative concept using a fictional café brand.</p>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Custom Branding" title={<>Put Your Brand <span className="italic text-primary-deep">in Every Hand.</span></>} intro="A printed cup carries your identity beyond the counter. If you're considering branded cups, here's how the conversation usually unfolds." />
            <ol className="mt-10 space-y-5">
              {["Discuss your branding requirements", "Prepare or supply your artwork", "Confirm the applicable print options", "Review the proposed design and specification", "Confirm production details before proceeding"].map((s, i) => (
                <Reveal as="li" key={s} delay={i * 70} className="flex items-baseline gap-5 border-b border-border pb-5">
                  <span className="font-display text-lg italic text-primary-deep">0{i + 1}</span>
                  <span>{s}</span>
                </Reveal>
              ))}
            </ol>
            <p className="mt-6 text-sm text-muted-foreground">Custom printing options and availability are confirmed with Tashkil for each enquiry.</p>
            <Button asChild variant="goldOutline" size="xl" className="mt-8">
              <Link to="/quality">Customisation Options <ArrowRight /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-14 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr]">
        <SectionHeading eyebrow="FAQ" title={<>Questions <span className="italic text-primary-deep">buyers ask.</span></>} intro="Answers based on confirmed information. For anything else, please ask our team directly." />
        <Reveal><FaqList items={FAQ} /></Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

function AppTile({ img, title, className, tall }: { img: string; title: string; className?: string; tall?: boolean }) {
  return (
    <Reveal className={`group relative overflow-hidden rounded-[1.25rem] ${className ?? ""}`}>
      <img src={img} alt={title} loading="lazy" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${tall ? "min-h-[420px]" : "min-h-[260px]"}`} />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <p className="absolute bottom-6 left-6 font-display text-2xl text-ink-foreground md:text-3xl">{title}</p>
    </Reveal>
  );
}

