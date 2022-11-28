import React from "react";
import {
  ImageSimulcats,
  SimulcastsCloud,
  SimulcastsPC,
  SimulcatsPoster,
} from "../../assets";

export default function HomeSimulcasts() {
  return (
    <section
      id="devices"
      className="2xl:max-w-7xl xl:max-w-5xl mx-auto px-4 mt-48"
    >
      <h2 class="text-5xl font-semibold text-center font-poppins text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 mb-10">
        Watch on all your devices
      </h2>

      <div className="bg-gradient-to-b from-green-600  to-blue-500 rounded">
        <div className="bg-black mr-1 p-5 md:pr-20 text-right">
          <p className="text-white text-xl md:text-2xl font-light mb-10 max-w-lg ml-auto">
            Watch new episodes as they air in japan and{" "}
            <span className="font-normal">
              stream movies playing in theaters
            </span>
          </p>

          <div className="mt-20">
            {/* <img src={SimulcatsPoster} alt={"Simulcats"} className={"w-2/12"} />
            <img src={SimulcastsCloud} alt={"Simulcats"} className={"w-1/12"} />
        <img src={SimulcastsPC} alt={"Simulcats"} className={"w-2/12"} /> */}

            <img src={ImageSimulcats} alt={"Simulcats"} className={"w-full"} />
          </div>
        </div>
      </div>
    </section>
  );
}
