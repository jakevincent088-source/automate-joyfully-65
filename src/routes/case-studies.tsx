import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Automation Deployments" },
      { name: "description", content: "In-depth case studies with architecture, business impact, and measurable outcomes." },
      { property: "og:title", content: "Case Studies — Jake Vincent Talaba" },
      { property: "og:description", content: "Automation architecture and outcomes from real deployments." },
    ],
  }),
  component: CaseStudies,
});

const cases = [
  {
    id: "01",
    industry: "Dental Healthcare",
    title: "Dental Practice CRM & AI Automation System",
    problem: "Manual appointment management, inconsistent follow-up, and heavy admin overhead were bottlenecking growth.",
    architecture: [
      "GoHighLevel as system-of-record",
      "Zapier connecting intake forms → CRM",
      "AI-drafted SMS via OpenAI + Claude",
      "Automated missed-appointment recovery",
      "Google Workspace for internal notifications",
    ],
    outcomes: [
      { k: "Admin time saved", v: "40%" },
      { k: "Missed appt recovery", v: "28%" },
      { k: "Lead → booking conv.", v: "3.2x" },
    ],
  },
  {
    id: "02",
    industry: "Multi-Industry",
    title: "AI Workflow Automation Portfolio",
    problem: "Businesses hemorrhaging hours on repetitive manual tasks across sales, support, and ops.",
    architecture: [
      "Zapier orchestration layer",
      "GoHighLevel CRM triggers",
      "GPT / Claude for content + qualification",
      "SOP documentation for every workflow",
    ],
    outcomes: [
      { k: "Workflows shipped", v: "30+" },
      { k: "Cross-app integrations", v: "60+" },
      { k: "Documented SOPs", v: "100%" },
    ],
  },
  {
    id: "03",
    industry: "Marketing Agency",
    title: "CRM & Funnel Management",
    problem: "Disconnected acquisition tools and inconsistent lead tracking were tanking pipeline visibility.",
    architecture: [
      "GHL landing pages + forms",
      "Automated opportunity routing",
      "Multi-step nurture sequences",
      "Google Sheets reporting layer",
    ],
    outcomes: [
      { k: "Lead visibility", v: "100%" },
      { k: "Manual entry", v: "-90%" },
      { k: "Follow-up latency", v: "<5m" },
    ],
  },
];

function CaseStudies() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-primary uppercase">[ post_mortems ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">Case Studies</h1>
          <p className="text-lg text-muted max-w-2xl">
            The architecture behind the deployments — business problem, system design, and measurable outcome.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 space-y-8">
          {cases.map((c) => (
            <article key={c.id} className="glass-card p-8 sm:p-12 rounded-lg">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
                <div>
                  <span className="font-mono text-[10px] uppercase text-primary tracking-widest">
                    {c.id} / {c.industry}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 tracking-tight">{c.title}</h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="font-mono text-[10px] uppercase text-muted mb-3">// problem</div>
                  <p className="text-muted leading-relaxed">{c.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase text-muted mb-3">// architecture</div>
                  <ul className="space-y-2">
                    {c.architecture.map((a) => (
                      <li key={a} className="text-sm text-muted flex items-start gap-2">
                        <span className="text-primary">+</span> {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {c.outcomes.map((o) => (
                  <div key={o.k}>
                    <div className="text-2xl sm:text-3xl font-mono font-bold text-primary">{o.v}</div>
                    <div className="text-[10px] uppercase font-mono text-muted mt-1">{o.k}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-primary-foreground mb-6">
            Want your case study here next?
          </h2>
          <Link to="/contact" className="inline-block px-8 py-4 bg-background text-primary font-bold rounded-sm">
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
