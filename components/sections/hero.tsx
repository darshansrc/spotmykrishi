import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const whatsappLink = () => {
    const message = encodeURIComponent(
      `I'm interested in buying your plantation products. Can you provide more information?`
    );
    return `https://wa.me/+917022472627?text=${message}`;
  };

  return (
    <section className="bg-[#F5F5F5] py-12 px-0">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl font-bold text-green-800 md:text-4xl">
            Grow Your Agriculture with Spotmykrishi
          </h1>
          <p className="mt-4 text-gray-700">
            Discover a wide range of high-quality agricultural products and
            services to help you cultivate your dream garden.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href={whatsappLink()}>
              <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                <ShoppingCart className="size-4 mr-2" /> Shop Now
              </Button>
            </Link>
            <Link href={whatsappLink()}>
              <Button
                variant="outline"
                className="text-green-800 hover:bg-[#F5F5F5]"
              >
                <WhatsappIcon className="size-5 mr-2" /> Whatsapp
              </Button>
            </Link>
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

function WhatsappIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}
