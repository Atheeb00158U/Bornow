import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const PurchaseNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getPageFromPath = (path) => {
    if (path === "/purchases") return "Purchases";
    if (path === "/purchase-history") return "Purchase History";
    return "";
  };




  return (
    <section className="flex justify-between w-full">
      <aside className="flex items-center font-lato font-semibold justify-start w-full">
        {/* NavButton for "Today" */}
        <NavButton
          text="All items"
          active={location.pathname === "/shop"}
          onClick={() => navigate("/shop")}
        />

        <NavButton
          text="Vitamin Coffee"
          active={location.pathname === "/shop/vitamin-coffee"}
          onClick={() => navigate("/shop/vitamin-coffee")}
        />

        <NavButton
          text="Mushroom Coffee"
          active={location.pathname === "/shop/mushroom-coffee"}
          onClick={() => navigate("/shop/mushroom-coffee")}
        />

        <NavButton
          text="Gift Hampers"
          active={location.pathname === "/shop/gift-hampers"}
          onClick={() => navigate("/shop/gift-hampers")}
        />

        <NavButton
          text="Merchandise"
          active={location.pathname === "/shop/merchandise"}
          onClick={() => navigate("/shop/merchandise")}
        />
      </aside>


    </section>
  );
};

function NavButton({ text, active, alert, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
      md:px-8 px-3 z-20 py-3 transition-all duration-300
        ${
          active
            ? "text-rezerv-bg border-b-[2px] border-b-rezerv-dark"
            : "text-[black]"
        }
      `}
    >
      <span className="overflow-hidden transition-all w-52 ml-3">{text}</span>
      {alert && (
        <div className="absolute right-2 w-2 h-2 rounded bg-rezerv-light" />
      )}
    </button>
  );
}

export default PurchaseNav;
