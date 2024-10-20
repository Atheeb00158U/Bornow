import React from "react";
import { FaCoffee } from "react-icons/fa";
import AboutCoffeeCard from "../components/AboutCoffeeCard";
import { coffeeProducts } from "../constants/CoffeeInfo";

const Coffee = () => {
  return (
    <main className=" bg-white  md:px-10 w-full">
      <section className="mt-36 mb-10 h-auto flex flex-col items-center justify-start gap-10">
        {coffeeProducts.map((coffee) => (
          <AboutCoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </section>
    </main>
  );
};

export default Coffee;
