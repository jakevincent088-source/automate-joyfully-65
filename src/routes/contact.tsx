import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Discovery Call" },
      { name: "description", content: "Book a free 30-minute discovery call to explore AI automation, CRM, and workflow builds for your business." },
      { property: "og:title", content: "Contact Jake Talaba" },
      { property: "og:description", content: "Let's build smarter systems together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title={<>Ready to <span className="gradient-text">automate</span> your business?</>}
        sub="Let's build smarter systems together. Start with a free 30-minute discovery call."
      />
      <Section>
        <div className="grid lg:grid-cols-5 gap-6">
          <GlassCard className="lg:col-span-3">
            {sent ? (
              <div className="py-12 text-center">
                <div className="text-4xl">✓</div>
                <div className="mt-3 text-xl font-bold text-foreground">Message received</div>
                <div className="mt-2 text-sm text-muted-foreground">I&apos;ll reply within one business day.</div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <Field label="Full name" name="name" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Company" name="company" />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">Industry</label>
                  <select className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground">
                    {["Dental", "Medical", "Marketing Agency", "Real Estate", "Roofing", "Coaching", "SaaS", "Ecommerce", "Home Services", "Other"].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono uppercase tracking-widest text-muted">What do you want to automate?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground" placeholder="Tell me about the problem you're trying to solve..." />
                </div>
                <button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-3.5">
                  Send message →
                </button>
              </form>
            )}
          </GlassCard>

          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Book directly</div>
              <div className="mt-3 rounded-xl overflow-hidden border border-border bg-background/40">
                <iframe
                  src="https://calendly.com/jakevincent088/let-me-automate?hide_gdpr_banner=1&background_color=111827&text_color=e5e7eb&primary_color=2563eb"
                  title="Book a discovery call with Jake Talaba"
                  className="w-full h-[620px]"
                  loading="lazy"
                />
              </div>
              <a
                href="https://calendly.com/jakevincent088/let-me-automate"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-sm font-semibold py-3 hover:ring-2 hover:ring-primary/40 transition-all"
              >
                Open Calendly →
              </a>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-accent">Or reach out on</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between gap-3">
                  <span className="text-muted-foreground">Email</span>
                  <a href="mailto:jakevincent088@gmail.com" className="text-foreground font-mono hover:text-primary transition-colors">jakevincent088@gmail.com</a>
                </li>
                <li className="flex justify-between gap-3">
                  <span className="text-muted-foreground">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/jake-talaba" target="_blank" rel="noopener noreferrer" className="text-foreground font-mono hover:text-primary transition-colors">in/jake-talaba</a>
                </li>
                <li className="flex justify-between gap-3">
                  <span className="text-muted-foreground">Phone</span>
                  <a href="tel:+639154662899" className="text-foreground font-mono hover:text-primary transition-colors">+63 915-466-2899</a>
                </li>
                <li className="flex justify-between gap-3">
                  <span className="text-muted-foreground">WhatsApp</span>
                  <a href="https://wa.me/639154662899" target="_blank" rel="noopener noreferrer" className="text-foreground font-mono hover:text-primary transition-colors">+63 915-466-2899</a>
                </li>
              </ul>
            </GlassCard>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-6 text-center">
              <div className="text-sm text-muted-foreground">Response time</div>
              <div className="mt-1 text-2xl font-black gradient-text">&lt; 24 hours</div>
              <div className="mt-1 text-xs text-muted">Weekdays, PH time</div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-mono uppercase tracking-widest text-muted">{label}</label>
      <input
        name={name}
        type={type}
        required
        className="mt-1 w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-foreground focus:outline-none focus:border-primary/60"
      />
    </div>
  );
}
