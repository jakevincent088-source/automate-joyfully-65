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
        sub="Hover any card — the answer reveals itself."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((f) => (
            <div
              key={f.q}
              tabIndex={0}
              className="group relative rounded-2xl border border-border bg-card/40 p-5 overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/60 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary/20 focus:border-primary/60 focus:outline-none"
            >
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 transition-opacity duration-500" />
              <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" />
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">{f.q}</span>
                <span className="text-primary transition-transform duration-300 group-hover:rotate-45 group-focus:rotate-45">+</span>
              </div>
              <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                <div className="overflow-hidden">
                  <div className="pt-3 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500 delay-100">
                    {f.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
