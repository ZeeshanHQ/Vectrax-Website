"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { SectionOrb } from "./AnimatedOrbs";

export function DatabaseStatus() {
  return (
    <section
      id="database"
      className="relative py-[150px] px-8 overflow-hidden"
    >
      <SectionOrb className="bottom-20 -left-24" />
      <div className="max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#888] mb-3">
          Astraventa
        </p>
        <h2 className="text-xl font-bold text-[#0a0a0a] tracking-tight mb-12">
          Manage your Supabase database
        </h2>

        <motion.div
          className="relative rounded-lg bg-[#fafafa] px-6 py-5 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ boxShadow: "0 0 30px rgba(57, 255, 20, 0.15)" }}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(57, 255, 20, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex items-center gap-4">
            <motion.div
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0a0a0a]"
              animate={{
                boxShadow: [
                  "0 0 12px rgba(57, 255, 20, 0.3)",
                  "0 0 20px rgba(57, 255, 20, 0.5)",
                  "0 0 12px rgba(57, 255, 20, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Database className="w-5 h-5 text-[#39FF14]" strokeWidth={2} />
            </motion.div>
            <div className="flex-1">
              <p className="text-sm font-medium text-[#0a0a0a]">
                Vectrax connects to Supabase
              </p>
              <div className="flex items-center gap-2 mt-1">
                <motion.span
                  className="inline-block w-2 h-2 rounded-full bg-[#39FF14]"
                  animate={{
                    opacity: [1, 0.4, 1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <span className="text-[14px] text-[#666]">Manage tables, run queries, monitor in real time</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
