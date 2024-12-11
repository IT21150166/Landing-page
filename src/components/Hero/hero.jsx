import React from 'react';
import CarPng from "../../assets/car.png";
import BuildingImage from "../../assets/building.png";
import { FaArrowRight} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";

const bgImage = {
  backgroundImage: `url(${BuildingImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const hero = () => {
  return (
    <main style={bgImage}>
      <div className='bg-gradient-to-r from-primary to bg-primaryDark/90 '>
        <div className="container text-white">
          {/* Navbar conponents here */}
            <Navbar/>
          {/* Hero section here */}
          <section className='grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]'>
            {/* text context section */}
            <div className='space-y-8 mt-[130px] md:mt-[20px]' >
             <h1 className='text-5xl lg:text-7xl font-bold leading-tight uppercase'>Honda <br /> <span className='text-transparent text-outline'>Sports EV</span> </h1>
            <button className='outline-btn flex justify-center items-center gap-4 group'>Explore
            <FaArrowRight className='group-hover:translate-x-2 transition'/>
            </button>
            
             {/* feature section here */}
            <div className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]'>
            <h1 className='text-xl uppercase'>Vehicle features</h1>
            <p className='text-xs leading-loose'>The car features rear-hinged suicide doors. Yuki Terai is credited with the exterior design. The interior fits four adults, with the front passengers seated on a single bench seat. The dashboard is decorated in wood trim with a long digital screen as the instrument and infotainment panel</p>
            </div>
            </div>
            {/* image section */}
            <div className='relative'>
              <img src={CarPng} alt="" className='w-full relative z-30' />

              {/* glowing circle */}
             <div className='border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] absolute top-0 left-1/2 glowing-shadow'>

             </div>

              {/* Bg text here */}
              <div className=' absolute -top-40 left-0 z-[1]'>
                <h1 className='text-[180px] font-bold text-cyan-200/10 leading-none '> Sport</h1>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default hero