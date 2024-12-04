import location_array from "../utilits/constants";
import Arrow from "../Images/Group.svg";
import { useState } from "react";

const Description = () => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const hoverbackground = (index) => {
    setSelectedLocation(index)
  }

  const handleMouseLeave = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-[400px] gap-4 md:gap-[20%] md:m-16 m-4">
      <div className="w-full md:w-[620px] text-center md:text-left">
        <h1 className="text-lg md:text-descriptionheadingtextSize font-bold my-5">
          Ready to dive into HABOT?
        </h1>
        <p className="text-sm md:text-descriptiondetailedtextSize font-light">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="bg-loginColor font-bold text-sm md:text-[18px] text-white rounded-[5px] w-full md:w-[317px] h-[54px] flex items-center justify-center gap-2 my-5">
          Sign up Today !
          <img src={Arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4" onMouseLeave={handleMouseLeave}>
        {location_array.map((location, index) => (
          <div key={index + 1} className="w-full md:w-[45%] mb-2 md:mb-4">
            <button
              className={`border-[1px] border-orange-500 rounded-[5px] md:w-[260px] h-[65px] text-sm w-full md:text-firsttextSize font-medium ${
                selectedLocation === index
                  ? "bg-orangebackgroundColor text-white"
                  : ""
              }`}
              onMouseOver={() => hoverbackground(index)}
            >
              <div className="flex justify-between p-2 md:p-4">
                <h1>{location}</h1>
                <img src={Arrow} alt="arrow" className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;
