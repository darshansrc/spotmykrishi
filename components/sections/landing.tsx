/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9T9flTeVPQq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="bg-white py-12 px-0">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-green-800">
            Why Choose Spotmykrishi?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <TruckIcon className="h-12 w-12 text-green-800" />
              <h3 className="mt-4 text-xl font-bold text-green-800">
                Fast Delivery
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Get your products delivered to your doorstep in no time.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <LeafIcon className="h-12 w-12 text-green-800" />
              <h3 className="mt-4 text-xl font-bold text-green-800">
                High-Quality Products
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Enjoy the best quality agricultural products for your garden.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <UsersIcon className="h-12 w-12 text-green-800" />
              <h3 className="mt-4 text-xl font-bold text-green-800">
                Expert Assistance
              </h3>
              <p className="mt-2 text-center text-gray-700">
                Get personalized advice from our team of agricultural experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F5F5F5] py-12 px-6">
        <div className=" mx-auto">
          <h2 className="text-center text-3xl font-bold text-green-800">
            Our Products
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={400}
                alt="Product 1"
                className="rounded-t-lg object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-green-800">
                  Organic Fertilizer
                </h3>
                <p className="mt-2 text-gray-700">
                  Enrich your soil with our premium organic fertilizer.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-800">
                    $29.99
                  </span>
                  <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Product 2"
                className="rounded-t-lg object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-green-800">
                  Vegetable Seeds
                </h3>
                <p className="mt-2 text-gray-700">
                  Grow your own fresh vegetables with our high-quality seeds.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-800">
                    $9.99
                  </span>
                  <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <img
                src="/placeholder.svg"
                width={400}
                height={300}
                alt="Product 3"
                className="rounded-t-lg object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-green-800">
                  Garden Tools
                </h3>
                <p className="mt-2 text-gray-700">
                  Equip your garden with our high-quality gardening tools.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-800">
                    $49.99
                  </span>
                  <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto">
          <h2 className="text-center text-3xl font-bold text-green-800">
            Discounted Products
          </h2>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-8"
          >
            <CarouselContent>
              <CarouselItem>
                <Card className="mx-2">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Discounted Product 1"
                    className="rounded-t-lg object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-green-800">
                      Organic Potting Soil
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Nourish your plants with our premium organic potting soil.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-green-800">
                        $19.99
                        <span className="ml-2 text-sm font-normal line-through text-gray-500">
                          $24.99
                        </span>
                      </span>
                      <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="mx-2">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Discounted Product 2"
                    className="rounded-t-lg object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-green-800">
                      Gardening Gloves
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Protect your hands while gardening with our durable
                      gloves.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-green-800">
                        $7.99
                        <span className="ml-2 text-sm font-normal line-through text-gray-500">
                          $9.99
                        </span>
                      </span>
                      <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="mx-2">
                  <img
                    src="/placeholder.svg"
                    width={300}
                    height={200}
                    alt="Discounted Product 3"
                    className="rounded-t-lg object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold text-green-800">
                      Watering Can
                    </h3>
                    <p className="mt-2 text-gray-700">
                      Water your plants with ease using our high-quality
                      watering can.
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-lg font-bold text-green-800">
                        $12.99
                        <span className="ml-2 text-sm font-normal line-through text-gray-500">
                          $14.99
                        </span>
                      </span>
                      <Button className="bg-green-800 text-white hover:bg-[#43a047]">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
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
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
