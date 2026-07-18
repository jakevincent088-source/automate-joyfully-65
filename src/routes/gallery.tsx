import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Funnel & Website Gallery — Jake Talaba" },
      { name: "description", content: "Landing pages, lead funnels, appointment funnels, business websites, and membership sites." },
      { property: "og:title", content: "Funnel & Website Gallery" },
      { property: "og:description", content: "Selected funnels and site builds." },
    ],
  }),
  component: Gallery,
});

const items = [
  { title: "Dental Booking Funnel", type: "Appointment Funnel", goal: "Book new patient appointments", tools: ["GHL", "Calendly"], grad: "from-primary/40 to-secondary/40" },
  { title: "Roofing Lead Funnel", type: "Lead Funnel", goal: "Capture and qualify roofing quotes", tools: ["GHL", "Twilio"], grad: "from-secondary/40 to-accent/40" },
  { title: "Coach Landing Page", type: "Landing Page", goal: "Book strategy calls", tools: ["GHL"], grad: "from-accent/40 to-primary/40" },
  { title: "Agency Portfolio Site", type: "Business Website", goal: "Showcase services & convert", tools: ["GHL"], grad: "from-primary/40 to-accent/40" },
  { title: "Membership Portal", type: "Membership Site", goal: "Gated content + community", tools: ["GHL"], grad: "from-secondary/40 to-primary/40" },
  { title: "Consultant Booking Page", type: "Booking Page", goal: "Frictionless discovery calls", tools: ["Calendly", "GHL"], grad: "from-accent/40 to-secondary/40" },
];

function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title={<>Funnels, sites, and <span className="gradient-text">booking pages</span>.</>}
        sub="A curated view of conversion-focused builds across industries."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((i) => (
            <GlassCard key={i.title} className="!p-0 overflow-hidden">
              <div className={`h-40 bg-gradient-to-br ${i.grad} relative`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded">{i.type}</div>
              </div>
              <div className="p-5">
                <div className="text-lg font-bold text-foreground">{i.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{i.goal}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">{i.tools.map((t)=><span key={t} className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>)}</div>
                <div className="mt-4 text-xs font-mono uppercase text-muted">Live preview placeholder</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
