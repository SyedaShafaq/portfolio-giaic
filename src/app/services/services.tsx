import React from 'react'
 
import { requestToBodyStream } from 'next/dist/server/body-streams'
import Card from './card';
import { servicesData } from '../../../Data/data';


const Services = () => {
  return (
    <div id='services' className="pt-16 pb-16 bg-[#394326]">
      <h1 className="bg-[#9cb878] w-fit text-center px-4 py-3 mx-auto text-[#fdf0ea] text-2xl sm:text-3xl md:4xl uppercase rounded-md">
        SERVICES
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10 w-[80%] mx-auto items-center mt-20'>
{servicesData.map((services)=>{
    return <div key={services.id}>
         {/* Render each service as a Card */}
        
        <Card service={services} />
    </div>
})}
      </div>
      </div>
  )
}

export default Services
