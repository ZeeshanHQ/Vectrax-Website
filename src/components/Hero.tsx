"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroOrbs } from "./AnimatedOrbs";
import { CursorGlow } from "./CursorGlow";
import { Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-[160px] overflow-hidden bg-white"
    >
      <HeroOrbs />
      <CursorGlow />

      {/* Top-right premium gradient blob */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-140px] h-[500px] w-[640px] rounded-[999px] bg-gradient-to-bl from-emerald-300 via-sky-300 to-fuchsia-400 opacity-50 blur-[110px]"
        initial={{ rotate: -8, translateY: 40, opacity: 0 }}
        animate={{ rotate: 0, translateY: 0, opacity: 0.5 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
      />
      {/* Bottom-left secondary glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-60px] left-[-60px] h-[340px] w-[340px] rounded-full bg-gradient-to-tr from-emerald-200 to-teal-400 opacity-25 blur-[80px]"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 2.6, ease: "easeOut", delay: 0.5 }}
      />

      {/* ── Content ── */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
      >
        {/* AI pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 text-emerald-700 text-[11px] font-semibold tracking-wider uppercase shadow-sm"
        >
          <Sparkles className="w-3 h-3" />
          AI-Powered Database Management
        </motion.div>

        {/* Heading — using Syne display font for premium feel */}
        <motion.h1
          className="font-display text-[2.8rem] sm:text-6xl md:text-7xl font-extrabold text-[#0a0a0a] tracking-[-0.04em] leading-[1.0] mb-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
        >
          Manage Supabase.
          <br />
          <span
            className="bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 bg-clip-text text-transparent"
          >
            Anywhere.
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-[15px] sm:text-[17px] text-[#5a6474] max-w-[520px] mx-auto leading-[1.75]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
        >
          Generate SQL with AI, scan for vulnerabilities, monitor live
          performance, and manage RLS policies — all from your Android phone.
        </motion.p>

        {/* Single CTA */}
        <motion.div
          className="mt-10 flex items-center justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.42 }}
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#0a0a0a] text-white text-sm font-semibold shadow-[0_6px_28px_rgba(0,0,0,0.18)] hover:shadow-[0_8px_36px_rgba(16,185,129,0.26)] hover:bg-[#1c1c1c] transition-all duration-200"
          >
            Download on Android
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.62 }}
        >
          {[
            { value: "AI SQL", label: "Query Generator" },
            { value: "Live", label: "DB Health Monitor" },
            { value: "RLS", label: "Policy Scanner" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-sm font-bold text-[#0a0a0a] tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] text-[#b0b8c4]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll-linked zoom-out phone preview ── */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 mt-16 flex justify-center"
      >
        <div className="relative w-[220px] h-[44px] rounded-2xl border border-[#e8edf2] bg-white/80 backdrop-blur-sm shadow-[0_8px_40px_rgba(15,23,42,0.08)] flex items-center justify-center gap-3 px-5">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[12px] font-medium text-[#444]">All projects healthy</span>
        </div>
      </motion.div>
    </section>
  );
}
