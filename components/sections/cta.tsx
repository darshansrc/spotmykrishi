import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <>
      <section className="bg-green-800 py-12 px-6 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Grow Your Garden?</h2>
          <p className="mt-4 text-lg">
            Explore our wide range of agricultural products and services to
            transform your outdoor space.
          </p>
          <div className="mt-6">
            <Button className="bg-white text-green-800 hover:bg-gray-200">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-[#F5F5F5] py-8 px-0">
        <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-green-800">About</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Plants
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text-green-800"
                  prefetch={false}
                >
                  Gardening Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-800">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-700 hover:text"
                  prefetch={false}
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
