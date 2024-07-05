import Banner from "@/components/sections/banner";
import CTA from "@/components/sections/cta";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Landing from "@/components/sections/landing";
import Products from "@/components/sections/products";
import WhyChoose from "@/components/sections/why-choose";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Banner />
      <Header />
      <Hero />
      <Products />
      <WhyChoose />
      <Landing />
      <CTA />
    </main>
  );
}
