import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Automation, CRM & AI Workflow Notes" },
      { name: "description", content: "Practical writing on AI automation, GoHighLevel, CRM optimization, and workflow design." },
      { property: "og:title", content: "Blog — Jake Vincent Talaba" },
      { property: "og:description", content: "Field notes from building automation systems." },
    ],
  }),
  component: Blog,
});

const posts = [
  { date: "2026-06", title: "Why your CRM is really a data-quality problem", cat: "CRM", read: "6 min" },
  { date: "2026-05", title: "Building an AI voice receptionist that doesn't sound like a robot", cat: "AI", read: "9 min" },
  { date: "2026-04", title: "GoHighLevel snapshots: the leverage most agencies ignore", cat: "GHL", read: "7 min" },
  { date: "2026-03", title: "Missed call text-back: the automation that pays for itself in a week", cat: "WORKFLOW", read: "4 min" },
  { date: "2026-02", title: "Documenting workflows so your team can actually own them", cat: "OPS", read: "5 min" },
];

function Blog() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-primary uppercase">[ field_notes ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">Blog</h1>
          <p className="text-lg text-muted max-w-2xl">
            Practical writing on AI, CRM systems, and workflow engineering.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 divide-y divide-border">
          {posts.map((p) => (
            <a
              key={p.title}
              href="#"
              className="grid grid-cols-[80px_1fr_auto] gap-6 py-6 items-center group hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors"
            >
              <span className="font-mono text-xs text-primary">{p.date}</span>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-muted">{p.cat}</span>
                <h3 className="font-bold mt-1 group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
              <span className="font-mono text-xs text-muted">{p.read}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
