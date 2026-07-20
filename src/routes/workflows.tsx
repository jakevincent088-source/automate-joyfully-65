import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero, Section } from "../components/ui-primitives";
import { workflows, type Workflow } from "../data/workflows";

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
  const [preview, setPreview] = useState<Workflow | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [preview]);

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
            <div
              key={w.slug}
              className="group rounded-2xl border border-border bg-card/50 p-5 hover:border-accent/50 transition-colors flex flex-col"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent">
                <span className="size-1.5 rounded-full bg-accent" /> {w.category}
              </div>
              <div className="mt-2 text-lg font-bold text-foreground">{w.title}</div>
              {w.blueprintImage && (
                <button
                  type="button"
                  onClick={() => setPreview(w)}
                  className="mt-3 overflow-hidden rounded-lg border border-border bg-background/40 aspect-video block group/img"
                  aria-label={`Preview ${w.title} blueprint`}
                >
                  <img
                    src={w.blueprintImage}
                    alt={`${w.title} blueprint`}
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform"
                  />
                </button>
              )}
              <div className="mt-2 text-sm text-muted-foreground line-clamp-2">{w.overview}</div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {w.tools.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs font-semibold">
                {w.blueprintImage ? (
                  <button
                    type="button"
                    onClick={() => setPreview(w)}
                    className="text-accent hover:text-accent/80"
                  >
                    View blueprint →
                  </button>
                ) : (
                  <Link
                    to="/workflows/$slug"
                    params={{ slug: w.slug }}
                    className="text-accent hover:text-accent/80"
                  >
                    View blueprint →
                  </Link>
                )}
                <Link
                  to="/workflows/$slug"
                  params={{ slug: w.slug }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {preview && (
        <div
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} blueprint`}
        >
          <button
            type="button"
            onClick={() => setPreview(null)}
            className="absolute top-4 right-4 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-mono text-foreground hover:bg-card"
            aria-label="Close preview"
          >
            ESC ✕
          </button>
          <img
            src={preview.blueprintImage}
            alt={`${preview.title} blueprint`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-xl border border-border shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
