import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "../components/ui-primitives";
import { workflows } from "../data/workflows";

export const Route = createFileRoute("/workflows")({
  head: () => ({
    meta: [
      { title: "Workflow Library — Automations for Business Ops" },
      { name: "description", content: "Reusable automation blueprints: lead capture, missed call text back, appointment booking, AI chat, and more." },
      { property: "og:title", content: "Workflow Library" },
      { property: "og:description", content: "Automation blueprints with architecture diagrams and business benefits." },
    ],
  }),
  component: Workflows,
});

function Workflows() {
  return (
    <div>
      <PageHero
        eyebrow="Workflow Library"
        title={<>Blueprints for <span className="gradient-text">automated operations</span>.</>}
        sub="Each workflow is a reusable pattern with architecture, triggers, actions, and measurable business benefits."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflows.map((w) => (
            <Link
              key={w.slug}
              to="/workflows/$slug"
              params={{ slug: w.slug }}
              className="group rounded-2xl border border-border bg-card/50 p-5 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent">
                <span className="size-1.5 rounded-full bg-accent" /> {w.category}
              </div>
              <div className="mt-2 text-lg font-bold text-foreground">{w.title}</div>
              <div className="mt-2 text-sm text-muted-foreground line-clamp-2">{w.overview}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {w.tools.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-4 text-xs font-semibold text-accent">View blueprint →</div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
