import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — CRM & Automation Templates" },
      { name: "description", content: "Free CRM checklists, automation audit templates, workflow docs, AI prompt library, and SOP templates." },
      { property: "og:title", content: "Resources" },
      { property: "og:description", content: "Templates and tools to accelerate your automation build." },
    ],
  }),
  component: Resources,
});

const resources = [
  { t: "CRM Checklist", d: "40-point audit checklist for any CRM setup.", type: "PDF" },
  { t: "Automation Audit Template", d: "Map your current automations, gaps, and wins.", type: "Sheet" },
  { t: "Workflow Documentation Template", d: "Standard format for maintainable workflow docs.", type: "Doc" },
  { t: "AI Prompt Library", d: "Battle-tested prompts for CRM, support, and ops.", type: "Notion" },
  { t: "SOP Templates", d: "Repeatable SOP scaffolds for support & ops teams.", type: "Doc" },
  { t: "GoHighLevel Snapshot", d: "Ready-to-import GHL snapshot (future release).", type: "Snapshot" },
];

function Resources() {
  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title={<>Templates that <span className="gradient-text">save you weeks</span>.</>}
        sub="Battle-tested checklists, docs, and prompt libraries. Free to use in your business."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <GlassCard key={r.t}>
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-mono uppercase tracking-widest text-primary">{r.type}</div>
                <span className="text-[10px] font-mono text-muted">Coming soon</span>
              </div>
              <div className="mt-3 text-lg font-bold text-foreground">{r.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              <button className="mt-4 w-full rounded-full border border-border bg-background/60 py-2 text-xs font-semibold text-foreground hover:border-primary/50 transition-colors">
                Notify me when live
              </button>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
