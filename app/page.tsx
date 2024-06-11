import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import Banner from "@/components/sections/banner";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import Landing from "@/components/sections/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col min-w-full">
      <Banner />
      <Header />
      <Hero />
      <Landing />
    </main>
  );
}
