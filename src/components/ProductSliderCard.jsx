import React, { useState } from "react";

const ProductSliderCard = ({ product }) => {
  const [is50, setIs50] = useState(true);

  const handleSelectWeight = () => {
    setIs50(!is50);
  };

  return (
    <>
      <div
        className={`flex flex-col p-5 items-center justify-center h-full rounded-sm ${product.bgColor} text-white pt-4`}
      >
        <h3 className="md:text-4xl font-bold mt-2 font-hussar">
          {product.name}
        </h3>

        <div className="flex m-2">
          <button
            className={`text-sm min-w-max px-2 py-1 border rounded-bl-lg rounded-tl-lg ${
              is50 ? "bg-bornow-green" : "bg-black"
            }`}
            onClick={() => handleSelectWeight()}
          >
            50g
          </button>
          <button
            className={`text-sm min-w-max px-2 py-1 border rounded-br-lg rounded-tr-lg ${
              !is50 ? "bg-bornow-green" : "bg-black"
            }`}
            onClick={() => handleSelectWeight()}
          >
            100g
          </button>
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="w-auto h-[400px] object-contain rounded-xl rotate-12"
        />
      </div>

      <button
        className="mt-4 rounded-full border hover:border-white  hover:bg-bornow-green hover:text-white text-black px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
        onClick={() =>
          window.open(
            is50 ? product.button50Url : product.button100Url,
            "_blank"
          )
        }
      >
        Buy Now
      </button>
    </>
  );
};

export default ProductSliderCard;
