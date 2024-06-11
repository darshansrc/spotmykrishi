import Landing from "@/components/landing";
import Banner from "@/components/sections/banner";
import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import React from "react";

const Page = () => {
  return (
    <main>
      <Banner />
      <Header />
      <Hero />
      <Landing />
    </main>
  );
};

export default Page;
