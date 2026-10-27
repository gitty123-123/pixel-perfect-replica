import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Building2, Info, CheckCircle2 } from "lucide-react";
import { Eyebrow, Reveal, Dot } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tashkil – Paper Cup Enquiries, Ajman UAE" },
      { name: "description", content: "Tell us about your required paper cup size, beverage application, branding preferences and order requirements." },
      { property: "og:title", content: "Contact Tashkil Paper Cups" },
      { property: "og:description", content: "Discuss your paper cup requirements with Tashkil." },
    ],
  }),
  component: Contact,
});

type Errors = Record<string, string>;
const REQUIRED = ["name", "email", "product", "beverage"];

export function validateEnquiry(data: Record<string, string>): Errors {
  const e: Errors = {};
  for (const k of REQUIRED) if (!data[k]?.trim()) e[k] = "This field is required.";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Please enter a valid email address.";
  return e;
}

const field = "mt-2 w-full rounded-lg border bg-card px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [preview, setPreview] = useState<Record<string, string> | null>(null);

  function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = Object.fromEntries(new FormData(ev.currentTarget).entries()) as Record<string, string>;
    const e = validateEnquiry(data);
    setErrors(e);
    // Demonstration only: nothing is sent or stored. Connect a backend here later.
    setPreview(Object.keys(e).length ? null : data);
  }

  const F = ({ name, label, required, children }: { name: string; label: string; required?: boolean; children: React.ReactNode }) => (
    <label className="block text-sm">
      <span className="font-medium">{label}{required && <span className="text-primary-deep"> *</span>}</span>
      {children}
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );
  const cls = (n: string) => cn(field, errors[n] ? "border-destructive" : "border-input");

  return (
    <>
      <section className="border-b border-border">
        <div className="container-x py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">Let's Discuss Your <span className="italic text-primary-deep">Paper Cup Requirements.</span></h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground">Tell us about your required size, beverage application, branding preferences, and order requirements.</p>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_1.7fr]">
        <aside className="space-y-8">
          <div className="rounded-[1.25rem] bg-cream/70 p-8">
            <p className="eyebrow">Company</p>
            <div className="mt-5 space-y-5 text-sm">
              <p className="flex gap-3"><Building2 className="h-5 w-5 shrink-0 text-primary-deep" strokeWidth={1.4} />Tashkil Paper Cups Manufacturing Factory – L.L.C.</p>
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-primary-deep" strokeWidth={1.4} />Ajman, United Arab Emirates</p>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-border p-8">
            <p className="eyebrow">Helpful to include</p>
            <ul className="mt-5 space-y-3 text-sm">
              {["Cup size: 6 oz or 6.5 oz", "Hot or cold beverages", "Estimated quantity", "Plain or printed cups", "Artwork, if available", "Delivery city or emirate"].map((x) => (
                <li key={x} className="flex items-center gap-3"><Dot />{x}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          {preview ? (
            <div className="rounded-[1.5rem] border border-primary/40 bg-card p-10 shadow-soft">
              <CheckCircle2 className="h-8 w-8 text-primary" strokeWidth={1.4} />
              <h2 className="mt-4 text-3xl">Enquiry preview</h2>
              <p className="mt-3 flex gap-2 rounded-lg bg-cream/70 p-4 text-sm text-muted-foreground">
                <Info className="h-4 w-4 shrink-0 mt-0.5" /> This is a demonstration. Your enquiry has <strong className="font-semibold">not</strong> been sent and no information has been stored.
              </p>
              <dl className="mt-6 divide-y divide-border text-sm">
                {Object.entries(preview).filter(([, v]) => v).map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3"><dt className="capitalize text-muted-foreground">{k}</dt><dd className="text-right">{v}</dd></div>
                ))}
              </dl>
              <Button variant="goldOutline" size="xl" className="mt-8" onClick={() => setPreview(null)}>Edit enquiry</Button>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} className="grid gap-6 rounded-[1.5rem] border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-10">
              <F name="name" label="Full Name" required><input name="name" className={cls("name")} autoComplete="name" /></F>
              <F name="company" label="Company Name"><input name="company" className={cls("company")} autoComplete="organization" /></F>
              <F name="email" label="Email Address" required><input name="email" type="email" className={cls("email")} autoComplete="email" /></F>
              <F name="phone" label="Phone Number"><input name="phone" type="tel" className={cls("phone")} autoComplete="tel" /></F>
              <F name="product" label="Product Interest" required>
                <select name="product" defaultValue="" className={cls("product")}>
                  <option value="" disabled>Select a size</option>
                  <option>6 oz</option><option>6.5 oz</option><option>Both sizes</option>
                </select>
              </F>
              <F name="beverage" label="Beverage Type" required>
                <select name="beverage" defaultValue="" className={cls("beverage")}>
                  <option value="" disabled>Select a type</option>
                  <option>Hot beverages</option><option>Cold beverages</option><option>Both</option>
                </select>
              </F>
              <F name="quantity" label="Estimated Quantity"><input name="quantity" className={cls("quantity")} placeholder="e.g. 10,000 cups" /></F>
              <F name="branding" label="Custom Branding">
                <select name="branding" defaultValue="" className={cls("branding")}>
                  <option value="">Not sure yet</option><option>Plain cups</option><option>Printed with my brand</option>
                </select>
              </F>
              <div className="md:col-span-2"><F name="location" label="Delivery Location"><input name="location" className={cls("location")} placeholder="City or emirate" /></F></div>
              <div className="md:col-span-2"><F name="notes" label="Additional Requirements"><textarea name="notes" rows={4} className={cls("notes")} /></F></div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">Demonstration form — nothing is sent or stored.</p>
                <Button type="submit" variant="gold" size="xl">Preview enquiry</Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
