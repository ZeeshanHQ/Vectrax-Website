import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { DatabaseStatus } from "@/components/DatabaseStatus";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Header />
      <Hero />
      <Features />
      <DatabaseStatus />
      <Footer />
    </main>
  );
}
