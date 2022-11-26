import React from "react";
import {
  BrandApple,
  BrandPlayStation,
  BrandRoku,
  BrandSamsung,
  BrandXbox,
} from "../../assets";

export default function HomeDevices() {
  return (
    <section
      id="devices"
      className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4 mt-32"
    >
      <h2 class="text-5xl font-semibold text-center font-poppins text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-red-500 to-yellow-500 mb-10">
        Watch on all your devices
      </h2>

      <div className="bg-gradient-to-b from-purple-600  to-red-500 rounded">
        <div className="bg-black ml-1 p-5 md:pl-20">
          <p className="text-white text-xl md:text-2xl font-light mb-10">
            Sync movies and shows across your phone, TV, <br /> and computer and{" "}
            <span className="font-normal">
              easily access your favorites <br /> anywhere in the world
            </span>
          </p>

          <div className="flex flex-wrap gap-10 md:gap-5 items-center justify-between">
            <img src={BrandApple} alt="brand" width={40} />
            <img src={BrandSamsung} alt="brand" width={150} />
            <img src={BrandRoku} alt="brand" width={90} />
            <img src={BrandPlayStation} alt="brand" width={200} />
            <img src={BrandXbox} alt="brand" width={70} />
          </div>
        </div>
      </div>
    </section>
  );
}
