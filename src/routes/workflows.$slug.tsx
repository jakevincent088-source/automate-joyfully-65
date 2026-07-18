import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";
import { workflows } from "../data/workflows";

export const Route = createFileRoute("/workflows/$slug")({
  loader: ({ params }) => {
    const w = workflows.find((x) => x.slug === params.slug);
    if (!w) throw notFound();
    return w;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Workflow Blueprint` },
          { name: "description", content: loaderData.overview },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.overview },
        ]
      : [{ title: "Workflow" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">Not found</div>
      <h1 className="mt-3 text-4xl font-black">Workflow missing</h1>
      <Link to="/workflows" className="mt-6 inline-block text-primary">← Workflow library</Link>
    </div>
  ),
  component: WorkflowDetail,
});

function WorkflowDetail() {
  const w = Route.useLoaderData() as (typeof workflows)[number];
  return (
    <div>
      <PageHero eyebrow={w.category} title={w.title} sub={w.overview} />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Business Problem</div>
              <p className="mt-3 text-muted-foreground">{w.problem}</p>
            </GlassCard>

            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Architecture Diagram</div>
              <svg viewBox="0 0 600 120" className="mt-4 w-full h-32">
                <defs>
                  <linearGradient id="wf" x1="0" x2="1"><stop offset="0" stopColor="#2563EB"/><stop offset=".5" stopColor="#7C3AED"/><stop offset="1" stopColor="#06B6D4"/></linearGradient>
                </defs>
                {[{x:60,l:"Trigger"},{x:210,l:"Conditions"},{x:360,l:"Actions"},{x:510,l:"Output"}].map((n,i,a)=>(
                  <g key={n.l}>
                    {i<a.length-1 && <line x1={n.x+28} y1="60" x2={a[i+1].x-28} y2="60" stroke="url(#wf)" strokeWidth="2" strokeDasharray="4 4" className="animate-flow-dash"/>}
                    <rect x={n.x-40} y="40" width="80" height="40" rx="10" fill="#111827" stroke="url(#wf)" strokeWidth="2"/>
                    <text x={n.x} y="65" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="ui-monospace">{n.l}</text>
                  </g>
                ))}
              </svg>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-4">
              <GlassCard>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Trigger</div>
                <p className="mt-3 text-muted-foreground">{w.trigger}</p>
              </GlassCard>
              <GlassCard>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Conditions</div>
                <ul className="mt-3 space-y-1 text-muted-foreground text-sm">{w.conditions.map(c=><li key={c}>• {c}</li>)}</ul>
              </GlassCard>
              <GlassCard>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Actions</div>
                <ul className="mt-3 space-y-1 text-muted-foreground text-sm">{w.actions.map(a=><li key={a}>→ {a}</li>)}</ul>
              </GlassCard>
              <GlassCard>
                <div className="text-xs font-mono uppercase tracking-widest text-accent">Outputs</div>
                <ul className="mt-3 space-y-1 text-muted-foreground text-sm">{w.outputs.map(o=><li key={o}>✓ {o}</li>)}</ul>
              </GlassCard>
            </div>

            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-secondary">Video Walkthrough</div>
              <div className="mt-3 aspect-video rounded-xl border border-dashed border-border bg-background/40 grid place-items-center text-muted">
                Walkthrough placeholder
              </div>
            </GlassCard>
          </div>

          <aside className="space-y-4">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Business Benefits</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">{w.benefits.map(b=><li key={b} className="flex gap-2"><span className="text-accent">▲</span>{b}</li>)}</ul>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Tools</div>
              <div className="mt-3 flex flex-wrap gap-1.5">{w.tools.map(t=><span key={t} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-mono text-foreground">{t}</span>)}</div>
            </GlassCard>
            <Link to="/contact" className="block text-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-3">
              Ship this in your business →
            </Link>
            <Link to="/workflows" className="block text-center text-sm text-muted-foreground hover:text-foreground">
              ← All workflows
            </Link>
          </aside>
        </div>
      </Section>
    </div>
  );
}
