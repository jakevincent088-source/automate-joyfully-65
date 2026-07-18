import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Jake Talaba" },
      { name: "description", content: "Customer service and data operations experience that translates into automation, CRM, and support engineering." },
      { property: "og:title", content: "Experience" },
      { property: "og:description", content: "The operator foundation behind the automation practice." },
    ],
  }),
  component: Experience,
});

const roles = [
  {
    dates: "2022 — 2025",
    title: "Customer Service Representative",
    company: "BPO / Multi-account",
    bullets: [
      "Handled phone, chat, and email support with consistently high CSAT, QA, and First Call Resolution metrics.",
      "Managed customer records in Salesforce and Zendesk.",
      "Collaborated cross-team to resolve complex issues and escalations.",
      "Documented recurring issues and proposed process improvements.",
    ],
    skills: ["Salesforce", "Zendesk", "CSAT", "QA", "SOPs"],
  },
  {
    dates: "2025 — 2026",
    title: "Data Encoder",
    company: "Administrative Operations",
    bullets: [
      "Maintained accurate records across spreadsheets and internal systems.",
      "Supported appointment scheduling, calendar management, and admin ops.",
      "Built lightweight automation using Sheets, Notion, and Google Workspace.",
    ],
    skills: ["Google Sheets", "Notion", "Calendar Ops", "Data Integrity"],
  },
];

function Experience() {
  return (
    <div>
      <PageHero
        eyebrow="Experience"
        title={<>The <span className="gradient-text">operator foundation</span> behind the automation.</>}
        sub="Three years of front-line customer support and admin operations shape how I design systems today."
      />
      <Section>
        <div className="relative border-l border-border/60 pl-8 space-y-8">
          {roles.map((r) => (
            <div key={r.title} className="relative">
              <div className="absolute -left-[38px] top-2 size-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-secondary/40" />
              <GlassCard>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <div className="text-xl font-bold text-foreground">{r.title}</div>
                    <div className="text-sm text-muted-foreground">{r.company}</div>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-widest text-primary">{r.dates}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {r.bullets.map((b) => <li key={b} className="flex gap-2"><span className="text-accent">→</span>{b}</li>)}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {r.skills.map((s) => <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">{s}</span>)}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <GlassCard>
            <div className="text-xs font-mono uppercase tracking-widest text-accent">Transferable Expertise</div>
            <p className="mt-3 text-muted-foreground">
              Customer empathy, CRM discipline, documentation habits, and process
              improvement — the exact ingredients required to design automations
              that real teams will actually adopt and maintain.
            </p>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}
