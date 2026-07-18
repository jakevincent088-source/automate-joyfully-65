import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Automation Templates & SOPs" },
      { name: "description", content: "Free downloads: CRM setup checklist, workflow templates, AI prompt library, and GoHighLevel SOPs." },
      { property: "og:title", content: "Resources — Jake Vincent Talaba" },
      { property: "og:description", content: "Automation planning worksheets and templates for operators." },
    ],
  }),
  component: Resources,
});

const resources = [
  { tag: "PDF", title: "CRM Setup Checklist", desc: "The 47-point checklist I use for every new GoHighLevel deployment.", size: "1.2 MB" },
  { tag: "DOC", title: "Workflow Documentation Template", desc: "Structured template for documenting any automation workflow.", size: "340 KB" },
  { tag: "TXT", title: "AI Prompt Library", desc: "Battle-tested prompts for lead qualification, support, and sales.", size: "88 KB" },
  { tag: "PDF", title: "GoHighLevel SOPs", desc: "Standard operating procedures for pipelines, funnels, and calendars.", size: "2.1 MB" },
  { tag: "XLS", title: "Automation Planning Worksheet", desc: "Map out triggers, actions, and conditions before you build.", size: "420 KB" },
  { tag: "PDF", title: "Missed Call Text-Back Playbook", desc: "Full automation blueprint including copy and timing.", size: "780 KB" },
];

function Resources() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-primary uppercase">[ downloads.dir ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">Resources</h1>
          <p className="text-lg text-muted max-w-2xl">
            Free tools I actually use in client engagements. No email required.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4">
          {resources.map((r) => (
            <div key={r.title} className="glass-card p-6 rounded-lg flex items-start gap-4 hover:border-primary/40 group transition-all">
              <div className="size-12 shrink-0 rounded bg-primary/10 border border-primary/20 grid place-items-center font-mono text-[10px] font-bold text-primary">
                {r.tag}
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1 group-hover:text-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted mb-3">{r.desc}</p>
                <div className="flex items-center gap-4 text-[11px] font-mono text-muted">
                  <span>{r.size}</span>
                  <a href="#" className="text-primary hover:underline">[ download → ]</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
