"use client";

import { motion } from "framer-motion";
import { HeroOrbs } from "./AnimatedOrbs";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-[150px] overflow-hidden">
      <HeroOrbs />

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
