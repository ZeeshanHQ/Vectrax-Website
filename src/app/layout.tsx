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
    default: "Vectrax — Manage Supabase from your pocket - Astraventa",
    template: "%s | Vectrax",
  },
  description: "Vectrax blends realtime observability with an AI assistant that understands your schema, queries, and policies – so you can manage production databases confidently from anywhere.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vectrax — Manage Supabase from your pocket",
    description: "Vectrax blends realtime observability with an AI assistant that understands your schema, queries, and policies.",
    url: "https://vectrax.astraventa.online",
    siteName: "Astraventa",
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
    description: "Vectrax blends realtime observability with an AI assistant that understands your schema, queries, and policies.",
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
