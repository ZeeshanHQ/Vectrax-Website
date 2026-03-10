import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vectrax.astraventa.online"),
  title: {
    default: "Vectrax | Agentic Supabase Intelligence for Mobile",
    template: "%s | Vectrax",
  },
  description: "Your AI-powered Supabase Command Center. Real-time observability, autonomous schema guidance, and safe actions for production DBs, anywhere.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vectrax | Agentic Supabase Intelligence",
    description: "Your AI-powered Supabase Command Center. Real-time observability, autonomous schema guidance, and safe actions for production DBs, anywhere.",
    url: "https://vectrax.astraventa.online",
    siteName: "Vectrax",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vectrax Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vectrax — Manage Supabase from your pocket",
    description: "AI-powered app to manage Supabase — generate SQL, scan for vulnerabilities, monitor performance, all from your pocket.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
