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
            const isDental = p.slug === "dental-practice-crm";
            const videoId = "pF4k9boYApA";
            return (
              <Link
                key={p.slug}
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 transition-colors"
              >
                {isDental ? (
                  <div className="h-44 relative overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={`${p.title} video thumbnail`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                    <a
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Watch demo on YouTube"
                      className="absolute inset-0 grid place-items-center"
                    >
                      <span className="grid place-items-center size-14 rounded-full bg-white/95 text-black shadow-xl group-hover:scale-110 transition-transform">
                        <svg viewBox="0 0 24 24" className="size-6 fill-current ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                      </span>
                    </a>
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white bg-black/50 backdrop-blur px-2 py-1 rounded">
                      {p.industry} · Watch demo
                    </div>
                  </div>
                ) : (
                  <div className={`h-44 relative bg-gradient-to-br ${p.color}`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/40 backdrop-blur px-2 py-1 rounded">
                      {p.industry}
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <div className="text-lg font-bold text-foreground">{p.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.summary}</div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary">View case study →</div>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
