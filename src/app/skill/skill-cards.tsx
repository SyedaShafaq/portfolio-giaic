import Image from 'next/image';
import React from 'react'
type Props ={
    skills: {
        id: number;
        title: string;
        image: string;
        percent: string;
    }
}

const SkillCards = ({skills}:Props) => {
    const{title,image,percent}=skills
  return (
    <div className='p-6 hover:bg-[#9cb878] hover:text-[#fdf0ea] duration-300 transition-all cursor-pointer text-center rounded-lg bg-[#fdf0ea] text-black'>
       <Image
       src={image}
       alt={title}
       width={80}
       height={80}
       className='mx-auto object-cover'
       />
       <h1 className='text-[18px] mt-4 font-[600]'>{title}</h1>
       <div className='bg-black mt-4 rounded-lg p-2 text-[#fdf0ea] hover:text-[#fdf0ea] opacity-20  '>{percent}</div>

    </div>
  )
}

export default SkillCards
