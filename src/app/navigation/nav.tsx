"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
 
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { ImProfile } from 'react-icons/im';
 

interface Props{
    openNav : ()=> void
  }
  const Nav = ({openNav}:Props) => {
    const [navBg , setNavBg] = useState(false)
     useEffect(()=>{
const Handler = () => {
if(window.scrollY >= 90){
  setNavBg(true)
} if(window.scrollY < 80){
  setNavBg(false)
}
} 
window.addEventListener("scroll",Handler)
return ()=>{
  window.removeEventListener("scroll",Handler)
};
})
    return (
      <div className={`fixed ${navBg ? "bg-[#394326]" : "fixed"} h-[12vh] text-[#fdf0ea] bg-[#394326] z-[10] w-full`} >
          <div className='sm:w-[99%] w-[95%] mx-auto flex h-[100%] items-center justify-between'>
  {/**For Logo*/}
  <div className='flex items-center space-x-1 sm:mx-4 mx-0'>
  <ImProfile className='w-[1.4rem] h-[1.4rem] sm:w-[1.6rem] sm:h-[1.6rem] text-[#5e6a4f ]  ' />
    
<h1 className='text-[17px] sm:w-[30px] font-semibold text-pretty'>
      MyPersonalPortfolio
</h1>
</div>
  {/**For Nav links */}
  <ul className='hidden lg:flex items-center space-x-9'>
  <li className='text-[17px] font-medium hover:text-[#d2c3be]  '><Link href='#home' >Home</Link> </li>
  <li className='text-[17px] font-medium hover:text-[#d2c3be]  '><Link href= '#about' >About</Link> </li>
    <li className='text-[17px] font-medium hover:text-[#d2c3be]  '><Link href='#services' >Services</Link> </li>
    <li className='text-[17px] font-medium hover:text-[#d2c3be]  '><Link href='#projects' >Projects</Link> </li>
    <li className='text-[17px] font-medium hover:text-[#d2c3be]  '><Link href='#reviews' >Reviews</Link> </li>
 
    <li className='text-[17px] font-medium hover:text-[#d2c3be] ' ><Link href='#contact'>Contact</Link> </li>
   
  </ul>
  {/**For Nav Buttons */}
  <div className='flex items-center sm:mx-8 mx-0 '>
    <button className='px-5 py-3 sm:px-8 sm:py-3 text-[14px] sm:text-[16px] bg-[#9cb878] transition-all duration-200 hover:bg-[#d2c3be] flex  items-center space-x-2 text-[#fdf0ea] rounded-md'>
     
        
         
      
      <span className='font-bold'>HIRE ME</span>
    </button>
     
     {/**Importing icon Hamburger */}
    <HiBars3BottomLeft onClick={openNav} className='lg:hidden  w-[2rem] h-[2rem] text-white'/>
  
  </div>
   
          </div>
         
      </div>
    )
  }
  
  export default Nav
  