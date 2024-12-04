import React from "react";
import { process } from "../utilits/constants";

const Howitworks = () => {
  return (
    <div className="mx-6 md:mx-20 lg:mx-40 my-16 md:my-28">
      <h1 className="text-lg md:text-descriptionheadingtextSize font-bold md:leading-[48px] leading-[28px] text-center">
        How it works?
      </h1>
      <p className="text-sm md:text-descriptiondetailedtextSize font-normal text-center w-full md:w-3/4 mx-auto my-5">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>
      <div className="grid gris-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mt-[50px]">
        {process.map((step, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <div className="bg-skybluebackgroundColor p-4 flex flex-col items-center justify-center h-[254px] shadow-lg">
                <img src={step.image} alt="image-new" className="w-20 h-20 object-contain"/>
                <p className="text-center mt-6">{step.content}</p>
              </div>
            ) : (
              <div className="bg-white p-4 flex flex-col items-center justify-center h-[254px] shadow-lg">
                <img src={step.image} alt="image-new" className="w-16 h-16 md:w-20 md:h-20 object-contain"/>
                <p className="text-center text-sm md:text-base mt-4 md:mt-6">{step.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
