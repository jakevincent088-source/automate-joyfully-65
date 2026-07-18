import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Learning — Jake Talaba" },
      { name: "description", content: "Current focus and future certifications across GoHighLevel, AI, CRM, and workflow automation." },
      { property: "og:title", content: "Certifications & Learning" },
      { property: "og:description", content: "Active learning journey and future certifications." },
    ],
  }),
  component: Certs,
});

function Certs() {
  return (
    <div>
      <PageHero
        eyebrow="Certifications"
        title={<>Actively learning. <span className="gradient-text">Always shipping.</span></>}
        sub="Certifications signal maintenance, not mastery. Portfolio work is the proof — this is the roadmap."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          <GlassCard>
            <div className="text-xs font-mono uppercase tracking-widest text-accent">Current Focus</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {["GoHighLevel Mastery", "AI Automation Systems", "Workflow Engineering", "CRM Optimization", "Zapier Advanced"].map((c) => (
                <li key={c} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" /> {c}</li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard>
            <div className="text-xs font-mono uppercase tracking-widest text-secondary">On the Roadmap</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Official GoHighLevel Certification", "HubSpot CRM Certification", "Salesforce Trailhead", "Make Certification", "OpenAI Courses", "Google AI Certifications"].map((c) => (
                <li key={c} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-secondary" /> {c}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
