import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

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
    default: "Vectrax — Manage Supabase from your pocket",
    template: "%s | Vectrax",
  },
  description: "AI-powered app to manage Supabase — generate SQL, scan for vulnerabilities, monitor performance, all from your pocket. By Astraventa.",
  icons: {
    icon: "/app_logo.png",
    apple: "/app_logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
休息 / content
