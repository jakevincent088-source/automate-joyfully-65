import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/workflows", label: "Workflows" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative size-8 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg shadow-secondary/40">
            <span className="font-mono text-[11px] font-black text-white">JV</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent blur-lg opacity-60 -z-10 group-hover:opacity-90 transition-opacity" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-tight text-foreground">
              Jake Talaba
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
              AI Automation Studio
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Book a Discovery Call</span>
            <span className="relative">→</span>
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center size-10 rounded-lg border border-border text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-5 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold"
              onClick={() => setOpen(false)}
            >
              Book a Discovery Call →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
