import React from 'react'
import { skillsData } from '../../../Data/data'
import SkillCards from './skill-cards'

const Skill = () => {
  return (
    <div className='pt-16 pb-16 bg-[#394326]'>
       <h1 className="bg-[#9cb878] w-fit text-center px-4 py-3 mx-auto text-[#fdf0ea] text-2xl sm:text-3xl md:4xl uppercase rounded-md">
      MY SKILLS
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 w-[80%] mx-auto mt-20 items-center'>
{skillsData.map((skills)=>{
return <div key={skills.id}>
  <SkillCards skills = {skills}/>
</div>
})}
      </div>
    </div>
  )
}

export default Skill
