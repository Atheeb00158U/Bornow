import React, { useEffect } from "react";
import PurchaseNav from "../components/PurchaseNav";
import { FaCartShopping } from "react-icons/fa6";
import { FaCoffee } from "react-icons/fa";

const Shop = () => {

    useEffect(() => {
        const handleMessage = (event) => {
          const allowedOrigin = 'https://atheeb.schedrix.com';
          if (event.origin !== allowedOrigin) {
            console.warn('Received message from unauthorized origin:', event.origin);
            return;
          }
      
          const messageData = event.data;
      
          if (
            messageData.type === 'OPEN_ORDER_SUMMARY' ||
            messageData.type === 'OPEN_BOOK_APPOINTMENT'
          ) {
            const url = messageData.url;
            window.open(url, '_blank');
          }
        };
      
        window.addEventListener('message', handleMessage);
      
        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);
  return (
    <main className="mt-32 min-h-max md:px-10 w-full  mb-5">
      <h1 className="flex items-center gap-2 justify-start p-2 font-bold text-5xl mb-10 font-hussar h-auto">
        {" "}
        <FaCoffee /> Shop
      </h1>
      <div className="flex items-start w-full">
        <PurchaseNav />
      </div>

      <iframe src="https://atheeb.schedrix.com/Vitamin Coffee?category_iframe=true" width="100%" height="1250px"></iframe>
    </main>
  );
};

export default Shop;
