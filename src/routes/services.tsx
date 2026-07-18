import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Automation, GoHighLevel, CRM, Workflows" },
      { name: "description", content: "AI automation, workflow engineering, GoHighLevel builds, CRM solutions, customer support systems, and API integrations." },
      { property: "og:title", content: "Services · Jake Talaba" },
      { property: "og:description", content: "Six automation modules that scale operations." },
    ],
  }),
  component: Services,
});

const modules = [
  {
    tag: "01 / AI Automation",
    title: "AI Assistants & Chatbots",
    items: ["AI Assistants", "AI Chatbots", "Lead Qualification", "AI Email Responses", "Knowledge Bases", "Prompt Engineering", "Voice AI (future-ready)"],
    grad: "from-primary to-secondary",
  },
  {
    tag: "02 / Workflow Automation",
    title: "Business Process Engineering",
    items: ["Business Process Automation", "Lead Routing", "Internal Workflows", "Approval Systems", "Task Automation", "Notifications", "Operational Automation"],
    grad: "from-secondary to-accent",
  },
  {
    tag: "03 / GoHighLevel",
    title: "Full GHL Implementation",
    items: ["CRM Setup", "Pipeline Configuration", "Smart Lists", "Opportunities", "Forms & Surveys", "Landing Pages & Funnels", "Websites", "Calendars", "Memberships", "Automations", "Snapshots"],
    grad: "from-accent to-primary",
  },
  {
    tag: "04 / CRM Solutions",
    title: "CRM Strategy & Optimization",
    items: ["Lead Management", "Sales Pipelines", "Customer Lifecycle", "CRM Organization", "Contact Segmentation", "Lead Nurturing", "Opportunity Management", "CRM Migration"],
    grad: "from-primary to-accent",
  },
  {
    tag: "05 / Customer Support",
    title: "Support Systems That Scale",
    items: ["Ticketing Systems", "Knowledge Bases", "Customer Communication", "AI Customer Support", "Live Chat Automation", "Help Desk Workflows", "SOP Documentation"],
    grad: "from-secondary to-primary",
  },
  {
    tag: "06 / Integrations",
    title: "API & Platform Integrations",
    items: ["Zapier", "Google Workspace", "Slack", "Twilio", "Calendly", "Stripe", "Airtable", "Notion", "Meta", "HubSpot"],
    grad: "from-accent to-secondary",
  },
];

function Services() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title={<>Six modules. <span className="gradient-text">One operating system.</span></>}
        sub="Each module can ship stand-alone or plug into an end-to-end business operating system tailored to your industry."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((m) => (
            <GlassCard key={m.tag}>
              <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${m.grad} px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-white`}>
                {m.tag}
              </div>
              <div className="mt-4 text-2xl font-bold text-foreground">{m.title}</div>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                {m.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-accent" /> {i}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex text-xs font-semibold text-primary">Request scope →</Link>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
