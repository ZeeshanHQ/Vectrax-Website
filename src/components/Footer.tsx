"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Shield,
  FileText,
  Mail,
  Sparkles,
  Zap,
  Globe,
  Rocket,
  Layers,
} from "lucide-react";
import Image from "next/image";

const productLinks = [
  {
    name: "AstraVenta",
    url: "https://astraventa.online",
    icon: Globe,
    description: "Main company portal",
  },
  {
    name: "ComplyMail",
    url: "https://comply.astraventa.online",
    icon: Mail,
    description: "Compliance & email management",
  },
  {
    name: "Shorts Cavexa",
    url: "https://shorts.cavexa.online",
    icon: Sparkles,
    description: "Short-form video content",
  },
  {
    name: "Cavexa",
    url: "https://cavexa.online",
    icon: Zap,
    description: "Cavexa platform",
  },
  {
    name: "LaunchPact",
    url: "https://launchpact.astraventa.online",
    icon: Rocket,
    description: "Launch & deploy",
  },
  {
    name: "Outrelix",
    url: "https://outrelix.astraventa.online",
    icon: Layers,
    description: "Outrelix services",
  },
];

const siteLinks = [
  { name: "Features", href: "/#features" },
  { name: "Database", href: "/#database" },
  { name: "Get the app", href: "/#hero" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy", icon: Shield },
  { name: "Terms of Service", href: "/terms", icon: FileText },
];

export function Footer() {
  return (
    <footer className="relative bg-[#fafafa] border-t border-[#eee] overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f5] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-[#e5e5e5]">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-1"
          >
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <Image
                src="/app_logo.png"
                alt="Vectrax"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-[#0a0a0a]">
                Vectrax
              </span>
            </a>
            <p className="text-sm text-[#666] leading-relaxed max-w-[240px]">
              Manage Supabase from your pocket. By AstraVenta.
            </p>
          </motion.div>

          {/* Products & Services */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
              Products & Services
            </h4>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-sm text-[#444] hover:text-[#0a0a0a] transition-colors"
                  >
                    <item.icon className="w-3.5 h-3.5 text-[#999] group-hover:text-[#0a0a0a] transition-colors flex-shrink-0" />
                    <span className="font-medium">{item.name}</span>
                    <ExternalLink className="w-3 h-3 text-[#bbb] group-hover:text-[#0a0a0a] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-0.5" />
                  </a>
                  <p className="text-xs text-[#888] ml-6 mt-0.5">{item.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Site links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
              Vectrax
            </h4>
            <ul className="space-y-3">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#444] hover:text-[#0a0a0a] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#888] mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-sm text-[#444] hover:text-[#0a0a0a] transition-colors font-medium"
                  >
                    <link.icon className="w-3.5 h-3.5 text-[#999] group-hover:text-[#0a0a0a] transition-colors flex-shrink-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-[#888]">
            © {new Date().getFullYear()} AstraVenta. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy"
              className="text-[#888] hover:text-[#0a0a0a] transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-[#888] hover:text-[#0a0a0a] transition-colors"
            >
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
