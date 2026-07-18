import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "../components/ui-primitives";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Common Automation Questions" },
      { name: "description", content: "Common questions about AI automation, CRM optimization, and workflow builds." },
      { property: "og:title", content: "FAQ" },
      { property: "og:description", content: "Common questions answered." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What industries do you work with?", a: "Small businesses, agencies, dental & medical clinics, roofing, real estate, coaches, consultants, SaaS, ecommerce, and local service businesses." },
  { q: "Can you optimize an existing CRM?", a: "Yes — audits, restructuring pipelines, cleaning data, adding automations, and migrating between platforms are all in scope." },
  { q: "Do you build custom workflows?", a: "Every engagement includes bespoke workflow design tailored to your operations and tech stack." },
  { q: "Can you integrate multiple platforms?", a: "Yes. Zapier, Make, n8n, native APIs, and webhooks — whatever your business runs on." },
  { q: "Do you build AI chatbots?", a: "Yes. Lead qualification assistants, support agents, booking bots, and knowledge base copilots." },
  { q: "How long does implementation take?", a: "Small automations ship in days. Full CRM + workflow builds typically take 2–6 weeks depending on scope." },
  { q: "Do you provide post-launch support?", a: "Yes. Documentation, SOPs, monitoring dashboards, and continuous optimization retainers are available." },
  { q: "What tools do you specialize in?", a: "GoHighLevel, Zapier, Make, OpenAI, Twilio, Stripe, Airtable, Notion, Slack, Google Workspace, and the major CRMs." },
];

function FAQ() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title={<>Common <span className="gradient-text">questions</span>.</>}
        sub="Everything you need to know before booking a discovery call."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-border bg-card/40 p-5 open:border-primary/50 transition-colors">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-foreground">{f.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>
    </div>
  );
}
