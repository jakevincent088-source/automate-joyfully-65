import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Automation, CRM & Workflow Engineering" },
      { name: "description", content: "AI automation, GoHighLevel CRM implementation, workflow engineering, customer support systems, and API integrations." },
      { property: "og:title", content: "Services — Jake Vincent Talaba" },
      { property: "og:description", content: "End-to-end automation engineering for scaling businesses." },
    ],
  }),
  component: Services,
});

const services = [
  {
    tag: "AI",
    title: "AI Automation",
    price: "from $1.5k",
    items: ["AI assistants", "AI customer support", "AI lead qualification", "Email AI", "AI voice agents", "Knowledge bases", "Prompt engineering"],
  },
  {
    tag: "WKF",
    title: "Workflow Automation",
    price: "from $800",
    items: ["Business process automation", "Lead routing", "Task automation", "Approvals", "Notifications", "Internal operations"],
  },
  {
    tag: "GHL",
    title: "GoHighLevel",
    price: "from $2k",
    items: ["CRM setup", "Pipelines", "Calendars", "Automations", "Funnels", "Landing pages", "Memberships", "Snapshots", "Smart lists"],
  },
  {
    tag: "CRM",
    title: "CRM Solutions",
    price: "custom",
    items: ["CRM migration", "Lead management", "Sales pipelines", "Customer lifecycle", "Email & SMS", "Contact organization"],
  },
  {
    tag: "SUP",
    title: "Customer Support Systems",
    price: "from $1k",
    items: ["Ticket management", "Help desk setup", "Live chat", "Customer journey", "Knowledge bases", "Support automation", "SOPs"],
  },
  {
    tag: "API",
    title: "API & Integrations",
    price: "from $500",
    items: ["Zapier", "Google Workspace", "Slack", "Twilio", "Calendly", "Stripe", "Airtable", "Notion", "HubSpot"],
  },
];

function Services() {
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-primary uppercase">[ capabilities.list ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">
            Services & Solutions
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            End-to-end automation engineering. Pick a module or bundle them into a full-stack deployment.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card p-8 rounded-lg hover:border-primary/40 hover:-translate-y-1 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="size-10 bg-primary/10 border border-primary/20 rounded flex items-center justify-center font-mono text-[10px] font-bold text-primary">
                  {s.tag}
                </div>
                <span className="font-mono text-[10px] uppercase text-muted">{s.price}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 italic">{s.title}</h3>
              <ul className="space-y-2 text-sm text-muted font-mono">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-2">
                    <span className="text-primary shrink-0">+</span> {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-primary-foreground mb-6">Ready to spec your build?</h2>
          <Link to="/contact" className="inline-block px-8 py-4 bg-background text-primary font-bold rounded-sm">
            Book a Discovery Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
