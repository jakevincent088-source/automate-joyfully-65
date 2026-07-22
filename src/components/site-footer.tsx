import { Link } from "@tanstack/react-router";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/639154662899",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.38-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.8 1 1.02-3.7-.24-.38a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.94-9.84 9.94zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jake-talaba",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.65c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22h-4.5V8z"/></svg>
    ),
  },
  {
    label: "Phone · +63 915-466-2899",
    href: "tel:+639154662899",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z"/></svg>
    ),
  },
  {
    label: "Email · jakevincent088@gmail.com",
    href: "mailto:jakevincent088@gmail.com",
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" className="size-4 fill-current"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z"/></svg>
    ),
  },
];

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
              <span className="font-bold text-lg text-foreground">Jake Talaba</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              I build AI-powered automation systems, CRM platforms, and workflow
              engines that help businesses eliminate repetitive work and scale operations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  aria-label={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-2 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary hover:-translate-y-0.5 transition-all"
                >
                  {c.icon}
                  <span>{c.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Explore</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
              <li><Link to="/workflows" className="hover:text-foreground">Workflow Library</Link></li>
              <li><Link to="/gallery" className="hover:text-foreground">Funnel Gallery</Link></li>
              <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4">Company</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/experience" className="hover:text-foreground">Experience</Link></li>
              <li><Link to="/certifications" className="hover:text-foreground">Certifications</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
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
