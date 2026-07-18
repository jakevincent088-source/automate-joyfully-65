import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Discovery Call" },
      { name: "description", content: "Book a discovery call to scope your AI automation, CRM, or workflow project." },
      { property: "og:title", content: "Contact — Jake Vincent Talaba" },
      { property: "og:description", content: "Let's automate your business." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <section className="pt-20 pb-16 grid-bg border-b border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-primary uppercase">[ init.contact ]</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tighter mt-4 mb-6">
            Let's Talk <span className="text-primary italic">Automation</span>
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Tell me about your bottleneck. I'll respond within 24 hours with a rough scope and next steps.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          {sent ? (
            <div className="glass-card p-12 rounded-lg text-center">
              <div className="font-mono text-xs text-primary uppercase mb-4">[ transmission_received ]</div>
              <h2 className="text-2xl font-bold mb-4">Thanks — message received.</h2>
              <p className="text-muted">I'll be back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass-card p-8 rounded-lg space-y-5"
            >
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Company" name="company" />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2 block">
                  Project Scope
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-border rounded px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  placeholder="What are you trying to automate?"
                />
              </div>
              <button className="w-full py-3 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors">
                Send Transmission →
              </button>
            </form>
          )}

          <div className="mt-8 text-center font-mono text-xs text-muted">
            or email directly: <a href="mailto:hello@jakevincent.dev" className="text-primary hover:underline">hello@jakevincent.dev</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2 block">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        className="w-full bg-white/5 border border-border rounded px-3 py-2 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
