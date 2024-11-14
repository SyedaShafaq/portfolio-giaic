import React from 'react'

import { FaDownload } from 'react-icons/fa6';
import Image from 'next/image';
import { BaseInfo } from '../../../Data/data';
 




const HeroSection = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#394326] overflow-hidden relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
      {/**For text Shafaq */}
      <div>
        <h1 className=' mb-4 text-2xl md:text-3xl lg:text-4xl text-[#fdf0ea]'>I am {BaseInfo.name}</h1>
      {/**For tittle */}
      <h1 className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-[#fdf0ea] '>{BaseInfo.position}</h1>
      {/**For Description */}
      <p className='mt-4 text-sm md:text-base text-[#fdf0ea] opacity-60'>{BaseInfo.description}</p>
      {/**For Button */}
      <button className='md:px-8 md:py-2.5 px-6 py-1.5 text-[#fdf0ea] font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-4 bg-[#9cb878] hover:bg-[#d2c3be] flex items-center space-x-2'>
        <span>DOWNLOAD</span>
        <FaDownload/>
      </button>
      
      </div>
      
      {/**For hero image */}
      <div className='mx-auto hidden lg:block rounded-[3rem] overflow-x-hidden  '>
          <Image  
           src='/images/hero.png'
           alt='A girl image'
           width={500}
           height={500}/>  
            </div>

      </div>

      </div>
    </div>
  )
}

export default HeroSection
