import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { NAV } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-cream/60">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <img src={logo} alt="Tashkil" width={600} height={285} loading="lazy" className="h-16 w-auto" />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Tashkil Paper Cups Manufacturing Factory – L.L.C. manufactures 6 oz and 6.5 oz paper cups for hot and cold beverages in Ajman, United Arab Emirates.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/75 hover:text-primary-deep">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5">Products</p>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li>6 oz Hot Paper Cups</li>
            <li>6.5 oz Hot Paper Cups</li>
            <li>6 oz Cold Paper Cups</li>
            <li>6.5 oz Cold Paper Cups</li>
          </ul>
          <p className="eyebrow mt-8 mb-3">Location</p>
          <p className="text-sm text-foreground/75">Ajman, United Arab Emirates</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Tashkil Paper Cups Manufacturing Factory – L.L.C. All rights reserved.</p>
          <p>Some imagery is illustrative and does not depict Tashkil's facility.</p>
        </div>
      </div>
    </footer>
  );
}
