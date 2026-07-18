import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-5 bg-primary rounded-sm" />
            <span className="font-mono text-xs tracking-tighter font-bold uppercase">
              JVT_AUTOMATION
            </span>
          </div>
          <p className="text-sm text-muted max-w-sm">
            AI automation, GoHighLevel CRM, and workflow engineering for businesses
            ready to scale without adding headcount.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
            Navigate
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <Link to="/services" className="hover:text-foreground">Services</Link>
            <Link to="/portfolio" className="hover:text-foreground">Portfolio</Link>
            <Link to="/case-studies" className="hover:text-foreground">Case Studies</Link>
            <Link to="/about" className="hover:text-foreground">About</Link>
            <Link to="/resources" className="hover:text-foreground">Resources</Link>
            <Link to="/blog" className="hover:text-foreground">Blog</Link>
          </div>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
            Connect
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted">
            <a href="#" className="hover:text-foreground">LinkedIn</a>
            <a href="#" className="hover:text-foreground">GitHub</a>
            <a href="#" className="hover:text-foreground">Email</a>
            <Link to="/contact" className="hover:text-foreground">Book a Call</Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[10px] text-muted">
          © {new Date().getFullYear()} JAKE VINCENT TALABA // ALL SYSTEMS OPERATIONAL
        </div>
        <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
          Built with automation in mind
        </div>
      </div>
    </footer>
  );
}
