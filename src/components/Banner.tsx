import * as React from 'react';
import banner from '../assets/img/banner1.jpg';

export function Banner() {
  const year: number = new Date().getFullYear();
  return (
    <section className='bg-[#f4f5f9] lg:h-[500px] md:h-[350px] sm:h-[200px] overflow-hidden'>
      <div className='container mx-auto flex  justify-between relative'>
        <div className='absolute'>
          <img src={banner} alt='banner' className='object-contain ' />
        </div>
        <div className='mx-10 w-[50%]  mt-[100px] absolute'>
          <p className='text-gray-500 italic'>NEW INSPIRATION IN {year}</p>
          <h2 className='md:text-[1rem] md:leading-[1rem] lg:text-[2.5rem] lg:leading-[2rem] font-[500]  my-5 '>
            20% SALE OFF ON NEW SEASON
          </h2>
          <button className='p-2 bg-red-500 text-white w-fit hover:opacity-60'>
            Browser Collection
          </button>
        </div>
      </div>
    </section>
  );
}
