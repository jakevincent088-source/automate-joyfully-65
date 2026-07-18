import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";
import { projects } from "../data/projects";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Case Study` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.summary },
        ]
      : [{ title: "Case study" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <div className="text-xs font-mono uppercase tracking-widest text-primary">Not found</div>
      <h1 className="mt-3 text-4xl font-black">Case study missing</h1>
      <Link to="/portfolio" className="mt-6 inline-block text-primary">← Back to portfolio</Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const p = Route.useLoaderData();
  return (
    <div>
      <PageHero
        eyebrow={p.industry}
        title={p.title}
        sub={p.summary}
      />
      <Section>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Business Challenge</div>
              <p className="mt-3 text-muted-foreground">{p.challenge}</p>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Business Goals</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {p.goals.map((g) => <li key={g} className="flex gap-2"><span className="text-accent">→</span>{g}</li>)}
              </ul>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Solution</div>
              <p className="mt-3 text-muted-foreground">{p.solution}</p>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Automation Steps</div>
              <ol className="mt-3 space-y-2 text-muted-foreground list-none">
                {p.automations.map((a, i) => (
                  <li key={a} className="flex gap-3">
                    <span className="font-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-secondary">Video Walkthrough</div>
              <div className="mt-3 aspect-video rounded-xl border border-dashed border-border bg-background/40 grid place-items-center text-muted">
                Walkthrough placeholder
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-accent">Lessons Learned</div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {p.lessons.map((l) => <li key={l} className="flex gap-2"><span className="text-accent">✓</span>{l}</li>)}
              </ul>
            </GlassCard>
          </div>

          <aside className="space-y-4">
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-primary">Tools Used</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => <span key={s} className="rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-mono text-foreground">{s}</span>)}
              </div>
            </GlassCard>
            <GlassCard>
              <div className="text-xs font-mono uppercase tracking-widest text-accent">Business Impact</div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {p.impact.map((i) => <li key={i} className="flex gap-2"><span className="text-accent">▲</span>{i}</li>)}
              </ul>
            </GlassCard>
            <Link to="/contact" className="block text-center rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold py-3">
              Build something similar →
            </Link>
            <Link to="/portfolio" className="block text-center text-sm text-muted-foreground hover:text-foreground">
              ← All projects
            </Link>
          </aside>
        </div>
      </Section>
    </div>
  );
}
