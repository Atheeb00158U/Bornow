import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReceipeSwiper = () => {

    const swiperVideoRef = useRef(null)
  const slides = [
    {
      videoUrl: '/path/to/video1.mp4',
      title: 'Video Title 1',
      subtitle: 'Subtitle 1',
      body: 'This is the body text for video 1.',
      reviews: '★★★★☆ 4.5/5',
    },
    {
      videoUrl: '/path/to/video2.mp4',
      title: 'Video Title 2',
      subtitle: 'Subtitle 2',
      body: 'This is the body text for video 2.',
      reviews: '★★★★☆ 4.2/5',
    },
    {
        videoUrl: '/path/to/video1.mp4',
        title: 'Video Title 1',
        subtitle: 'Subtitle 1',
        body: 'This is the body text for video 1.',
        reviews: '★★★★☆ 4.5/5',
      },
      {
        videoUrl: '/path/to/video2.mp4',
        title: 'Video Title 2',
        subtitle: 'Subtitle 2',
        body: 'This is the body text for video 2.',
        reviews: '★★★★☆ 4.2/5',
      },
    // Add more slides as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperVideoRef.current && swiperVideoRef.current.swiper) {
        swiperVideoRef.current.swiper.slideNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-full w-full p-5">
      <Swiper 
                ref={swiperVideoRef}

        spaceBetween={30} 
        slidesPerView={2} // Display two slides at a time
        pagination={{ clickable: true }}
        loop={true}
        
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='cursor-grab active:cursor-grabbing'>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex min-h-[250px]">
              <div className="flex items-center bg-black justify-center w-1/2 flex-col">
                <video
                  className="w-full h-auto bg-black"
                  controls
                  src={slide.videoUrl}
                  style={{ aspectRatio: '1 / 1' }} // Maintains a square aspect ratio
                />
              
              </div>
              <div className="p-5 flex-grow h-full w-full">
                <h2 className="text-xl font-bold text-black">{slide.title}</h2>
                <h3 className="text-lg text-gray-600">{slide.subtitle}</h3>
                <p className="mt-2 text-black">{slide.body}</p>
                <p className="mt-2 text-yellow-500">{slide.reviews}</p>
                <button className='bg-bornow-green rounded-full text-white px-4 px-2'> Try now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default ReceipeSwiper;
