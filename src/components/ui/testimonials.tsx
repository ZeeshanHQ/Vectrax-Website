"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Vectrax turned our Supabase incidents from late‑night laptop sessions into quick fixes on my phone. The AI SQL suggestions are shockingly good.",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80",
    name: "Aisha Rahman",
    role: "CTO, SaaS startup",
  },
  {
    text: "I review slow queries on the train, let Vectrax propose indexes, and ship the change before I’m back at my desk.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    name: "Daniel Kim",
    role: "Lead Developer",
  },
  {
    text: "Being able to restart services and check RLS policies from Android means I can unblock the team even when I’m away from the laptop.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80",
    name: "Sofia Martins",
    role: "Head of Engineering",
  },
  {
    text: "Vectrax feels like a database architect in my pocket. It explains why a query is slow and how to fix it in language everyone on the team understands.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Omar Khalid",
    role: "Database Architect",
  },
  {
    text: "On‑call is less stressful now. I get a push, open Vectrax, run a few checks, and either roll back or patch with confidence.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    name: "Priya Patel",
    role: "Site Reliability Engineer",
  },
  {
    text: "The vulnerability insights surfaced a couple of overly broad policies we had missed in review. Fixing them from my phone felt almost unfair.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    name: "Luis Hernandez",
    role: "Security Engineer",
  },
  {
    text: "Our product team uses Vectrax to explore data without risking production. The AI hints keep people away from dangerous queries.",
    image:
      "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=200&q=80",
    name: "Emily Wong",
    role: "Product Engineer",
  },
  {
    text: "Vectrax is in every incident review doc now. Screenshots, suggested queries, and schema diffs all come straight from the app.",
    image:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?auto=format&fit=crop&w=200&q=80",
    name: "Jonas Becker",
    role: "Engineering Manager",
  },
  {
    text: "New hires pick up our Supabase setup faster because Vectrax explains tables, policies, and queries as they explore.",
    image:
      "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=200&q=80",
    name: "Hana Suzuki",
    role: "Full‑stack Developer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="bg-background my-24 relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
            What teams say about Vectrax
          </h2>
          <p className="text-center mt-4 text-sm sm:text-base opacity-75">
            Real engineers running real Supabase workloads, sharing how Vectrax fits into their
            incident response and daily development flow.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

