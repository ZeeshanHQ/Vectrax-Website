"use client";

import { motion } from "framer-motion";
import { HeroOrbs } from "./AnimatedOrbs";
import { CursorGlow } from "./CursorGlow";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-[150px] overflow-hidden">
      <HeroOrbs />
      <CursorGlow />

      {/* Top-right premium gradient blob */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-120px] h-[480px] w-[600px] rounded-[999px] bg-gradient-to-bl from-emerald-400 via-sky-400 to-fuchsia-500 opacity-60 blur-[100px]"
        initial={{ rotate: -6, translateY: 30, opacity: 0 }}
        animate={{ rotate: 0, translateY: 0, opacity: 0.6 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Bottom-left secondary glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-80px] left-[-80px] h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-emerald-300 to-teal-500 opacity-30 blur-[90px]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.4 }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* AI-powered pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 backdrop-blur-sm text-emerald-700 text-xs font-semibold tracking-wide shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          AI-Powered Database Management
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#0a0a0a] tracking-[-0.03em] leading-[1.05] mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Manage Supabase.{" "}
          <br />
          <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
            Anywhere.
          </span>
        </motion.h1>

        <motion.p
          className="mt-2 text-base sm:text-lg text-[#555] max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          Generate SQL with AI, scan your database for vulnerabilities, monitor live performance, and manage RLS policies — all from your Android phone.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0a0a0a] text-white text-sm font-semibold shadow-[0_4px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_32px_rgba(16,185,129,0.28)] hover:bg-[#1a1a1a] transition-all duration-200"
          >
            Download on Android
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#database"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#e2e8f0] bg-white text-[#0a0a0a] text-sm font-semibold shadow-sm hover:border-emerald-300 hover:shadow-md transition-all duration-200"
          >
            See how it works
          </a>
        </motion.div>

        {/* Subtle stat row */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-8 text-xs text-[#999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          {[
            { value: "AI SQL", label: "Query Generator" },
            { value: "Live", label: "DB Health Monitor" },
            { value: "RLS", label: "Policy Scanner" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-bold text-[#0a0a0a] tracking-tight">{stat.value}</span>
              <span className="text-[11px] text-[#aaa]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
