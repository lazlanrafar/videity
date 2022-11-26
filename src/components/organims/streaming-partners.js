import React from "react";
import {
  PartnerCrunchyroll,
  PartnerFunimation,
  PartnerKyotoAnimation,
  PartnerStudioGhibli,
} from "../../assets";

export default function StreamingPartners() {
  return (
    <div className="py-5 my-5">
      <p className="text-white text-center text-xl mb-14 md:mb-10 font-light">
        Streaming Partners
      </p>

      <div className="flex flex-wrap gap-20 items-center justify-center px-10">
        <img
          src={PartnerStudioGhibli}
          width={170}
          alt="Partner"
          loading="lazy"
        />
        <img
          src={PartnerKyotoAnimation}
          width={170}
          alt="Partner"
          loading="lazy"
        />
        <img
          src={PartnerCrunchyroll}
          width={170}
          alt="Partner"
          loading="lazy"
        />
        <img src={PartnerFunimation} width={170} alt="Partner" loading="lazy" />
      </div>
    </div>
  );
}
