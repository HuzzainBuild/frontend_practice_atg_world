import React, { useState } from "react";
import { Logo, downArrow, profileImg } from "../images";

const Navbar = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return (
    <nav className="w-full bg-white py-4 flex items-center justify-center fixed top-0 left-0">
      <div className="max-w-[1124px] w-full flex justify-between items-center px-5 z-50">
        <img src={Logo} alt="logo" className="" />

        <div className="max-w-[360px] w-full bg-[#f2f2f2] rounded-full md:flex gap-2 items-center px-4 hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <div className="w-full text-[#5C5C5C]">
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className="w-full bg-transparent py-2  outline-none border-none  placeholder:text-[#5C5C5C] placeholder:font-medium font-medium text-[#5c5c5c]"
            />
          </div>
        </div>
        {!isLoggedin ? (
          <div>
            <button className="flex font-medium text-[#5C5C5C] gap-3">
              <span className="flex gap-2">
                Create account. <span className="text-[#427efd] hidden md:flex">It’s free!</span>
              </span>
              <img src={downArrow} alt="arrow" />
            </button>
          </div>
        ) : (
          <div className="flex gap-4 items-center text-[#5C5C5C] cursor-pointer">
            <img src={profileImg} alt="profile_image" className="w-[36px] h-[36px] rounded-full" />
            <h1 className="font-medium hidden md:block">Siddharth Goyal</h1>
            <img src={downArrow} alt="arrow" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
