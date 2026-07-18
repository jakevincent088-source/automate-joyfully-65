import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jake Talaba — AI Automation Specialist" },
      { name: "description", content: "3+ years in customer support turned AI automation engineer. Systems-thinking, operator empathy, and CRM discipline." },
      { property: "og:title", content: "About Jake Talaba" },
      { property: "og:description", content: "Customer service background + AI automation engineering = systems that scale." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title={<>Operator empathy meets <span className="gradient-text">AI automation</span>.</>}
        sub="I turn front-line customer support experience into scalable automation systems that eliminate operational drag."
      />

      <Section>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Jake Vincent Talaba — an AI Automation Specialist, GoHighLevel
              consultant, and workflow engineer based in the Philippines.
            </p>
            <p>
              For three years I worked directly with customers on phone, chat,
              and email — consistently landing in the top brackets of CSAT, QA,
              and first-call resolution. That experience taught me exactly where
              businesses lose time, money, and trust: fragmented CRMs, missed
              leads, manual repetitive work, and slow follow-ups.
            </p>
            <p>
              I chose AI automation because it&apos;s the highest-leverage way to
              solve those problems. One well-designed workflow can save a team
              hundreds of hours per year and turn a leaky funnel into a
              conversion engine.
            </p>
            <p>
              My approach is systems-thinking first: I map the whole business
              process, identify the bottleneck, then architect the smallest,
              most reliable automation that will fix it — and document
              everything so it&apos;s maintainable long after handoff.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Focus Areas</div>
              <ul className="mt-3 space-y-2 text-sm text-foreground">
                {["AI Automation", "Workflow Engineering", "GoHighLevel", "CRM Optimization", "Customer Support Systems", "Sales Funnels", "Appointment Systems", "Email & SMS Automation"].map((s) => (
                  <li key={s} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" />{s}</li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-secondary">Industries I Love</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Dental", "Medical", "Roofing", "Real Estate", "Coaches", "Agencies", "SaaS", "Ecommerce", "Home Services"].map((s) => (
                  <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{s}</span>
                ))}
              </div>
            </GlassCard>
            <Link to="/contact" className="block text-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-3">
              Work with me →
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
