import React from "react";
import { Button } from "../atoms";

export default function HomeBanner() {
  return (
    <section id="banner" className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4">
      <div className="h-screen flex items-center">
        <div>
          <p className="text-4xl md:text-6xl font-semibold font-poppins text-blue-300 mb-10">
            Stream anime from <br /> the Cloud
          </p>
          <div className="flex items-center mb-5">
            <Button text={"Sign Up"} />

            <p className="ml-5 text-white text-xl font-normal">
              Starting at $7.99/mo
            </p>
          </div>
          <p className="text-gray-200 text-lg">
            Get a 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
