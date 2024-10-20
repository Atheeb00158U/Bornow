import React from "react";
import Logo from "/logo.png";
import { AiOutlineBars } from "react-icons/ai";

const MobileNavbar = ({ openNav, setOpenNav }) => {
  return (
    <nav className="flex items-center justify-between p-4 md:hidden fixed w-full backdrop-blur-2xl z-50">
      <div className="h-[50px] w-[150px]">
        <img src={Logo} alt="bornow" />
      </div>
      <div>
        <button
          className="text-4xl text-[white]"
          onClick={() => setOpenNav(!openNav)}
        >
          <AiOutlineBars />
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
