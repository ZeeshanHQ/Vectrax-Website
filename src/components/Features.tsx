"use client";

import { motion } from "framer-motion";

const featureCards = [
  {
    title: "AI-generated SQL, tuned for Supabase",
    description:
      "Turn natural language into safe, optimized queries that respect your schema, RLS, and performance constraints.",
    tag: "AI copilot",
  },
  {
    title: "Full-project scans in seconds",
    description:
      "Continuously scan your instance for missing indexes, unused tables, and slow queries before they hurt users.",
    tag: "Health checks",
  },
  {
    title: "Vulnerability & policy insights",
    description:
      "Spot risky public tables, overly broad policies, and misconfigured roles with clear, actionable suggestions.",
    tag: "Security",
  },
  {
    title: "Safe one-tap maintenance",
    description:
      "Restart services, rotate keys, and trigger backups from Android with guardrails and clear confirmation flows.",
    tag: "Control",
  },
  {
    title: "Guided query workspace",
    description:
      "Experiment with queries, compare plans, and save the ones that matter—all with inline explanations from AI.",
    tag: "Workflow",
  },
  {
    title: "Production-ready defaults",
    description:
      "Opinionated presets for logging, retention, and monitoring so new projects start from a strong baseline.",
    tag: "Best practices",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#FFFFFF] text-[#0a0a0a] border-t border-b border-[#f3f4f6] py-20 sm:py-24"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#9ca3af] mb-4">
            Why Vectrax
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            An AI copilot for your Supabase.
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed">
            Vectrax blends realtime observability with an AI assistant that understands your schema,
            queries, and policies – so you can manage production databases confidently from anywhere.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featureCards.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: 0.12 + index * 0.04,
                ease: "easeOut",
              }}
              className="relative overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white/90 p-6 sm:p-8 shadow-[0_12px_30px_rgba(15,23,42,0.05)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300"
            >
              {/* corner dots */}
              <span className="pointer-events-none absolute -top-1.5 -left-1.5 h-2.5 w-2.5 rounded-full border border-[#e5e7eb] bg-white" />
              <span className="pointer-events-none absolute -top-1.5 -right-1.5 h-2.5 w-2.5 rounded-full border border-[#e5e7eb] bg-white" />
              <span className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 rounded-full border border-[#e5e7eb] bg-white" />
              <span className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-2.5 w-2.5 rounded-full border border-[#e5e7eb] bg-white" />

              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#9ca3af]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-[#9ca3af]">↗</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-3 py-1 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#4b5563]">
                  {feature.tag}
                </span>
              </div>

              <h3 className="font-display text-sm sm:text-base font-semibold text-[#0f172a] mb-2">
                {feature.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6b7280] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-[11px] sm:text-xs text-[#6b7280]"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            AI understands your schema and RLS policies.
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e7eb] bg-[#f9fafb] px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            Designed for real production Supabase workloads.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
