import React from "react";
import ContactForm from "./contactform";
import ContactInfo from "./contactinfo";



const Contact = () => {
    return (
      <div className="pt-16 pb-16 bg-[#394326]">
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
          {/**Contact Form */}
          
         <div><ContactForm/> </div>     
          {/** Contact Info */}
            <div className="lg:mx-auto"><ContactInfo/>  </div> 
        </div>
      </div>
    );
  };
  
  export default Contact;