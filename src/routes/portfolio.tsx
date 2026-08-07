import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "../components/ui-primitives";
import { projects } from "../data/projects";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — AI Automation & CRM Projects" },
      { name: "description", content: "GoHighLevel CRMs, AI workflow automations, funnels, and end-to-end business operating systems." },
      { property: "og:title", content: "Portfolio · Jake Talaba" },
      { property: "og:description", content: "Featured automation and CRM projects." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div>
      <PageHero
        eyebrow="Portfolio"
        title={<>Featured <span className="gradient-text">systems shipped</span>.</>}
        sub="Every project is designed to replicate real-world business scenarios using industry best practices."
      />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => {
            const videoId = p.videoId;
            return (
              <div
                key={p.slug}
                className="group rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 flex flex-col"
              >
                {videoId ? (
                  <a
                    href={`https://youtu.be/${videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Watch ${p.title} demo on YouTube`}
                    className="block h-44 relative overflow-hidden"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`${p.title} video thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="grid place-items-center size-14 rounded-full bg-white/95 text-black shadow-xl group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" className="size-6 fill-current ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                      </span>
                    </span>
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white bg-black/50 backdrop-blur px-2 py-1 rounded">
                      {p.industry} · Watch demo
                    </div>
                  </a>
                ) : (
                  <div className={`h-44 relative bg-gradient-to-br ${p.color}`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded">
                      {p.industry}
                    </div>
                  </div>
                )}
                <div className="p-5 flex-1 flex flex-col">
                  <div className="text-lg font-bold text-foreground">{p.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{p.summary}</div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{s}</span>
                    ))}
                  </div>
                  <Link
                    to="/portfolio/$slug"
                    params={{ slug: p.slug }}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-xs font-semibold px-4 py-2.5 hover:ring-2 hover:ring-primary/40 transition-all"
                  >
                    View Case Study →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
