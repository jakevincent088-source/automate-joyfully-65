import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jake Vincent Talaba" },
      { name: "description", content: "Career timeline and background of Jake Vincent Talaba, AI Automation Specialist." },
      { property: "og:title", content: "About Jake Vincent Talaba" },
      { property: "og:description", content: "From Customer Service Representative to AI Automation Specialist." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2021", title: "Customer Service Representative", desc: "Learned the mechanics of customer journeys, ticket flows, and the pain points automation later solves." },
  { year: "2022", title: "Administrative Support", desc: "Deepened understanding of internal operations, SOPs, and process bottlenecks." },
  { year: "2023", title: "Workflow & CRM Specialist", desc: "Started building automations connecting CRM systems with third-party apps." },
  { year: "2024", title: "GoHighLevel Implementer", desc: "Full CRM deployments, pipelines, funnels, and automated customer journeys." },
  { year: "2025", title: "AI Automation Specialist", desc: "AI assistants, voice agents, and end-to-end automation systems for scaling businesses." },
];

function About() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-primary uppercase">[ operator.bio ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">
            Automation with a <span className="text-primary italic">customer-first</span> mind.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl">
            My customer service background is my unfair advantage. I don't just wire up systems — I design them from the perspective of the person on the other end of the conversation.
          </p>
        </div>
      </section>

      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="font-mono text-xs text-primary uppercase mb-8">[ career.timeline ]</div>
          <div className="space-y-6">
            {timeline.map((t) => (
              <div key={t.year} className="grid grid-cols-[80px_1fr] gap-6 group">
                <div className="font-mono text-primary text-sm pt-1">{t.year}</div>
                <div className="glass-card p-6 rounded-lg border-l-2 border-l-primary/30 group-hover:border-l-primary transition-colors">
                  <h3 className="font-bold text-lg mb-2">{t.title}</h3>
                  <p className="text-sm text-muted">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm">
          Work with Jake →
        </Link>
      </section>
    </div>
  );
}
