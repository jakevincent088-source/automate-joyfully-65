import { createFileRoute, Link } from "@tanstack/react-router";
import { Counter } from "../components/counter";
import { HeroDashboard } from "../components/hero-dashboard";
import resumeAsset from "../assets/Jake_AI_Specialist_CV.pdf.asset.json";
import jakePhoto from "../assets/Jake_Formal_Photo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jake Talaba — AI Automation & CRM Systems That Scale Businesses" },
      {
        name: "description",
        content:
          "I design intelligent automation systems, GoHighLevel CRM builds, AI assistants, and workflow engineering that eliminate repetitive work and scale operations.",
      },
      { property: "og:title", content: "Jake Talaba — AI Automation Studio" },
      {
        property: "og:description",
        content:
          "AI automation, workflow engineering, GoHighLevel CRM, and customer support systems — built to scale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});


const services = [
  {
    tag: "01 / AI",
    title: "AI Automation",
    desc: "AI assistants, chatbots, lead qualification, and knowledge bases powered by GPT & Claude.",
    tags: ["Assistants", "Chatbots", "Prompt Engineering", "Voice AI"],
    gradient: "from-primary to-secondary",
  },
  {
    tag: "02 / OPS",
    title: "Workflow Automation",
    desc: "Business process automation, lead routing, approvals, and internal operational workflows.",
    tags: ["Zapier", "Make", "GHL Automation"],
    gradient: "from-secondary to-accent",
  },
  {
    tag: "03 / CRM",
    title: "GoHighLevel",
    desc: "Complete GHL builds — pipelines, funnels, calendars, memberships, snapshots.",
    tags: ["Pipelines", "Funnels", "Snapshots", "Memberships"],
    gradient: "from-accent to-primary",
  },
  {
    tag: "04 / CRM",
    title: "CRM Solutions",
    desc: "Lead management, sales pipelines, customer lifecycle, segmentation, and CRM migration.",
    tags: ["Salesforce", "HubSpot", "Zendesk", "GHL"],
    gradient: "from-primary to-accent",
  },
  {
    tag: "05 / CS",
    title: "Customer Support Systems",
    desc: "Ticketing, knowledge bases, AI support, live chat automation, and SOP documentation.",
    tags: ["Zendesk", "Live Chat", "Help Desk", "SOPs"],
    gradient: "from-secondary to-primary",
  },
  {
    tag: "06 / API",
    title: "API & Integrations",
    desc: "Connect Google Workspace, Slack, Twilio, Calendly, Stripe, Airtable, Notion, HubSpot.",
    tags: ["Twilio", "Stripe", "Slack", "Airtable"],
    gradient: "from-accent to-secondary",
  },
];

const process = [
  { n: "01", t: "Discovery Call", d: "Understand your business, goals, and bottlenecks." },
  { n: "02", t: "Business Analysis", d: "Map every workflow, tool, and data flow currently in play." },
  { n: "03", t: "Workflow Planning", d: "Design the target-state processes and automation architecture." },
  { n: "04", t: "Solution Architecture", d: "Select tools, integrations, data models, and safeguards." },
  { n: "05", t: "Development", d: "Build automations, CRM, funnels, AI agents, and integrations." },
  { n: "06", t: "Testing", d: "Simulate real-world scenarios and validate every branch." },
  { n: "07", t: "Deployment", d: "Roll out with training, monitoring, and safe rollbacks." },
  { n: "08", t: "Documentation", d: "Deliver SOPs, diagrams, and video walkthroughs." },
  { n: "09", t: "Optimization", d: "Continuous iteration based on real usage & metrics." },
];

const projects = [
  {
    slug: "dental-practice-crm",
    industry: "Dental",
    title: "Dental Practice CRM & AI Automation System",
    desc: "End-to-end GoHighLevel CRM for a simulated clinic — booking, segmentation, AI comms, and full email/SMS orchestration.",
    stack: ["GoHighLevel", "Zapier", "Twilio", "OpenAI"],
    color: "from-primary/40 to-secondary/40",
  },
  {
    slug: "ai-workflow-portfolio",
    industry: "Multi-industry",
    title: "AI Workflow Automation Portfolio",
    desc: "A collection of automations connecting CRMs with third-party apps — lead management, follow-ups, tasks, AI ops.",
    stack: ["Zapier", "OpenAI", "Slack", "Google"],
    color: "from-secondary/40 to-accent/40",
  },
  {
    slug: "crm-funnel-management",
    industry: "Marketing",
    title: "CRM & Funnel Management Project",
    desc: "Landing pages, forms, surveys, pipelines, Smart Lists, lead routing, and automated follow-up campaigns.",
    stack: ["GHL", "Stripe", "Calendly", "Twilio"],
    color: "from-accent/40 to-primary/40",
  },
];

const techItems: { name: string; slug: string | null }[] = [
  { name: "ChatGPT", slug: "openai" },
  { name: "Claude", slug: "anthropic" },
  { name: "Gemini", slug: "googlegemini" },
  { name: "GoHighLevel", slug: null },
  { name: "Zapier", slug: "zapier" },
  { name: "Make", slug: "make" },
  { name: "n8n", slug: "n8n" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Zendesk", slug: "zendesk" },
  { name: "Notion", slug: "notion" },
  { name: "Airtable", slug: "airtable" },
  { name: "Slack", slug: "slack" },
  { name: "Twilio", slug: "twilio" },
  { name: "Stripe", slug: "stripe" },
  { name: "Calendly", slug: "calendly" },
  { name: "Google", slug: "google" },
  { name: "Gmail", slug: "gmail" },
  { name: "WhatsApp", slug: "whatsapp" },
  { name: "Discord", slug: "discord" },
  { name: "ClickUp", slug: "clickup" },
  { name: "Pabbly", slug: null },
];

const highlights = [
  "AI Automation", "Workflow Engineering", "CRM Optimization",
  "Customer Support", "GoHighLevel", "Lead Management",
  "Sales Funnels", "AI Chatbots", "Email Automation",
  "SMS Automation", "Appointments", "Process Design",
];

const faqs = [
  { q: "What industries do you work with?", a: "Small businesses, agencies, dental & medical clinics, roofing, real estate, coaches, consultants, SaaS, ecommerce, and local service businesses." },
  { q: "Can you optimize an existing CRM?", a: "Yes — audits, restructuring pipelines, cleaning data, adding automations, and migrating between platforms are all in scope." },
  { q: "Do you build custom workflows?", a: "Every engagement includes bespoke workflow design tailored to your operations and tech stack." },
  { q: "Can you integrate multiple platforms?", a: "Yes. Zapier, Make, n8n, native APIs, and webhooks — I connect whatever the business runs on." },
  { q: "Do you build AI chatbots?", a: "Yes. Lead-qualification assistants, support agents, booking bots, and knowledge-base copilots." },
  { q: "How long does implementation take?", a: "Small automations ship in days. Full CRM + workflow builds typically take 2–6 weeks depending on scope." },
  { q: "Do you provide post-launch support?", a: "Yes — documentation, SOPs, monitoring dashboards, and continuous optimization retainers are available." },
];

function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden grid-bg">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/25 blur-[120px] animate-float" />
          <div className="absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[120px] animate-float" />
          <div className="absolute top-40 left-1/2 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1.5 text-xs font-mono text-muted-foreground">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available Nationwide
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.02]">
              I Build{" "}
              <span className="gradient-text">AI Automation</span>
              <br />
              Systems That{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Scale</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M2,8 Q100,-2 198,6" fill="none" stroke="url(#u)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="u" x1="0" x2="1">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              Businesses.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              I help businesses eliminate repetitive tasks by building
              AI-powered automation systems, optimizing CRM platforms, and
              engineering workflows that improve customer experience and
              operational efficiency.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-70" />
                <span className="relative">Book a Discovery Call</span>
                <span className="relative">→</span>
              </Link>
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/50 hover:ring-2 hover:ring-primary/40 hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 transition-opacity" />
                View Portfolio
              </Link>
              <a
                href={resumeAsset.url}
                download="Jake_AI_Specialist_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-6 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-accent/60 hover:ring-2 hover:ring-accent/40 hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-accent/20 via-secondary/20 to-primary/20 transition-opacity" />
                Download Resume ↓
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { v: 3, s: "+", l: "Yrs Customer Support" },
                { v: 15, s: "+", l: "Portfolio Projects" },
                { v: 30, s: "+", l: "Workflows Built" },
                { v: 98, s: "%", l: "CSAT & QA Score" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card/40 backdrop-blur p-4">
                  <div className="text-3xl font-black gradient-text">
                    <Counter end={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <HeroDashboard />
          </div>
        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
              <span className="size-1.5 rounded-full bg-primary" /> About
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
              Automation first. <span className="gradient-text">Business focused.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I&apos;m Jake — I design intelligent business automation systems
                that eliminate repetitive work, optimize customer journeys, and
                turn operational bottlenecks into scalable, measurable growth.
              </p>
              <p>
                My path started in customer service — 3+ years handling phone,
                chat, and email support with 95–100% CSAT & QA scores. That
                front-line experience is what makes my automation different: I
                know exactly where customers get stuck, where teams waste
                cycles, and where the ROI actually lives.
              </p>
              <p>
                Today I combine that operator empathy with GoHighLevel, Zapier,
                AI, and CRM engineering to help small businesses, agencies,
                clinics, and service brands operate like enterprise teams —
                without enterprise overhead.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                className="group relative inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:border-primary/50 hover:ring-2 hover:ring-primary/40 hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 transition-opacity" />
                View Experience →
              </Link>
              <div className="flex items-center gap-2">
                {[
                  { label: "WhatsApp", href: "https://wa.me/", slug: "whatsapp" },
                  { label: "LinkedIn", href: "https://linkedin.com/", slug: "linkedin" },
                  { label: "Phone", href: "tel:+1", slug: "phone" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.slug === "phone" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center size-11 rounded-full border border-border bg-card/60 backdrop-blur text-foreground hover:border-primary/50 hover:ring-2 hover:ring-primary/40 hover:-translate-y-0.5 transition-all"
                  >
                    {s.slug === "whatsapp" && (
                      <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.38-8.43zM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.8 1 1.02-3.7-.24-.38a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.88 9.9-9.88 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.45-4.44 9.94-9.84 9.94zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48s1.08 2.88 1.23 3.08c.15.2 2.12 3.24 5.15 4.55.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                    )}
                    {s.slug === "linkedin" && (
                      <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v14H.24V8zm7.5 0h4.33v1.92h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V22h-4.5v-6.65c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V22h-4.5V8z"/></svg>
                    )}
                    {s.slug === "phone" && (
                      <svg viewBox="0 0 24 24" className="size-5 fill-current"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.21 2.2z"/></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card/40">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-2xl opacity-60 -z-10" />
              <img
                src={jakePhoto.url}
                alt="Jake Vincent Talaba"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section eyebrow="Services" title={<>Six modules. <span className="gradient-text">One operating system.</span></>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card/50 backdrop-blur p-6 overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
              />
              <div className="relative">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted">{s.tag}</div>
                <div className="mt-2 text-xl font-bold text-foreground">{s.title}</div>
                <div className="mt-3 text-sm text-muted-foreground">{s.desc}</div>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all"
                >
                  Explore module →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED PROJECTS */}
      <Section eyebrow="Portfolio" title={<>Featured <span className="gradient-text">systems shipped</span>.</>}>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className={`h-40 relative bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur px-2 py-1 rounded">
                  {p.industry}
                </div>
              </div>
              <div className="p-5">
                <div className="text-lg font-bold text-foreground">{p.title}</div>
                <div className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.desc}</div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border bg-background/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs font-semibold text-primary group-hover:gap-2 flex items-center gap-1 transition-all">
                  View case study →
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground">
            View all projects →
          </Link>
        </div>
      </Section>

      {/* WORKFLOW SHOWCASE */}
      <Section eyebrow="Workflow Library" title={<>Interactive <span className="gradient-text">workflow blueprints</span>.</>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {["Lead Capture", "Missed Call Text Back", "Appointment Booking", "Lead Qualification", "Pipeline Automation", "Email Follow-Up", "Review Requests", "AI Chat Assistant"].map((w) => (
            <Link
              key={w}
              to="/workflows"
              className="group rounded-xl border border-border bg-card/50 p-4 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-muted">
                <span className="size-1.5 rounded-full bg-accent" /> Workflow
              </div>
              <div className="mt-2 text-sm font-semibold text-foreground">{w}</div>
              <div className="mt-3 h-8 flex items-center gap-1">
                {[0,1,2,3,4].map((i) => (
                  <div key={i} className="flex-1 h-2 rounded-full bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 group-hover:from-primary group-hover:via-secondary group-hover:to-accent transition-all" style={{ opacity: 0.4 + i * 0.15 }} />
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section eyebrow="Tech Stack" title={<>Tools I ship with, <span className="gradient-text">daily</span>.</>}>
        <div className="space-y-4">
          {[false, true].map((reverse) => (
            <div
              key={String(reverse)}
              className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
            >
              <div
                className="flex gap-4 w-max animate-marquee"
                style={reverse ? { animationDirection: "reverse" } : undefined}
              >
                {[...techItems, ...techItems].map((t, i) => (
                  <div
                    key={`${reverse}-${i}`}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/60 backdrop-blur px-5 py-3 min-w-max hover:border-primary/50 transition-colors"
                  >
                    {t.slug ? (
                      <img
                        src={`https://cdn.simpleicons.org/${t.slug}`}
                        alt=""
                        className="size-6"
                        loading="lazy"
                      />
                    ) : (
                      <span className="size-6 rounded-md bg-gradient-to-br from-primary via-secondary to-accent" />
                    )}
                    <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section eyebrow="Process" title={<>From discovery to <span className="gradient-text">continuous optimization</span>.</>}>
        <div className="relative">
          <div className="pointer-events-none absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3">
            {process.map((p) => (
              <div key={p.n} className="rounded-xl border border-border bg-card/40 p-3">
                <div className="relative">
                  <div className="size-12 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-black text-sm shadow-lg shadow-secondary/30">
                    {p.n}
                  </div>
                </div>
                <div className="mt-3 text-center text-xs font-semibold text-foreground">{p.t}</div>
                <div className="mt-1 text-center text-[11px] text-muted-foreground leading-snug">{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>


      {/* TESTIMONIALS PLACEHOLDER */}
      <Section eyebrow="Testimonials" title={<>What clients <span className="gradient-text">will say</span>.</>}>
        <div className="grid md:grid-cols-3 gap-4">
          {[1,2,3].map((i) => (
            <div key={i} className="rounded-2xl border border-dashed border-border bg-card/30 p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-muted">Placeholder</div>
              <div className="mt-3 text-muted-foreground italic">
                &ldquo;Client testimonial coming soon. Reserved for launch partners currently in build.&rdquo;
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-9 rounded-full bg-gradient-to-br from-primary to-secondary" />
                <div>
                  <div className="text-sm font-semibold text-foreground">Future Partner</div>
                  <div className="text-[11px] text-muted">Founder · Industry</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section eyebrow="Certifications" title={<>Actively learning. <span className="gradient-text">Always shipping.</span></>}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-accent">Current Focus</div>
            <ul className="mt-4 space-y-2 text-sm text-foreground">
              {["GoHighLevel Mastery", "AI Automation Systems", "Workflow Engineering", "CRM Optimization", "Zapier Advanced"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-accent" /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card/50 p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-secondary">On the Roadmap</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {["Official GoHighLevel Certification", "HubSpot CRM Certification", "Salesforce Trailhead", "Make Certification", "OpenAI Courses", "Google AI Certifications"].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-secondary" /> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="FAQ" title={<>Common <span className="gradient-text">questions</span>.</>}>
        <div className="grid md:grid-cols-2 gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card/40 p-5 open:border-primary/50 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-semibold text-foreground">{f.q}</span>
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="mt-3 text-sm text-muted-foreground">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="relative rounded-3xl overflow-hidden border border-border bg-card/60 backdrop-blur-xl p-12 md:p-16 text-center">
            <div className="absolute inset-0 -z-10 opacity-70">
              <div className="absolute top-0 left-1/4 h-60 w-60 rounded-full bg-primary/30 blur-3xl" />
              <div className="absolute top-0 right-1/4 h-60 w-60 rounded-full bg-secondary/30 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted mb-4">
              // Ready when you are
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
              Ready to <span className="gradient-text">automate</span> your business?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s build smarter systems together. Start with a free 30-minute
              discovery call — walk away with a workflow map, tool stack, and next-step plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold text-white overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-70" />
                <span className="relative">Book Discovery Call</span>
                <span className="relative">→</span>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-semibold text-foreground hover:border-primary/50 transition-colors"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-primary" /> {eyebrow}
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight max-w-3xl">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}
