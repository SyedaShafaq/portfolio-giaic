import React from "react";

import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import { aboutInfo } from "../../../Data/data";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#394326]">
      <h1 className="bg-[#9cb878] w-fit text-center px-4 py-3 mx-auto text-[#fdf0ea] text-2xl sm:text-3xl md:4xl uppercase rounded-md">
        ABOUT ME
      </h1>
      <div className="w-[80%] mx-auto gird grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        {/** For text content */}
        <div>
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#fdf0ea]">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-[#fdf0ea] opacity-60">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-6 bg-blue-900 flex flex-col items-center justify-center">
                <FaCheck className="text-[#fdf0ea]" />
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-[#fdf0ea]">
                  Frontend Development
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-6 bg-pink-500 flex flex-col items-center justify-center">
                <FaCheck className="text-[#fdf0ea]" />
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-[#fdf0ea]">
                  Backend Development
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-6 bg-orange-700 flex flex-col items-center justify-center">
                <FaCheck className="text-[#fdf0ea]" />
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-[#fdf0ea]">
                  Full Stack Development{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/** For stats content */}
        <div className="sm:flex sm:flex-row flex flex-col lg:flex lg:flex-row md:flex md:flex-col ">
          <div className="grid grid-cols-1 gap-16 items-center lg:mx-auto">
            {/**Image1 */}
            <div>
              <Image
                src="/images/satisfy-.png"
                alt="satisfy-customer"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-[#fdf0ea] text-center">
                {aboutInfo.client}
              </p>
              <p className="text-base sm:text-lg text-[#fdf0ea] opacity-50 text-center">
                Satisfied Customers
              </p>
            </div>
          </div>
          {/**Image2 */}
          <div className="grid grid-cols-1 gap-16 items-center lg:mx-auto">
            <div>
              <Image
                src="/images/years.png"
                alt="years-experience"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-[#fdf0ea] text-center">
                {aboutInfo.experience}
              </p>
              <p className="text-base sm:text-lg text-[#fdf0ea] opacity-50 text-center">
                 Year Experience
              </p>
            </div>
          </div>
          {/**Image3 */}
          <div className="grid grid-cols-1 gap-16 items-center lg:mx-auto">
            <div>
              <Image
                src="/images/project.jpg"
                alt="project.png"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-[#fdf0ea] text-center">
                {aboutInfo.project}
              </p>
              <p className="text-base sm:text-lg text-[#fdf0ea] opacity-50 text-center">
            Completed Projects
              </p>
            </div>
          </div>
          {/**Image4 */}
          <div className="grid grid-cols-1 gap-16 items-center lg:mx-auto">
            <div>
              <Image
                src="/images/launh.png"
                alt="satisfy-customer"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-[#fdf0ea] text-center">
                {aboutInfo.website}
              </p>
              <p className="text-base sm:text-lg text-[#fdf0ea] opacity-50 text-center">
               Website Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
