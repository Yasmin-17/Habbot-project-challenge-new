import React, { useState } from "react";
import Poster from "../Images/poster.png";
import checkedtick from "../Images/checkmarks.svg";
import { buyer, supplier } from "../utilits/constants";
import YoutubeLogo from "../Images/Youtube.svg";

const DescriptionPoints = () => {
  const [showSupplier, setShowSupplier] = useState(false);

  const handleSupplier = (isSupplier) => {
    setShowSupplier(isSupplier);
  };

  return (
    <div className="relative flex bg-darkbluebackgroundColor p-4 md:p-20">
      {/* Poster Image */}
      <div className="relative w-full md:w-1/2 h-auto mb-4 md:mb-0">
        <img src={Poster} alt="Poster" className="object-cover w-full" />
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={YoutubeLogo}
            alt="Youtube-logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* Buyer and Supplier Layout */}
      <div className="flex flex-col text-white w-full md:w-1/2 m-6">
        {/* Buttons for Buyer and Supplier */}
        <div className="flex justify-between mb-4">
          <button
            className={`text-lg md:text-3xl cursor-pointer ${
              !showSupplier
                ? "text-orange-400 border-b-2 border-b-orangeborderColor"
                : "text-white"
            }`}
            onClick={() => handleSupplier(false)}
          >
            Buyer
          </button>
          <button
            className={`text-lg md:text-3xl cursor-pointer ${
              showSupplier
                ? "text-orange-400 border-b-2 border-b-orangeborderColor"
                : "text-white"
            }`}
            onClick={() => handleSupplier(true)}
          >
            Supplier
          </button>
        </div>

        {/* Points Section */}
        <div
          className="p-2 md:p-4 rounded-lg"
          style={{ minHeight: "200px", overflowY: "auto" }}
        >
          {showSupplier
            ? supplier.map((point, index) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <img
                    src={checkedtick}
                    alt="checkmark"
                    className="inline-block w-4 h-4 md:w-5 md:h-5"
                  />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              ))
            : buyer.map((point, index) => (
                <div key={index} className="flex items-center gap-2 mt-2">
                  <img
                    src={checkedtick}
                    alt="checkmark"
                    className="inline-block w-4 h-4 md:w-5 md:h-5"
                  />
                  <span className="text-sm md:text-base">{point}</span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPoints;
