import logo from "../Images/image 1.png";
import dropdown from "../Images/dropdown.png";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [ismenuopen, setIsmenuopen] = useState(false);
  const toggleMenu = () => {
    setIsmenuopen(!ismenuopen);
  };
  return (
    <div className="flex justify-between items-center m-2">
      <img src={logo} alt="company-logo" className="w-[120px] h-auto" />
      <nav className="hidden md:flex justify-between items-center space-x-8">
        <p className="text-textColor text-firsttextSize">Find Suppliers</p>
        <p className="text-textColor text-secondtextSize">Find Service Tags</p>
        <img src={dropdown} alt="Dropdown" />
        <button className="text-loginColor text-logintextSize border-[1px] rounded-[5px] border-loginColor font-bold py-[17px] px-5">
          Login/Sign Up
        </button>
      </nav>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-textColor text-3xl focus:outline-none"
        >
          {ismenuopen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      {ismenuopen && (
        <div className="absolute top-[70px] right-0 w-3/4 bg-white shadow-lg rounded-md p-4 z-50 md:hidden">
          {" "}
          <nav className="flex flex-col space-y-4">
            <p className="text-textColor text-firsttextSize">Find Suppliers</p>
            <p className="text-textColor text-secondtextSize">
              Find Service Tags
            </p>
            <img
              src={dropdown}
              alt="Dropdown"
              className="self-center w-5 h-5"
            />
            <button className="text-loginColor text-logintextSize border-[1px] rounded-[5px] border-loginColor font-bold py-[10px] px-5">
              Login/Sign Up
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
