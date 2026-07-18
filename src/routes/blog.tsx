import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, GlassCard } from "../components/ui-primitives";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — AI Automation, CRM & Workflow Insights" },
      { name: "description", content: "Practical guides on AI automation, GoHighLevel, CRM best practices, workflow design, and customer support automation." },
      { property: "og:title", content: "Blog · Jake Talaba" },
      { property: "og:description", content: "Automation and CRM insights for operators." },
    ],
  }),
  component: Blog,
});

const posts = [
  { t: "5 Automations Every Small Business Should Ship First", cat: "Automation", read: "6 min" },
  { t: "GoHighLevel: A Non-Marketer's Setup Guide", cat: "GoHighLevel", read: "12 min" },
  { t: "How to Structure a CRM That Actually Gets Used", cat: "CRM", read: "8 min" },
  { t: "Designing Workflows That Don't Break in Production", cat: "Workflow Design", read: "9 min" },
  { t: "AI Chatbots for Customer Support — What Works", cat: "Support AI", read: "7 min" },
  { t: "Zapier Patterns for Reliable Business Automation", cat: "Zapier", read: "10 min" },
  { t: "Prompt Engineering for Business Ops", cat: "Prompt Engineering", read: "8 min" },
  { t: "Business Process Optimization in the AI Era", cat: "Ops", read: "9 min" },
];

function Blog() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title={<>Field notes on <span className="gradient-text">automation & CRM</span>.</>}
        sub="Practical, operator-first writing. New posts drop as I ship real systems."
      />
      <Section>
        <div className="grid md:grid-cols-2 gap-4">
          {posts.map((p) => (
            <GlassCard key={p.t} className="hover:border-primary/50 transition-colors cursor-pointer">
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest">
                <span className="text-primary">{p.cat}</span>
                <span className="text-muted">{p.read} · Coming soon</span>
              </div>
              <div className="mt-3 text-lg font-bold text-foreground">{p.t}</div>
              <div className="mt-3 text-xs text-muted-foreground">Article in draft — subscribe for release.</div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </div>
  );
}
