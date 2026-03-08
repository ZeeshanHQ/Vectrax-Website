"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/app_logo.png"
            alt="Vectrax"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="text-lg font-semibold tracking-tight text-[#0a0a0a]">
            Vectrax
          </span>
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#features"
            className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors"
          >
            Features
          </a>
          <a
            href="#database"
            className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors"
          >
            Database
          </a>
          <a
            href="/privacy"
            className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors"
          >
            Terms
          </a>
          <Button label="Get the app" />
        </nav>
      </div>
    </motion.header>
  );
}
