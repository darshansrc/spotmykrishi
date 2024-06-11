import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="bg-[#F5F5F5] py-12 px-0">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold text-[#4CAF50] md:text-4xl">
            Grow Your Agriculture with Spotmykrishi
          </h1>
          <p className="mt-4 text-gray-700">
            Discover a wide range of high-quality agricultural products and
            services to help you cultivate your dream garden.
          </p>
          <div className="mt-6 flex gap-4">
            <Button className="bg-[#4CAF50] text-white hover:bg-[#43a047]">
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="text-[#4CAF50] hover:bg-[#F5F5F5]"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div>
          <img
            src="/assets/hero.jpg"
            width={600}
            height={400}
            alt="Spotmykrishi Hero Image"
            className="mx-auto rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
