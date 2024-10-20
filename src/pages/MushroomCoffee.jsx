import React from 'react'
import PurchaseNav from '../components/PurchaseNav'
import { FaCoffee } from 'react-icons/fa'

const MushroomCoffee = () => {
  return (
    <main className="mt-32 min-h-max md:px-10 w-full  mb-5">
    <h1 className="flex items-center gap-2 justify-start p-2 font-bold text-5xl mb-10 font-hussar h-auto">
      {" "}
      <FaCoffee /> Mushroom Coffee
    </h1>
    <div className="flex items-start w-full">
      <PurchaseNav />
    </div>

    <iframe
      src="https://atheeb.schedrix.com/Vitamin Coffee?category_iframe=true"
      width="100%"
      height="1250px"
    ></iframe>
  </main>
  )
}

export default MushroomCoffee