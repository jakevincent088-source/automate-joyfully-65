export type Project = {
  slug: string;
  industry: string;
  title: string;
  summary: string;
  challenge: string;
  goals: string[];
  solution: string;
  automations: string[];
  stack: string[];
  impact: string[];
  lessons: string[];
  color: string;
};

export const projects: Project[] = [
  {
    slug: "dental-practice-crm",
    industry: "Dental",
    title: "Dental Practice CRM & AI Automation System",
    summary: "End-to-end GoHighLevel CRM for a simulated dental clinic — booking, segmentation, AI comms, and full email/SMS orchestration.",
    challenge: "Front desks juggle phones, forms, spreadsheets, and disconnected calendars. Leads slip, appointments get missed, and follow-up is inconsistent.",
    goals: [
      "Centralize every lead, patient, and appointment in one CRM",
      "Automate booking, reminders, and no-show recovery",
      "Use AI to qualify inquiries and respond 24/7",
      "Track revenue, pipeline, and CSAT in one dashboard",
    ],
    solution: "Full GoHighLevel build: pipelines, calendars, Smart Lists, funnels, forms, surveys, memberships, and AI-assisted communications wired together via workflows and Zapier.",
    automations: [
      "Lead capture form → CRM contact + AI qualification",
      "Missed call → auto text back + booking link",
      "Booked appointment → SMS + email confirmations + calendar sync",
      "24h & 2h reminders with reschedule links",
      "No-show detection → re-engagement drip",
      "Post-visit review request automation",
    ],
    stack: ["GoHighLevel", "Zapier", "Twilio", "OpenAI", "Calendly", "Stripe"],
    impact: [
      "~85% projected reduction in manual front-desk work",
      "24/7 lead capture with AI qualification",
      "Zero missed leads: every inquiry lands in CRM within 5s",
    ],
    lessons: [
      "Design for the front desk, not the tech stack",
      "Every SMS/email must have a fallback path",
      "AI works best when scoped to a narrow, high-value task",
    ],
    color: "from-primary/40 to-secondary/40",
  },
  {
    slug: "ai-workflow-portfolio",
    industry: "Multi-industry",
    title: "AI Workflow Automation Portfolio",
    summary: "A collection of automations connecting CRMs with third-party apps — lead management, follow-ups, tasks, AI ops.",
    challenge: "Operations teams live in 10+ tools. Data doesn't flow. Manual copy-paste, missed handoffs, and inconsistent execution kill velocity.",
    goals: [
      "Sync data between CRM, calendar, docs, chat, and support tools",
      "Trigger AI-assisted actions from real business events",
      "Give operators one source of truth and instant notifications",
    ],
    solution: "Portfolio of modular Zapier + Make + native API workflows demonstrating lead routing, task creation, AI summarization, and cross-tool orchestration.",
    automations: [
      "New CRM contact → enrich → Slack notify → create Notion record",
      "Inbound email → AI classify → route to team → log in CRM",
      "Meeting ends → AI summary → CRM note + follow-up task",
      "Stripe payment → CRM update → onboarding sequence",
    ],
    stack: ["Zapier", "Make", "OpenAI", "Slack", "Notion", "Google Workspace"],
    impact: [
      "30+ workflows documented and reusable",
      "Cross-industry patterns for lead, ops, and support",
      "Every workflow ships with an architecture diagram",
    ],
    lessons: [
      "Error handling and retries matter more than the happy path",
      "Naming, tagging, and folder discipline scale better than complexity",
    ],
    color: "from-secondary/40 to-accent/40",
  },
  {
    slug: "crm-funnel-management",
    industry: "Marketing",
    title: "CRM & Funnel Management Project",
    summary: "Landing pages, forms, surveys, pipelines, Smart Lists, lead routing, and automated follow-up campaigns.",
    challenge: "Agencies burn hours stitching funnels together across landing pages, CRMs, ad platforms, and follow-up tools — with no unified view of conversion.",
    goals: [
      "Ship end-to-end funnels in a single platform",
      "Route leads instantly to the right team or automation",
      "Nurture cold leads without operator time",
    ],
    solution: "Complete customer acquisition system on GoHighLevel: high-converting landing pages, multi-step forms, surveys, pipelines, Smart Lists, and long-tail nurture sequences.",
    automations: [
      "UTM-tagged form submissions → segmented pipeline",
      "Lead score threshold → immediate SMS + booking link",
      "Cold lead → 30-day nurture with dynamic content",
      "Won opportunity → onboarding funnel + upsell sequence",
    ],
    stack: ["GoHighLevel", "Stripe", "Calendly", "Twilio", "Meta"],
    impact: [
      "Full funnel visibility from ad click to closed deal",
      "Automated nurture keeps every lead warm",
      "Reusable snapshot for agency scale",
    ],
    lessons: [
      "Copy converts; automation just delivers it faster",
      "Segmentation quality determines automation ROI",
    ],
    color: "from-accent/40 to-primary/40",
  },
];
