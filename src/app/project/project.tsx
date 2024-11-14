import React from 'react'
import { projectData } from '../../../Data/data';
import Link from 'next/link';
import Image from 'next/image';


const Project = () => {
  return (
    <div className='pt-16 pb-16 bg-[#394326]'>
          <h1 className="bg-[#9cb878]  w-fit text-center px-4 py-3 mx-auto text-[#fdf0ea] text-2xl sm:text-3xl md:4xl uppercase rounded-md">
       MY PROJECTS
      </h1>
      <div className='w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center'>
{projectData.map((project)=>{
return <div className='bg-black p-6 rounded-lg hover:scale-105 transition-all duration-300' key={project.id}>
<Link href={project.url} target='_blank'>
<Image className='w-full' src={project.image} alt='' width={300} height={200}/>
</Link>
</div>
})}
      </div>
      
    </div>
  )
}

export default Project
