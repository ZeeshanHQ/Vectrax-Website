"use client";

import { motion } from "framer-motion";

interface OrbProps {
  size?: number;
  color?: string;
  x?: string | number;
  y?: string | number;
  delay?: number;
  duration?: number;
  blur?: number;
  className?: string;
}

function Orb({ size = 300, color, x = "50%", y = "50%", delay = 0, duration = 8, blur = 80, className = "" }: OrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.6,
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Orb
        size={400}
        color="radial-gradient(circle, rgba(57, 255, 20, 0.4) 0%, transparent 70%)"
        x="50%"
        y="45%"
        delay={0}
        duration={10}
        className="-translate-x-1/2 -translate-y-1/2"
      />
      <Orb
        size={320}
        color="radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, transparent 70%)"
        x="35%"
        y="50%"
        delay={1}
        duration={12}
        className="-translate-x-1/2 -translate-y-1/2"
      />
      <Orb
        size={280}
        color="radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)"
        x="65%"
        y="48%"
        delay={2}
        duration={9}
        className="-translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}

export function SectionOrb({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`absolute w-64 h-64 rounded-full opacity-20 pointer-events-none ${className}`}
      style={{
        background: "radial-gradient(circle, rgba(57, 255, 20, 0.5) 0%, transparent 70%)",
        filter: "blur(60px)",
      }}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
