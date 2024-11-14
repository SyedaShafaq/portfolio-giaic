import React from 'react'
 
 
import { ImProfile } from 'react-icons/im'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-[#d3c2be]'>
  {/**For Logo*/}
  <div className='flex items-center justify-center space-x-2'>
  <ImProfile className='w-[1.4rem] h-[1.4rem] sm:w-[1.6rem] sm:h-[1.6rem] text-[#5e6a4f ] mb-8 ' />
    
<h1 className='text-[17px] sm:w-[30px] font-semibold text-pretty mb-8'>
      MyPersonalPortfolio
</h1>
</div>
<div className='flex items-center flex-wrap justify-center space-x-10 space-y-0 font-bold text-black'>
<div>HOME</div>
<div>SERVICES</div>
<div>PROJECTS</div>
<div>REVIEWS</div>
<div>CONTACT</div>

</div>

<div className='flex items-center justify-center text-gray-500 text-opacity-70 mt-2'>
  <span> © 2024 MyPersonalPortfolio|All rights reserved.</span> 
 </div>
      
    </div>
  )
}

export default Footer;
