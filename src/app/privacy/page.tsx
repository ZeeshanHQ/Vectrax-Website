import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Vectrax by AstraVenta",
  description: "Privacy Policy for Vectrax and AstraVenta products.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[#888] text-sm">Last updated: March 2025</p>

          <div className="mt-12 space-y-10 text-[#444] leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                1. Introduction
              </h2>
              <p>
                AstraVenta (“we,” “our,” or “us”) operates Vectrax and related
                services. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                products, including Vectrax, ComplyMail, Cavexa, LaunchPact,
                Outrelix, and other AstraVenta services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                2. Information We Collect
              </h2>
              <p>
                We may collect information that you provide directly, such as
                account details, app usage data, and database connection
                credentials. We also collect technical data like device
                information and usage analytics to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                3. How We Use Your Information
              </h2>
              <p>
                We use your information to provide, maintain, and improve our
                services, to communicate with you, to ensure security, and to
                comply with legal obligations. We do not sell your personal
                data.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                data. Your Supabase credentials and database connections are
                handled securely. We recommend using strong passwords and
                enabling two-factor authentication where available.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                5. Third-Party Services
              </h2>
              <p>
                Our apps integrate with third-party services (e.g., Supabase,
                Google Play). Each service has its own privacy policy. We
                encourage you to review those policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                6. Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of your personal
                data. Contact us at the addresses provided below to exercise
                these rights.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-[#0a0a0a] mb-4">
                7. Contact Us
              </h2>
              <p>
                For privacy-related questions, contact AstraVenta at{" "}
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
