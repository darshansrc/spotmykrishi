import Banner from "@/components/sections/banner";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Landing from "@/components/sections/landing";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen">
      <Banner />
      <Header />
      <Hero />
      <Landing />
    </main>
  );
}
