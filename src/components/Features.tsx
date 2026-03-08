"use client";

import { motion } from "framer-motion";
import { Table2, Database, Smartphone } from "lucide-react";
import { SectionOrb } from "./AnimatedOrbs";

const features = [
  {
    icon: Table2,
    title: "Manage Tables",
    description:
      "View, edit, and organize your Supabase tables from anywhere. No laptop required.",
  },
  {
    icon: Database,
    title: "Run Queries",
    description:
      "Execute SQL queries and browse results in real time. Your database in your pocket.",
  },
  {
    icon: Smartphone,
    title: "Native Android",
    description:
      "Built for Android. Clean, fast, and designed for developers on the go.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-[150px] px-8 overflow-hidden"
    >
      <SectionOrb className="top-20 -right-32" />
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#888] mb-3">
          Features
        </p>
        <h2 className="text-xl font-bold text-[#0a0a0a] tracking-tight mb-16">
          Built for database workflows
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col"
            >
              <motion.div
                className="mb-5 w-8 h-8 flex items-center justify-center text-[#0a0a0a]"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <feature.icon className="w-5 h-5" strokeWidth={1.5} />
              </motion.div>
              <h3 className="text-base font-semibold text-[#0a0a0a] mb-2">
                {feature.title}
              </h3>
              <p
                className="text-[15px] text-[#666]"
                style={{ lineHeight: 1.7 }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
