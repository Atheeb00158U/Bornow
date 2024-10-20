import React, { useState } from "react";
import { BiCapsule } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";

const ExploreVitaminCoffee = () => {
  const [selectedVariation, setSelectedVariation] = useState("Original Coffee");
  const [selectedQuantity, setSelectedQuantity] = useState("50"); // Track selected quantity

  const variations = {
    "Original Coffee": {
      flavour: "Original",
      price: 499,
      discountPrice: 699,
      images: ["/caramelCoffee100.png", "/caramelCoffee100.png"],
      description:
        "Original Coffee, 360 Blend is your daily classic pure Arabica blend infused with vitamins.",
      quantity: ["50", "100"],
    },
    "Hazelnut Coffee": {
      flavour: "Hazelnut",
      price: 499,
      discountPrice: 699,
      images: ["/hazelnutCoffee100.png", "/hazelnutCoffee100.png"],
      description:
        "Hazelnut Coffee, 360 Blend is your daily classic pure Arabica blend infused with 13 vitamins.",
      quantity: ["50", "100"],
    },
    "Vanilla Coffee": {
      flavour: "Vanilla",
      price: 499,
      discountPrice: 699,
      images: ["/vanillaCoffee100.png", "/vanillaCoffee100.png"], // Corrected the image
      description:
        "Vanilla Coffee, 360 Blend is your daily classic pure Arabica blend infused with 13 vitamins.",
      quantity: ["50", "100"],
    },
    "Caramel Coffee": {
      flavour: "Caramel",
      price: 499,
      discountPrice: 699,
      images: ["/caramelCoffee100.png", "/caramelCoffee100.png"], // Corrected the image
      description:
        "Caramel Coffee, 360 Blend is your daily classic pure Arabica blend infused with 13 vitamins.",
      quantity: ["50", "100"],
    },
  };

  const vitamins = [
    "Vitamin A",
    "Vitamin B Complex",
    "Vitamin C",
    "Biotin",
    "Panax Ginseng",
    "Folic Acid",
    "Vitamin D",
    "Vitamin E",
    "Vitamin K",
  ];

  const currentData = variations[selectedVariation];

  const handleBuyNow = () => {
    // Simulate buy now functionality
    alert(`Buying ${selectedQuantity}g of ${currentData.flavour} Coffee`);
  };

  return (
    <main className="bg-white w-full p-4 md:px-10">
      <section className="mt-24  flex flex-col justify-start items-center gap-10">
        <div className="w-full flex flex-col md:flex-row gap-10 items-start md:items-start">
          {/* Left Side - Image Swiper */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              className="w-full cursor-grab active:cursor-grabbing shadow-md rounded-lg"
            >
              {currentData.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-auto object-contain shadow-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Side - Product Info */}
          <div className="w-full md:w-1/2 flex flex-col space-y-4 justify-start mt-24">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Guilt-Free, Functional Coffee
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              NUTRITION 360 BLEND
            </h2>

            <div className="flex items-center space-x-2">
              <span className="text-gray-600 text-lg">★★★★★</span>
              <span className="text-sm text-gray-600">(12 reviews)</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                INR {currentData.price}
              </span>
              <span className="text-gray-500 line-through text-lg">
                INR {currentData.discountPrice}
              </span>
            </div>

            
            {/* Variation size selector */}
            <div className="flex items-center space-x-4 mt-4">
              {currentData.quantity.map((quantity) => (
                <button
                  key={quantity}
                  onClick={() => setSelectedQuantity(quantity)} // Set selected quantity
                  className={`border px-4 py-1 rounded-full ${
                    selectedQuantity === quantity
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {quantity}g
                </button>
              ))}
            </div>

            <p className="text-gray-700">{currentData.description}</p>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700"
            >
              Buy Now
            </button>
            {/* Variations below swiper */}
            <div className="flex mt-4 space-x-2">
              {Object.keys(variations).map((variationKey, index) => (
                <div className="flex flex-col items-center" key={index}>
                  <div
                    onClick={() => setSelectedVariation(variationKey)}
                    className={`cursor-pointer border-2 p-2 rounded-md text-center ${
                      selectedVariation === variationKey
                        ? "border-gray-900 text-gray-900"
                        : "border-gray-300 text-gray-500"
                    }`}
                  >
                    <img
                      src={variations[variationKey].images[0]}
                      className="w-20 h-20"
                      alt={`${variations[variationKey].flavour}`}
                    />
                  </div>
                  <p>{variations[variationKey].flavour}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col justify-start items-center gap-10 mt-4">
        <aside className="w-full h-[300px] bg-black  flex flex-col items-center justify-center neutral-noise">
          <h1 className="text-8xl font-zuumerough text-white  ">
            The Power of <br /> <span className="font-hussar">14</span> Vitamins
          </h1>
        </aside>
        <aside className="flex flex-wrap justify-center items-center gap-2">
          {vitamins.map((vitamin, index) => (
            <span
              key={index}
              className={`border px-16 py-10 flex gap-2 items-center justify-center text-xl shadow-md hover:shadow-xl min-w-max rounded-lg ${
                index % 2 === 0 ? "bg-bornow-green" : "bg-green-950"
              } text-white`}
            >
              <BiCapsule />
              {vitamin}
            </span>
          ))}
        </aside>
        <aside className="w-full h-[600px] overflow-hidden ">
    <img src="/exploreCoffeeVanilla.png" className="h-full w-full object-cover object-top " />
</aside>

      </section>
    </main>
  );
};

export default ExploreVitaminCoffee;
