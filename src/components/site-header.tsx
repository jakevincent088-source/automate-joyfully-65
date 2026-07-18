import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/case-studies", label: "Cases" },
  { to: "/about", label: "About" },
  { to: "/resources", label: "Resources" },
  { to: "/blog", label: "Blog" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="size-6 bg-primary rounded-sm flex items-center justify-center">
            <div className="size-2 bg-background rounded-full" />
          </div>
          <span className="font-mono text-sm tracking-tighter font-bold uppercase group-hover:text-primary transition-colors">
            JVT_AUTOMATION [v3.0]
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-muted">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 py-2 border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Get Started
          </Link>
        </div>
        <button
          className="md:hidden text-muted font-mono text-xs uppercase"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "[ close ]" : "[ menu ]"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3 font-mono text-xs uppercase tracking-widest">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-primary"
              onClick={() => setOpen(false)}
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
