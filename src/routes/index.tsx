import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Counter } from "@/components/counter";

export const Route = createFileRoute("/")({
  component: Home,
});

const industries = [
  "Marketing Agencies",
  "Dental Clinics",
  "Medical Practices",
  "Real Estate",
  "Roofing Companies",
  "Law Firms",
  "Coaches & Consultants",
  "SaaS Businesses",
  "Home Services",
  "Ecommerce Stores",
];

const services = [
  {
    tag: "AI",
    title: "AI Automation",
    items: [
      "AI assistants & chatbots",
      "AI customer support",
      "AI lead qualification",
      "Email AI",
      "AI voice agents",
      "Knowledge bases",
      "Prompt engineering",
    ],
  },
  {
    tag: "WKF",
    title: "Workflow Automation",
    featured: true,
    items: [
      "Business process automation",
      "Lead routing",
      "Task automation",
      "Approvals",
      "Notifications",
      "Internal operations",
    ],
  },
  {
    tag: "GHL",
    title: "GoHighLevel",
    items: [
      "CRM setup",
      "Pipelines & calendars",
      "Automations",
      "Funnels & landing pages",
      "Memberships",
      "Snapshots",
      "Smart lists",
    ],
  },
  {
    tag: "CRM",
    title: "CRM Solutions",
    items: [
      "CRM migration",
      "Lead management",
      "Sales pipelines",
      "Customer lifecycle",
      "Email & SMS marketing",
      "Contact organization",
    ],
  },
  {
    tag: "SUP",
    title: "Customer Support Systems",
    items: [
      "Ticket management",
      "Help desk setup",
      "Live chat",
      "Customer journey",
      "Knowledge bases",
      "Support automation",
      "SOP documentation",
    ],
  },
  {
    tag: "API",
    title: "API & Integrations",
    items: [
      "Zapier",
      "Google Workspace",
      "Slack",
      "Twilio",
      "Calendly / Stripe",
      "Airtable / Notion",
      "Meta / HubSpot",
    ],
  },
];

const processSteps = [
  { n: "01", title: "Discovery", desc: "Understanding business goals and identifying operational bottlenecks." },
  { n: "02", title: "Business Audit", desc: "Reviewing your CRM, workflows, and repetitive tasks." },
  { n: "03", title: "Process Mapping", desc: "Designing an optimized workflow before implementation." },
  { n: "04", title: "Solution Design", desc: "Selecting the best AI tools, CRM platform, and integrations." },
  { n: "05", title: "Development", desc: "Building workflows, automations, CRM systems, and AI assistants." },
  { n: "06", title: "Testing", desc: "Validating every automation, trigger, and customer journey." },
  { n: "07", title: "Deployment", desc: "Launching your automation into production." },
  { n: "08", title: "Documentation", desc: "Creating SOPs and workflow documentation." },
  { n: "09", title: "Optimization", desc: "Monitoring and improving system performance over time." },
];

const projects = [
  {
    tag: "HEALTHCARE",
    title: "Dental Practice CRM & AI System",
    challenge: "Manual appointment management, inconsistent lead follow-up, admin overload.",
    solution: "End-to-end GoHighLevel CRM with sales pipelines, appointment booking, AI communication, missed-appointment recovery.",
    stack: ["GoHighLevel", "Zapier", "ChatGPT", "Claude"],
    outcome: "Reduced repetitive admin work and created a full customer journey from lead capture to booking.",
  },
  {
    tag: "MULTI-INDUSTRY",
    title: "AI Workflow Automation Portfolio",
    challenge: "Businesses wasting time on repetitive manual tasks across departments.",
    solution: "Workflow automations connecting CRM systems with third-party apps: routing, notifications, follow-ups, AI integration.",
    stack: ["Zapier", "GoHighLevel", "ChatGPT", "Claude"],
    outcome: "Improved operational efficiency and standardized business processes.",
  },
  {
    tag: "MARKETING",
    title: "CRM & Funnel Management",
    challenge: "Disconnected customer acquisition and inconsistent lead tracking.",
    solution: "Complete acquisition funnels: landing pages, forms, pipelines, automated follow-ups, lead routing.",
    stack: ["GoHighLevel", "Zapier", "Google Sheets"],
    outcome: "Improved CRM organization, lead tracking, and lifecycle management.",
  },
];

const workflows = [
  {
    name: "LEAD_TO_BOOKING",
    steps: ["Lead Form", "CRM Contact", "Pipeline", "AI Qualifier", "Booking", "SMS Reminder", "Sales Notify"],
  },
  {
    name: "SUPPORT_ROUTING",
    steps: ["Ticket In", "AI Classifier", "Priority Sort", "Agent Assign", "SLA Timer", "Resolution", "CSAT Survey"],
  },
  {
    name: "MISSED_CALL_TEXTBACK",
    steps: ["Missed Call", "Contact Lookup", "AI Response", "SMS Send", "CRM Log", "Follow-up Task"],
  },
  {
    name: "REVIEW_REQUEST",
    steps: ["Job Complete", "Wait 24h", "AI Draft", "SMS Request", "Review Posted", "Reward Trigger"],
  },
];

const techStack = {
  AI: ["OpenAI", "Claude", "Gemini", "GHL AI"],
  Automation: ["Zapier", "Make", "n8n", "Pabbly"],
  CRM: ["GoHighLevel", "Salesforce", "Zendesk", "HubSpot"],
  Productivity: ["Google Workspace", "ClickUp", "Notion", "Airtable"],
  Communication: ["Twilio", "Slack", "WhatsApp", "Stripe"],
};

const faqs = [
  {
    q: "Do you work with businesses outside the Philippines?",
    a: "Yes. I work remotely with clients globally across time zones, primarily servicing US, Canada, UK, and Australian businesses.",
  },
  {
    q: "Can you optimize an existing CRM?",
    a: "Absolutely. I audit your current setup, identify gaps, and rebuild pipelines, automations, and integrations without disrupting operations.",
  },
  {
    q: "Can you automate customer support?",
    a: "Yes — from AI-powered ticket routing and knowledge base chatbots to full support workflow automation with escalation logic.",
  },
  {
    q: "Can you build AI chatbots?",
    a: "Yes. Web chat, SMS agents, voice agents, and internal knowledge assistants trained on your business documentation.",
  },
  {
    q: "Do you document every workflow?",
    a: "Every project ships with SOPs, workflow diagrams, and video walkthroughs so your team can operate and extend the system.",
  },
  {
    q: "Do you provide ongoing maintenance?",
    a: "Yes. Retainer packages available for monitoring, tweaks, expansions, and continuous optimization after launch.",
  },
];

function Home() {
  const [activeWorkflow, setActiveWorkflow] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden grid-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10 animate-[count-up_0.6s_ease-out_both]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-mono mb-6 uppercase tracking-wider">
              <span className="size-1.5 bg-primary rounded-full animate-pulse" />
              System Status: Available for Projects
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-balance mb-8 leading-[1.05]">
              I Build AI <span className="text-primary">Automation Systems</span> That Scale Businesses.
            </h1>
            <p className="text-muted text-base sm:text-lg max-w-[52ch] mb-6 leading-relaxed">
              I help businesses eliminate repetitive tasks through AI-powered automation, CRM optimization, and workflows that improve customer experiences and operational efficiency.
            </p>
            <p className="text-muted/80 text-sm max-w-[52ch] mb-10">
              From AI assistants and workflow automation to GoHighLevel CRM implementation and customer support systems — scalable solutions that save time and increase productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all text-sm">
                Book a Discovery Call
              </Link>
              <Link to="/portfolio" className="px-6 py-3 border border-border bg-white/5 font-bold rounded-sm hover:bg-white/10 transition-all text-sm">
                View Portfolio
              </Link>
              <a href="#" className="px-6 py-3 text-muted hover:text-foreground font-mono text-xs uppercase tracking-widest flex items-center">
                → Resume.pdf
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-14 pt-8 border-t border-border">
              <Stat value={<Counter end={3} suffix="+" />} label="Years CS" />
              <Stat value={<Counter end={15} suffix="+" />} label="Projects" accent />
              <Stat value={<Counter end={30} suffix="+" />} label="Workflows" />
              <Stat value={<Counter end={8} suffix="+" />} label="CRM Tools" accent />
              <Stat value={<Counter end={100} suffix="%" />} label="QA Score" />
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative animate-[count-up_0.8s_ease-out_both] [animation-delay:400ms]">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative glass-card p-4 rounded-xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="size-2 rounded-full bg-red-500/50" />
                    <div className="size-2 rounded-full bg-yellow-500/50" />
                    <div className="size-2 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-muted ml-2">CORE_SYSTEM.LOG</span>
                </div>
                <span className="text-[10px] font-mono text-primary flex items-center gap-1">
                  <span className="size-1.5 bg-primary rounded-full animate-pulse" /> LIVE
                </span>
              </div>

              <div className="space-y-3">
                {/* Revenue chart */}
                <div className="glass-card rounded-lg p-3">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] font-mono text-muted uppercase">Revenue Pipeline</span>
                    <span className="text-[10px] font-mono text-primary">+42.8%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 45, 78, 55, 88, 72, 95, 82, 100, 78, 92].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-primary/60 to-primary/20"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* CRM Pipeline */}
                <div className="glass-card rounded-lg p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-muted uppercase">CRM Pipeline</span>
                    <span className="text-[10px] font-mono text-muted">42 leads</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {["New", "Qual", "Prop", "Won"].map((s, i) => (
                      <div key={s} className="text-center">
                        <div className={`h-1 rounded-full mb-1 ${i === 2 ? "bg-primary" : "bg-white/10"}`} />
                        <div className="text-[8px] font-mono text-muted uppercase">{s}</div>
                        <div className="text-[10px] font-bold">{[18, 12, 8, 4][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chatbot */}
                <div className="glass-card rounded-lg p-3 font-mono text-[9px] space-y-1.5">
                  <div className="flex items-center gap-1 text-primary">
                    <span className="size-1 bg-primary rounded-full animate-pulse" />
                    AGENT: Qualifying lead...
                  </div>
                  <div className="text-muted pl-3">USER: I need CRM automation.</div>
                  <div className="text-foreground pl-3">AGENT: Booking meeting @ 2PM tomorrow ✓</div>
                </div>

                {/* Nodes */}
                <div className="flex items-center gap-2">
                  <NodeBox label="FORM" active />
                  <Connector />
                  <NodeBox label="CRM" />
                  <Connector />
                  <NodeBox label="AI" active />
                  <Connector />
                  <NodeBox label="CAL" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="font-mono text-xs text-primary uppercase">[ 02. Verticals ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
              Industries I've Designed Automation For
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {industries.map((ind) => (
              <div
                key={ind}
                className="glass-card px-4 py-5 rounded-lg text-sm font-medium hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="size-6 bg-primary/10 border border-primary/20 rounded mb-3 grid place-items-center">
                  <div className="size-1.5 bg-primary rounded-full" />
                </div>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="font-mono text-xs text-primary uppercase">[ 03. Operator ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 mb-6 tracking-tight">
              Automation First. <br />
              <span className="italic text-primary">Business Focused.</span>
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              I'm <span className="text-foreground font-semibold">Jake Vincent Talaba</span>, an AI Automation Specialist passionate about helping businesses streamline operations through intelligent automation, CRM optimization, and AI-powered workflows.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              With 3+ years in customer service and admin support, I combine real-world business operations knowledge with modern automation technologies to build systems that reduce manual work and help businesses scale.
            </p>
            <div className="glass-card p-6 rounded-lg border-l-4 border-l-primary">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Mission</div>
              <p className="text-foreground font-medium italic">
                Help businesses automate repetitive processes so teams can focus on growth instead of manual tasks.
              </p>
            </div>
          </div>
          <div>
            <div className="font-mono text-xs uppercase text-muted mb-4">// core.skills</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                "AI Automation", "Workflow Automation", "GoHighLevel", "CRM Administration",
                "Lead Management", "Pipeline Optimization", "Customer Support", "Zapier",
                "API Integrations", "Prompt Engineering", "Process Optimization", "SOP Creation",
              ].map((skill) => (
                <div
                  key={skill}
                  className="glass-card px-3 py-3 rounded font-mono text-xs flex items-center gap-2"
                >
                  <span className="text-primary">+</span> {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-primary uppercase">[ 04. Capabilities ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">System Solutions</h2>
            <p className="text-muted mt-4 max-w-xl">
              End-to-end automation engineering — from discovery to deployment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`glass-card p-8 rounded-lg group transition-all duration-500 hover:-translate-y-1 ${
                  s.featured ? "border-primary/40 bg-primary/5" : "hover:border-primary/40"
                }`}
              >
                <div
                  className={`size-10 rounded flex items-center justify-center mb-6 font-mono text-[10px] font-bold ${
                    s.featured ? "bg-primary text-primary-foreground" : "bg-primary/10 border border-primary/20 text-primary"
                  }`}
                >
                  {s.tag}
                </div>
                <h3 className="text-xl font-bold mb-4 italic">{s.title}</h3>
                <ul className="space-y-2 text-sm text-muted font-mono">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary shrink-0">+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-primary uppercase">[ 05. Method ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">My Process</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="glass-card p-6 rounded-lg hover:border-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-primary text-xs">{step.n}</span>
                  <div className="h-px flex-1 bg-border mx-3" />
                  <span className="size-1.5 rounded-full bg-primary/40" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-mono text-xs text-primary uppercase">[ 06. Deployments ]</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight italic">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline font-mono text-xs text-muted hover:text-primary uppercase tracking-widest">
              [ view_all ] →
            </Link>
          </div>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <div
                key={p.title}
                className="glass-card p-8 rounded-lg grid md:grid-cols-[auto_1fr_auto] gap-8 hover:border-primary/30 transition-colors"
              >
                <div className="font-mono text-primary text-2xl font-bold shrink-0 w-16">
                  0{i + 1}
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase text-primary tracking-widest">{p.tag}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">{p.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted mb-2">Challenge</div>
                      <p className="text-sm text-muted">{p.challenge}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted mb-2">Solution</div>
                      <p className="text-sm text-muted">{p.solution}</p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase text-muted mb-2">Outcome</div>
                      <p className="text-sm text-muted">{p.outcome}</p>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-wrap gap-2 md:min-w-[100px]">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[9px] font-mono bg-white/5 border border-white/10 rounded uppercase text-center"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-24 bg-surface border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-primary uppercase">[ 07. Architecture ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Interactive Workflow Showcase</h2>
            <p className="text-muted mt-3 font-mono text-sm">Click a workflow to visualize the automation graph</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {workflows.map((w, i) => (
              <button
                key={w.name}
                onClick={() => setActiveWorkflow(i)}
                className={`px-4 py-2 rounded-sm font-mono text-[11px] uppercase tracking-wider transition-all ${
                  activeWorkflow === i
                    ? "bg-primary text-primary-foreground"
                    : "glass-card text-muted hover:text-foreground"
                }`}
              >
                {w.name}
              </button>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {workflows[activeWorkflow].steps.map((step, i, arr) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className={`px-4 py-3 rounded font-mono text-xs text-center min-w-[110px] transition-all ${
                      i === Math.floor(arr.length / 2)
                        ? "bg-primary text-primary-foreground"
                        : "glass-card border-primary/20"
                    }`}
                  >
                    <div className="font-bold">{step.toUpperCase()}</div>
                    <div className={`text-[9px] mt-1 ${i === Math.floor(arr.length / 2) ? "text-primary-foreground/70" : "text-muted"}`}>
                      step_{String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <svg className="w-6 h-4 shrink-0" viewBox="0 0 24 16">
                      <line
                        x1="0"
                        y1="8"
                        x2="24"
                        y2="8"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className="animate-[flow-dash_2s_linear_infinite]"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs text-primary uppercase">[ 08. Stack ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Technology Stack</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(techStack).map(([cat, tools]) => (
              <div key={cat} className="glass-card p-6 rounded-lg">
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
                  {cat}
                </div>
                <div className="space-y-2">
                  {tools.map((t) => (
                    <div
                      key={t}
                      className="text-sm font-medium hover:text-primary transition-colors cursor-default"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials placeholder + Certs */}
      <section className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="glass-card p-10 rounded-lg">
            <span className="font-mono text-xs text-primary uppercase">[ 09. Signals ]</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-6 tracking-tight">Client Stories — Coming Soon</h2>
            <p className="text-muted leading-relaxed mb-6">
              I'm currently building automation systems and collaborating with businesses. Client success stories will be added here as projects complete.
            </p>
            <div className="flex flex-wrap gap-3 font-mono text-[11px]">
              <span className="px-3 py-1.5 border border-border rounded-full text-muted">Mentor reviews</span>
              <span className="px-3 py-1.5 border border-border rounded-full text-muted">Peer feedback</span>
              <span className="px-3 py-1.5 border border-border rounded-full text-muted">LinkedIn recs</span>
            </div>
          </div>
          <div className="glass-card p-10 rounded-lg">
            <span className="font-mono text-xs text-primary uppercase">[ 10. Learning ]</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-6 tracking-tight">Certifications & Training</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                "GoHighLevel", "AI Automation", "Workflow Engineering",
                "CRM Optimization", "Customer Success", "Zapier",
              ].map((c) => (
                <div key={c} className="flex items-center gap-2 text-sm">
                  <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border font-mono text-[10px] text-muted uppercase">
              // Currently in progress
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12 text-center">
            <span className="font-mono text-xs text-primary uppercase">[ 11. FAQ ]</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">Frequently Asked</h2>
          </div>
          <div className="space-y-2">
            {faqs.map((f, i) => (
              <button
                key={f.q}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left glass-card rounded-lg p-6 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold">{f.q}</span>
                  <span className={`text-primary font-mono text-lg transition-transform ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </div>
                {openFaq === i && (
                  <p className="text-muted text-sm mt-4 leading-relaxed animate-[count-up_0.3s_ease-out]">
                    {f.a}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70 mb-6">
            [ 12. Deploy ]
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-primary-foreground tracking-tighter mb-6 leading-[0.95]">
            READY TO AUTOMATE <br />YOUR BUSINESS?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-12 font-medium max-w-[52ch] mx-auto">
            Transform repetitive tasks into automated systems that save time, improve customer experiences, and help your business scale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="px-8 py-4 bg-background text-primary font-bold rounded-sm shadow-xl hover:-translate-y-1 transition-transform">
              Book a Discovery Call
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-background/30 text-primary-foreground font-bold rounded-sm hover:bg-background/10 transition-colors">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ value, label, accent }: { value: React.ReactNode; label: string; accent?: boolean }) {
  return (
    <div>
      <div className={`text-2xl md:text-3xl font-mono font-bold ${accent ? "text-primary" : ""}`}>
        {value}
      </div>
      <div className="text-[10px] text-muted uppercase font-mono tracking-tighter mt-1">
        {label}
      </div>
    </div>
  );
}

function NodeBox({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`size-10 rounded flex items-center justify-center font-mono text-[10px] font-bold ${
        active
          ? "border border-primary/40 bg-primary/10 text-primary animate-[node-pulse_3s_ease-in-out_infinite]"
          : "border border-white/10 bg-white/5 text-muted"
      }`}
    >
      {label}
    </div>
  );
}

function Connector() {
  return <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-white/10" />;
}
