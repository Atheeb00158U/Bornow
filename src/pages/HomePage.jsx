import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { ProductSwiperContent } from "../constants/ProductSwiper";
import { videoContent } from "../constants/VideoSwiper";
import { InfoSwiperContent } from "../constants/InfoSwiperContent";
import InfoSwiper from "../components/InfoSwiper";
import ProductSliderCard from "../components/ProductSliderCard";
import { Link } from "react-router-dom";
import ReceipeSwiper from "../components/ReceipeSwiper";

const HomePage = () => {
  const swiperRef = useRef(null);
  const swiperVideoRef = useRef(null);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpenNav(false);
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      const allowedOrigin = "https://atheeb.schedrix.com";
      if (event.origin !== allowedOrigin) {
        console.warn(
          "Received message from unauthorized origin:",
          event.origin
        );
        return;
      }

      const messageData = event.data;

      if (messageData.type === "OPEN_ORDER_SUMMARY") {
        const cartId = messageData.cartId;
        const url = messageData.url;
        window.open(url, "_blank");
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.swiper.slideNext();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperVideoRef.current && swiperVideoRef.current.swiper) {
        swiperVideoRef.current.swiper.slideNext();
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-black text-white flex flex-col  ">
      {/*SECTION 1 */}
      <section className="relative flex-grow">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Section */}
        <section className="relative flex flex-col items-center justify-center w-full h-[100vh] bg-black bg-opacity-70 z-10 gap-4">
          <img
            src={"/logo.png"}
            alt="Logo"
            className="w-[50px] md:w-[400px] h-auto"
          />
          <h1 className="font-hussar md:text-xl">For a functional Start</h1>

          <div className="flex gap-4 items-center justify-center text-xl">
            {/* Explore Button */}
            <button
              onClick={() => {
                scrollToSection("explore");
              }}
              className="rounded-md border border-white px-4 py-2 transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 active:scale-95"
            >
              Explore
            </button>
            {/* Shop Now Button */}
            <button className="rounded-md border bg-bornow-green border-transparent text-white px-4 py-2 transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 active:scale-95">
              <Link to="/shop">Shop Now</Link>{" "}
            </button>
          </div>
        </section>
      </section>

      {/*SECTION 2 */}

      <section
        id="explore"
        className="min-h-[30vh] relative bg-black flex flex-col items-center justify-center text-white p-6 overflow-hidden"
      >
        <div className="text-center flex flex-col gap-2 items-center justify-center h-full p-10">
          <h2 className="text-lg md:text-lg font-hussar font-bold">
            PRESENTING TO YOU - THE BEST EVER
          </h2>
          <h1 className="text-3xl md:text-8xl font-zuumerough z-10">
            FUNCTIONAL COFFEE
          </h1>
          <button className="mt-4 rounded-full border bg-bornow-green px-6 py-2 transition duration-300 ease-in-out transform hover:bg-green-500 hover:scale-105 active:scale-95">
            TRY NOW
          </button>
        </div>

        <img
          src={"/originalCoffee100.png"}
          alt="Coffee Tin"
          className="transform rotate-12 absolute right-10 top-[-10px] z-0"
        />
      </section>

      {/*SECTION 3 */}
      <section className="bg-white p-6 ">
        <h2 className="text-center text-3xl font-bold mb-4 text-black font-hussar mt-5">
          Shop All Our Ranges
        </h2>

        <Swiper
          ref={swiperRef}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
        >
          {ProductSwiperContent.map((product, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center cursor-grab active:cursor-grabbing"
            >
              <ProductSliderCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/*SECTION 4 */}
      <section className="bg-black flex flex-col items-center justify-center relative overflow-hidden h-[185vh]">
        {/* Title Section */}
        <aside className="flex flex-col items-center justify-start mt-10 h-full w-full py-20 mb-52">
          <h2 className="text-center text-lg font-bold mb-4  font-hussar">
            WHAT'S SO SPECIAL ABOUT OUR VITAMIN COFFEE
          </h2>
          <h1 className="text-9xl font-zuumerough ">VITAMIN COFFEE</h1>
        </aside>
        <article className="relative flex items-center justify-center w-screen">
          {/* Label Image */}
          <img
            src="/can-wrap.png"
            alt="Vitamin Coffee Label"
            className="absolute w-screen h-auto  z-20"
          />
        </article>

        <aside className="flex flex-col items-center justify-end bg-bornow-green h-full w-full py-12 pb-44 noise mt-72">
          <h1 className="text-8xl font-zuumerough ">
            IT’S WHAT WE FOCUS ON THE INSIDE
          </h1>
          {/* Call to Action */}
          <button className="mt-4 rounded-full border bg-white text-black px-6 py-2 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
            TRY NOW
          </button>
        </aside>
      </section>

      {/*SECTION 5 */}
      <section className="bg-white p-6">
        <h2 className="text-center text-3xl font-bold mb-4 text-black mt-10 font-hussar ">
          Trusted reviews & verified purchases
        </h2>
        <Swiper
          ref={swiperVideoRef}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {videoContent.map((video, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col gap-3 items-center cursor-grab active:cursor-grabbing"
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                className="w-full h-[500px] rounded-md object-cover border"
                style={{ aspectRatio: "9/16" }}
                poster="/path/to/placeholder-image.jpg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <h3 className="text-xl font-bold mt-2">{video.title}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/*SECTION 6 */}
      <section className=" relative bg-black p-6 flex mb-10  gap-4 flex-col items-center text-white">
        <div className="flex items-center justify-center mt-10">
          {/* Main Coffee Bean Image */}
          <img
            src="/big-bean.png" // Replace with the actual coffee bean image path
            alt="Coffee Bean"
            className="w-auto h-[300px] md:h-[400px] mb-6"
          />

          <h2 className="text-9xl font-bold font-zuumerough text-center mb-4 absolute top-28">
            EACH BEAN IS CRAFTED
            <br /> 1 OF 1
          </h2>
        </div>

        {/* Features Section */}
        <div className="flex flex-wrap justify-evenly mt-8 w-full gap-4 ">
          {/* Feature 1 */}
          <div className="flex flex-col items-center mx-4">
            <img
              src="/path/to/no-preservative-icon.png" // Replace with the actual icon path
              alt="No Preservative"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-sm">No Sugar or Additives</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center mx-4">
            <img
              src="/path/to/gourmet-icon.png" // Replace with the actual icon path
              alt="Gourmet Arabica Beans"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-sm">Gourmet Arabica Beans</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center mx-4">
            <img
              src="/path/to/vitamins-icon.png" // Replace with the actual icon path
              alt="14 Vitamins"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-sm">14 Vitamins</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center mx-4">
            <img
              src="/path/to/micro-batch-icon.png" // Replace with the actual icon path
              alt="Micro-Batch Technology"
              className="w-16 h-16 mb-2"
            />
            <p className="text-center text-sm">Micro-Batch Technology</p>
          </div>
        </div>
      </section>

      {/*SECTION 7 */}
      <section className="flex flex-col items-center justify-end bg-bornow-green min-h-[400px] w-full py-20 pb-20 noise ">
      <ReceipeSwiper />
      </section>

      {/*SECTION 7 */}

      <section className="bg-white w-full h-auto ">
        <InfoSwiper />
      </section>

      {/* SECTION 8 */}
      <section className="bg-white w-full h-[500px] flex gap-4 p-6">
        {/* Left Image */}
        <div className="w-1/3">
          <img
            src="/community2.jpg"
            alt="Motocross"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center - CTA Section */}
        <div
          className="w-1/3 relative flex flex-col justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url("community3.jpg")`,
          }}
        >
          <div className="absolute flex flex-col items-center justify-center">
            <h2 className="text-white text-6xl font-bold mb-6 min-w-max shadow-3xl ">
              JOIN OUR TRIBE
            </h2>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/3">
          <img
            src="/community1.png"
            alt="Friends"
            className="w-full h-full object-cover "
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
