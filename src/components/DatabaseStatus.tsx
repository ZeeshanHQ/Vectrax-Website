"use client";

import { motion } from "framer-motion";
import { Activity, Database, ShieldCheck } from "lucide-react";

export function DatabaseStatus() {
  return (
    <section
      id="database"
      className="relative bg-[#F9FAFB] border-t border-[#E5E7EB] py-20 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9ca3af] mb-3">
            Live Supabase overview
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0f172a] mb-4">
            See the health of every project at a glance.
          </h2>
          <p className="text-sm sm:text-base text-[#4b5563] leading-relaxed mb-6">
            Vectrax pulls the most important Supabase signals into a single mobile screen—uptime,
            performance, and security—so you can decide in seconds whether to relax or respond.
          </p>
          <ul className="space-y-3 text-sm text-[#4b5563]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Instant status for all Supabase projects in your workspace.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              AI notes that explain spikes, slow queries, and risky changes.
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              One‑tap actions to drill into logs, policies, or backups.
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 via-white to-sky-100 rounded-[2.5rem] blur-2xl opacity-80" />

            <div className="relative rounded-[2rem] border border-[#E5E7EB] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.15)] p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#9ca3af]">
                    Workspace
                  </p>
                  <p className="text-sm font-medium text-[#0f172a]">
                    AstraVenta – Production
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  All green
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5 text-xs">
                <div className="rounded-2xl border border-[#E5E7EB] bg-slate-50/60 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-emerald-600">
                      <Database className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-[11px] font-medium text-[#0f172a]">
                      Databases
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4b5563]">
                    4 active
                    <br />
                    0 paused
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-slate-50/60 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-sky-600">
                      <Activity className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-[11px] font-medium text-[#0f172a]">
                      Performance
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4b5563]">
                    p95 latency
                    <br />
                    42 ms
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-slate-50/60 p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded-xl bg-amber-500">
                      <ShieldCheck className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-[11px] font-medium text-[#0f172a]">
                      Security
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4b5563]">
                    2 policies
                    <br />
                    to review
                  </p>
                </div>
              </div>

              <div className="relative mt-4 rounded-2xl border border-dashed border-[#E5E7EB] bg-slate-50/80 p-3">
                <p className="text-[11px] font-medium text-[#0f172a] mb-1">
                  AI incident note
                </p>
                <p className="text-[11px] text-[#4b5563] leading-relaxed">
                  “Query latency increased after a new index on{" "}
                  <code className="rounded bg-white px-1 py-0.5 text-[10px]">
                    events.user_id
                  </code>
                  . Consider updating the composite index or reverting.”
                </p>

                <motion.div
                  className="pointer-events-none absolute -right-1 bottom-2 h-6 w-6 rounded-full border border-emerald-400 bg-white shadow-[0_0_0_4px_rgba(16,185,129,0.15)]"
                  animate={{
                    x: [-6, 0, -6],
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="h-full w-full rounded-full border border-dashed border-emerald-300" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
