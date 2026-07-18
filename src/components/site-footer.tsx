import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 left-1/4 h-40 w-[600px] -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-0 right-1/4 h-40 w-[600px] -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="size-8 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent" />
              <span className="font-bold text-lg text-foreground">
                Jake Talaba
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              I build AI-powered automation systems, CRM platforms, and
              workflow engines that help businesses eliminate repetitive work
              and scale operations.
            </p>
            <div className="mt-6 flex gap-3">
              {["LinkedIn", "GitHub", "Email"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="size-10 rounded-xl border border-border bg-card/50 hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center text-xs text-muted-foreground"
                >
                  {s.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              Explore
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/workflows" className="hover:text-foreground">Workflow Library</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground">Funnel Gallery</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              Company
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/experience" className="hover:text-foreground">Experience</Link></li>
              <li><Link to="/certifications" className="hover:text-foreground">Certifications</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-foreground">Resources</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>© {new Date().getFullYear()} Jake Vincent Talaba. All systems automated.</div>
          <div className="flex gap-6 font-mono uppercase tracking-widest">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
