import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

const nav = [
  { to: "/", label: "Home", exact: true },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
] as const;

const exploreItems = [
  { to: "/portfolio", label: "Portfolio", desc: "Case studies & builds" },
  { to: "/workflows", label: "Workflows", desc: "Automation blueprints" },
  { to: "/gallery", label: "Gallery", desc: "Funnels & booking pages" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [mobileExploreOpen, setMobileExploreOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setExploreOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setExploreOpen(false), 150);
  };

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
          {nav.slice(0, 2).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
              activeOptions={"exact" in n && n.exact ? { exact: true } : undefined}
            >
              {n.label}
            </Link>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setExploreOpen((v) => !v)}
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
              aria-expanded={exploreOpen}
              aria-haspopup="true"
            >
              Explore Works
              <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${exploreOpen ? "rotate-180" : ""}`}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {exploreOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="rounded-xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/10 p-2">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setExploreOpen(false)}
                      className="block rounded-lg px-3 py-2.5 hover:bg-white/5 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {nav.slice(2).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground transition-colors"
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
            {nav.slice(0, 2).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <div>
              <button
                type="button"
                onClick={() => setMobileExploreOpen((v) => !v)}
                className="w-full flex items-center justify-between text-muted-foreground hover:text-foreground"
              >
                <span>Explore Works</span>
                <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${mobileExploreOpen ? "rotate-180" : ""}`}>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {mobileExploreOpen && (
                <div className="mt-3 ml-3 pl-3 border-l border-border flex flex-col gap-3">
                  {exploreItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {nav.slice(2).map((n) => (
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
