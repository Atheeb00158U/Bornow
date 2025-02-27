import React, { useContext, useEffect } from "react";
import Logo from "/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ openNav, setOpenNav }) => {

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
  
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenNav(false);
    } 
    
  };
  return (
    <nav
      className={`flex flex-col items-center border-b border-b-bornow-green justify-center gap-16 fixed md:absolute ${
        openNav ? "top-0" : "top-[-150%]"
      } left-0 h-[100vh] w-full bg-bornow-black text-white font-bold tracking-wide transition-all duration-500 ease-in-out md:flex-row md:justify-between md:p-4 md:h-[unset] md:top-0 md:gap-0 z-50 md:px-10`}
    >
      <div className="md:hidden">
        <button
          className="text-4xl text-[white] absolute top-6 right-4"
          onClick={() => {setOpenNav(!openNav); }}
        >
          <IoCloseSharp />
        </button>
      </div>
      <div className="w-[150px]">
        <Link to={"/"} onClick={() => setOpenNav(!openNav)}>
          <img src={Logo} alt="bornow" className="max-h-full max-w-full " />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <ul className="flex flex-col items-center gap-4 font-inter px-6 py-4 rounded-xl md:flex-row md:gap-10 md:py-3 md:px-8 md:h-[55px]">
          <li className="hover:pb-2 transition-all duration-300 ease-out hover:text-bornow-green">
            <Link to="/" onClick={() => setOpenNav(!openNav)}>
              Home
            </Link>
          </li>
          <li className="hover:pb-2 transition-all duration-300 ease-out hover:text-bornow-green">
            <Link to="/shop" onClick={() => setOpenNav(!openNav)}>
              Shop
            </Link>
          </li>
          <li className="hover:pb-2 transition-all duration-300 ease-out hover:text-bornow-green border-r pr-10" >
            <Link to="/coffee" onClick={() => setOpenNav(!openNav)}>
              Our Coffees
            </Link>
          </li>
   
          <li className="hover:pb-2 transition-all duration-300 ease-out hover:text-bornow-green">
            <Link to="/contact" onClick={() => setOpenNav(!openNav)}>
              Contact Sales
            </Link>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-7 items-center">
          <>
            <div className="bg-bornow-green font-light py-2 px-8 rounded-lg font-inter text-[white] transition-all duration-300 ease-out hover:bg-[#161616] border-bornow-green border-[1px] hover:border-solid hover:border-bornow-green">
              <Link to="/shop" onClick={() => setOpenNav(!openNav)}>
                Shop Now
              </Link>
            </div>
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
