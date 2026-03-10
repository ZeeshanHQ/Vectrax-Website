"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Database", href: "#database" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 py-4 sm:py-6"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 rounded-2xl bg-white/70 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button label="Get the app" />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-[#0a0a0a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-[calc(100%+8px)] left-6 right-6 overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_48px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-[#444] hover:text-[#0a0a0a] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <Button label="Get the app" className="w-full justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
