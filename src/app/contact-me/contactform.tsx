"use client";
import React from "react";
import { FaMessage } from "react-icons/fa6";


const ContactForm = () => {
    return (
      <div className="rounded-lg p-4 sm:p-10">
        <h1 className="text-bg text-2xl sm:text-3xl lg:text-[2.5rem] font-bold">
          Let's Work Together!
        </h1>
  
        <p className=" text-gray-200 opacity-70 mt-3 lg:text-base text-xs md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
          dolorem debitis amet quaerat exercitationem?
        </p>
        {/**Input Field */}
        <form className="mt-8 block w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              className="flex-1 bg-[#d2c3be] text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full "
              type="text"
              placeholder="First Name"
              name=""
              id=""
            />
  
            <input
              className="flex-1 bg-[#d2c3be] text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full "
              type="text"
              placeholder="Last Name"
              name=""
              id=""
            />
          </div>
          <div className="flex flex-col mt-5 md:flex-row items-center justify-between gap-4">
            <input
              className="flex-1 bg-[#d2c3be] text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full "
              type="email"
              placeholder="Email Address"
              name=""
              id=""
            />
  
            <input
              className="flex-1 bg-[#d2c3be] text-black placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full "
              type="text"
              placeholder="Contact Number"
              name=""
              id=""
            />
          </div>
          <div>
            <select className="w-[50%] mt-5 bg-[#d2c3be] text-black placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[3.5px] border-gray-200 border-opacity-15 outline-none">
              <option value="disabled selected">Select an option</option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="fullstack">Full Stack Development</option>
            </select>
          </div>
          <textarea
            className="w-[50%] mt-5 bg-[#d2c3be] text-black placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[3.5px] border-gray-200 border-opacity-15 outline-none"
            rows={7}
            placeholder="Message"
          >
           
          </textarea>
          <div className="mt-4">
  
          <button className="md:px-8 md:py-2.5 px-6 py-2.5 text-[#fdf0ea] font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-3 bg-[#9cb878] hover:bg-[#d2c3be]"> Send Message
  
          <FaMessage className="float-left m-1 w-[25px]"/>
          </button>
          </div>
        </form>
      </div>
       
    );
  };
  
  export default ContactForm;