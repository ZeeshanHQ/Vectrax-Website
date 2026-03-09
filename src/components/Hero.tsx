"use client";

import { motion } from "framer-motion";
import { HeroOrbs } from "./AnimatedOrbs";
import { CursorGlow } from "./CursorGlow";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-[150px] overflow-hidden">
      <HeroOrbs />
      <CursorGlow />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-120px] h-[380px] w-[520px] rounded-[999px] bg-gradient-to-bl from-emerald-400 via-sky-400 to-fuchsia-500 opacity-70 blur-3xl"
        initial={{ rotate: -6, translateY: 20 }}
        animate={{ rotate: 0, translateY: 0 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 text-center px-6">
        <p className="text-xs uppercase tracking-widest text-[#888] mb-6">
          By Astraventa
        </p>
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[#0a0a0a] tracking-tight max-w-2xl mx-auto leading-[1.1]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Manage Supabase.
          <br />
          <span className="text-[#166534]">Anywhere.</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-[15px] text-[#666] max-w-md mx-auto"
          style={{ lineHeight: 1.7 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The Android app that puts your database in your pocket.
        </motion.p>
      </div>
    </section>
  );
}
