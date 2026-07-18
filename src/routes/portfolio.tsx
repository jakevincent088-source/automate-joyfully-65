import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Automation Systems & CRM Deployments" },
      { name: "description", content: "Selected AI automation and GoHighLevel CRM builds — workflow diagrams, business problems, and outcomes." },
      { property: "og:title", content: "Portfolio — Jake Vincent Talaba" },
      { property: "og:description", content: "Selected automation deployments across healthcare, real estate, and marketing." },
    ],
  }),
  component: Portfolio,
});

const items = [
  { tag: "HEALTHCARE", title: "Dental Practice CRM & AI System", desc: "Full GoHighLevel CRM with appointment recovery automations.", stack: "GHL / Zapier / GPT" },
  { tag: "MULTI-INDUSTRY", title: "AI Workflow Automation Portfolio", desc: "Cross-app automations connecting CRM to third-party stacks.", stack: "Zapier / Claude" },
  { tag: "MARKETING", title: "CRM & Funnel Management", desc: "End-to-end acquisition funnels with lead routing.", stack: "GHL / Sheets" },
  { tag: "REAL ESTATE", title: "Missed Call Text-Back System", desc: "SMS-based re-engagement automation for cold leads.", stack: "Twilio / GHL" },
  { tag: "COACHING", title: "Client Onboarding Automation", desc: "Automated intake, contracts, and payment routing.", stack: "Zapier / Stripe" },
  { tag: "SAAS", title: "Support Ticket Routing", desc: "AI classifier assigning tickets by priority and expertise.", stack: "OpenAI / Slack" },
];

function Portfolio() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <span className="font-mono text-xs text-primary uppercase">[ deployments.log ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">Portfolio</h1>
          <p className="text-lg text-muted max-w-2xl">
            Selected builds — each with a workflow diagram, business problem, and measurable outcome.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="glass-card rounded-lg overflow-hidden group hover:border-primary/40 transition-all">
              <div className="aspect-[4/3] bg-surface grid-bg grid place-items-center border-b border-border relative">
                <div className="font-mono text-[10px] text-muted absolute top-3 left-3">
                  {String(i + 1).padStart(2, "0")}_{it.tag.replace(/[- ]/g, "_")}
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex gap-2 items-center">
                    {[..."ABCD"].map((c, idx) => (
                      <div key={c} className="flex items-center gap-2">
                        <div className={`size-6 rounded ${idx === 1 ? "bg-primary" : "bg-white/10 border border-white/10"}`} />
                        {idx < 3 && <div className="w-3 h-px bg-primary/40" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="font-mono text-[10px] uppercase text-primary tracking-widest">{it.tag}</span>
                <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{it.title}</h3>
                <p className="text-sm text-muted mb-4">{it.desc}</p>
                <div className="font-mono text-[10px] text-muted uppercase">{it.stack}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <Link to="/case-studies" className="inline-block px-6 py-3 border border-primary text-primary font-mono text-xs uppercase tracking-widest hover:bg-primary/10">
          [ view_full_case_studies ] →
        </Link>
      </section>
    </div>
  );
}
