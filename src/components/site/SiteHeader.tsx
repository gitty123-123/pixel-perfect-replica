import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { QuoteButton } from "./QuoteButton";
import { cn } from "@/lib/utils";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/quality", label: "Quality" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled ? "bg-background/85 backdrop-blur-md shadow-soft" : "bg-background",
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Tashkil home" className="shrink-0">
          <img src={logo} alt="Tashkil Paper Cups Manufacturing Factory" width={600} height={285} className="h-14 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-9" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="relative py-2 text-sm text-foreground/80 transition-colors hover:text-primary-deep data-[status=active]:text-primary-deep after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform data-[status=active]:after:scale-x-100"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <QuoteButton />
        </div>
        <button
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-background animate-in fade-in slide-in-from-top-2">
          <nav className="container-x flex flex-col pt-6" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-border py-5 font-display text-3xl data-[status=active]:text-primary-deep"
              >
                {n.label}
                <ArrowRight className="h-4 w-4 text-primary" />
              </Link>
            ))}
            <div className="pt-8">
              <QuoteButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
