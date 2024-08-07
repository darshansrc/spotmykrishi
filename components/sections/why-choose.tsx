import React from "react";

export default function WhyChoose() {
  return (
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
