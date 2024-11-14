import Link from 'next/link';
import React from 'react'
import { ImCross } from 'react-icons/im';

interface Props{
    showNav : boolean;
    closeNav : () => void
  }
 {/** For Mobile Screen */}
 const MobileNav = ({showNav , closeNav}:Props) => {
    const styleNav = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
    return (
      <div className={`fixed ${styleNav} right-0 transition-all duration-500 left-0 top-0 bottom-0 h-[100vh] bg-[#d2c3be] z-[1002]`}>
       {/**Importing icon through react icons */}
       <ImCross onClick={closeNav} className='absolute top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-[#fdf0ea]'/>
       {/** For mobile screen Nav div */}
      <div className={`bg-[#9cb878] ${styleNav} transition-all duration-500 delay-200 flex flex-col items-center justify-center w-[70%] h-[100%] `}>
   {/** For mobile screen Nav links */}
   <ul className='space-y-7'>
   <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/' >HOME</Link> </li>
    <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/about' >ABOUT</Link> </li>
    <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/services' >SERVICES</Link> </li>
    <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/project' >PROJECTS</Link> </li>
    <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/reviews' >REVIEWS</Link> </li>
    <li className='text-[35px] font-medium hover:text-[#394326] text-[#fdf0ea]'><Link href='/contact-me' >CONTACT</Link> </li>
  
  </ul>
  
      </div>
      </div>
    )
  }
 
  
export default MobileNav;
