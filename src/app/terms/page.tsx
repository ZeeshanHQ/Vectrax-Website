import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Vectrax and Astraventa products.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Header />
      <article className="pt-28 pb-24 px-6 sm:px-8 max-w-3xl mx-auto">
        <div className="prose prose-neutral max-w-none">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-[#666] hover:text-[#0a0a0a] transition-colors inline-flex items-center gap-1"
            >
              ← Back to Vectrax
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3">
            Terms of Service
          </h1>
          <p className="text-[#888] text-sm">Last updated: March 2025</p>

          <div className="mt-12 space-y-10 text-[#444] leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Vectrax, ComplyMail, Cavexa, LaunchPact,
                Outrelix, or any other Astraventa product, you agree to be bound
                by these Terms of Service. If you do not agree, do not use our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                2. Description of Services
              </h2>
              <p>
                Vectrax is an app that enables you to manage
                Supabase databases from your mobile phone. Astraventa provides
                additional products and services as described on our websites.
                We reserve the right to modify, suspend, or discontinue any
                service at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                3. Your Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                credentials and for all activity under your account. You must
                use our services in compliance with applicable laws and not for
                any unlawful purpose. You must not attempt to compromise the
                security or integrity of our systems.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                4. Intellectual Property
              </h2>
              <p>
                All content, features, and functionality of our services,
                including software, design, and branding, are owned by Astraventa
                and protected by intellectual property laws. You may not copy,
                modify, distribute, or create derivative works without our
                express permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                5. Disclaimers
              </h2>
              <p>
                Our services are provided “as is” without warranties of any
                kind. We do not guarantee uninterrupted or error-free operation.
                Use of our products to manage databases is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Astraventa shall not be
                liable for any indirect, incidental, special, or consequential
                damages arising from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                7. Changes
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of
                our services after changes constitutes acceptance of the updated
                Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                8. Contact
              </h2>
              <p>
                For questions about these Terms, contact Astraventa at{" "}
                <a
                  href="https://astraventa.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#166534] hover:underline"
                >
                  astraventa.online
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-[#eee]">
            <Link
              href="/"
              className="text-sm font-medium text-[#166534] hover:underline"
            >
              ← Return to Vectrax
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
休息 / content
