import React from 'react'
import { useNavigate } from 'react-router-dom';

const AboutCoffeeCard = ({coffee}) => {

    const navigate =  useNavigate()
  return (
    <div className={`w-full max-w-8xl rounded-lg min-h-[300px] flex items-center justify-between ${coffee.backgroundColor1}  neutral-noise`}>
          {/* Left Image Section */}
          <div className={`w-1/2 h-full flex items-center justify-center ${coffee.backgroundColor2} p-8`}>
            <img
              src={coffee.imgSrc}
              className="h-auto max-w-full object-contain rounded-md"
              alt="Vitamin Coffee"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-1/2 h-full flex flex-col justify-center items-start px-12 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 font-hussar">
              {coffee.title}
            </h1>
            <p className="text-xl text-gray-700">
            {coffee.description}

            </p>
            <button 
            onClick={()=>navigate(coffee.navigateLink)}
            className="bg-gray-900 text-white py-3 px-6 rounded-full font-semibold">
              Explore
            </button>
          </div>
        </div>
  )
}


export default AboutCoffeeCard;