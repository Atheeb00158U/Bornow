import React from 'react'
import { FaCoffee } from 'react-icons/fa'
import PurchaseNav from '../components/PurchaseNav'
import { SiShopify } from 'react-icons/si'
import { BiCart } from 'react-icons/bi'

const Merchandise = () => {
  return (
    <main className="mt-32 min-h-max md:px-10 w-full  mb-5">
    <h1 className="flex items-center gap-2 justify-start p-2 font-bold text-5xl mb-10 font-hussar h-auto">
      {" "}
      <BiCart  /> Merchandise
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

export default Merchandise