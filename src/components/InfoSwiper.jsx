import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { InfoSwiperContent } from '../constants/InfoSwiperContent';

const InfoSwiper = () => {
  const swiperInfoRef = useRef(null);

  return (
    <div className="relative w-full h-full">
      <Swiper
        ref={swiperInfoRef}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 1, 
          },
        }}
      >
        {InfoSwiperContent.map((info, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center cursor-grab active:cursor-grabbing  w-full  "
          >
            <div
              className={`flex flex-col items-center justify-center w-full  rounded-sm bg-cover bg-center  h-[700px] `}
              style={{ backgroundImage: `url(${info.bgImg})` }}
            >
              <div className="relative z-10 flex flex-col w-full h-full justify-end items-end text-right text-white md:mr-40 md:mb-20 mt-20 px-8 py-4">
                <h3 className="text-4xl md:text-9xl font-bold font-zuumerough shadow-md">
                  {info.title}
                </h3>
                <h4 className="text-2xl md:text-7xl my-4 font-hussar shadow-md">
                  {info.subTitle}
                </h4>
                <p className="text-lg max-w-8xl font-hussar w-7/12 shadow-md">{info.body}</p>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
};

export default InfoSwiper;
