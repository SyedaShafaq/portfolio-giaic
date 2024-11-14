import React from "react";
import { FaEnvelope, FaMap, FaPhone,} from "react-icons/fa6";
import { contactData } from "../../../Data/data";
 


const ContactInfo = () => {
    return (
      <div className="lg:flex xl:flex xl:flex-row lg:flex-row sm:flex-col md:flex-col">
        <div className="flex items-center space-x-8 mr-8 ">
          <div className="w-8 h-12 md:w-16 md:16 rounded-full bg-gradient-to-r from-[#4e763b] to-green-500 flex items-center justify-center flex-col">
            <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-[#fdf0ea]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl text-[#fdf0ea] font-bold">
              Contact No
            </h1>
            <h1 className="text-base sm:text-lg text-[#fdf0ea] text-opacity-70">
              {contactData.phone}
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-8 mt-8 mb-8">
          <div className="w-8 h-12 md:w-16 md:16 rounded-full bg-gradient-to-r from-[#4e763b] to-green-500 flex items-center justify-center flex-col">
            <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-[#fdf0ea]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl text-[#fdf0ea] font-bold">
              Email Address
            </h1>
            <h1 className="text-base sm:text-lg text-[#fdf0ea] text-opacity-70">
              {contactData.email}
            </h1>
          </div>
        </div>
  
        <div className="flex items-center space-x-8 mt-8 mb-8 lg:ml-8 xl:ml-8 ">
          <div className="w-8 h-12 md:w-16 md:16 rounded-full bg-gradient-to-r from-[#4e763b] to-green-500 flex items-center justify-center flex-col">
            <FaMap className="w-4 h-4 md:w-7 md:h-7 text-[#fdf0ea]" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl text-[#fdf0ea] font-bold">
              Location
            </h1>
            <h1 className="text-base sm:text-lg text-[#fdf0ea] text-opacity-70">
              {contactData.address}
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;