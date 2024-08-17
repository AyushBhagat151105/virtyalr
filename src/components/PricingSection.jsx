import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const PricingSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((oprion, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
