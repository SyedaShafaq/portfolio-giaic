import React from "react";
import Slider from "./slider";
 
 

const Reviews = () => {
  return (
    <div id="reviews" className="pt-16 pb-16 bg-[#394326]">
      <h1 className="bg-[#9cb878] w-fit text-center px-4 py-3 mx-auto text-[#fdf0ea] text-2xl sm:text-3xl md:4xl uppercase rounded-md">
        CLIENT REVIEWS
      </h1>
      <div className="w-[90%] sm:w-[80%] mx-auto mt-20">
        <Slider />
        
      </div>
    </div>
  );
};

export default Reviews;
