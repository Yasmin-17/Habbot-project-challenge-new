import React from 'react'
import BG_IMG from "../Images/Background-image.png";
import Suitcase from '../Images/suitcase 1.svg'
import Location from '../Images/placeholder 1.svg'

const Supplier = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-transparent m-0 p-0">
      <img
        src={BG_IMG}
        alt="image-bg"
        className="absolute inset-0 w-full h-screen object-cover"
      />
      <div className="relative z-10 flex flex-col items-center text-center bg-transparent w-full px-6">
        <h1 className="text-white text-3xl md:text-5xl md:text-headingtextSize font-bold">
          Are You a Supplier?
        </h1>
        <span className="text-white text-lg md:text-2xl md:text-headingtextSize font-normal mt-2">
          Explore Matching Opportunities.
        </span>
        <div className="flex flex-col md:flex-row gap-4 mt-6 items-center w-full max-w-4xl">
          <div className="relative w-full">
            <img
              src={Suitcase}
              alt="Suitcase"
              className="absolute top-1/2 transform -translate-y-1/2 left-3 md:left-5 w-5 h-5 "
            />
            <input
              type="text"
              placeholder="Search your required service here"
              className="border-2 m-2 h-[56px] w-[400px] pl-10 outline-none"
            />
          </div>
          <div className="relative flex-1 max-w-xs md:max-w-md">
            <img
              src={Location}
              alt="location"
              className="absolute top-1/2 left-3 md:left-5 transform -translate-y-1/2 w-5 h-5 outline-none"
            />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="h-[56px] w-[400px] pl-10 outline-none"
            />
          </div>
          <button className="bg-loginColor text-white font-bold rounded-[5px] px-4 py-2 w-full md:w-auto">Search</button>
          
        </div>
        <div className='text-white mt-10 text-sm md:text-base'>
            <span className='font-bold'>Are you a buyer?</span>
            <span className='underline font-normal cursor-pointer'>Click here if you are looking to post a requirements</span>
          </div>
      </div>
    </div>
  );
};

export default Supplier;