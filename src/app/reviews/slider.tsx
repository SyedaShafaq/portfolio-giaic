"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
import ReviewCard from "./review-card";
import { clientReviews } from "../../../Data/data";
 
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
    slidesToSlide: 1, //Optional, default value is 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },

  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slider = () => {
  return (
    <div>
      <Carousel
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
      >
        {clientReviews.map((review) => {
          return (
            <div key={review.image}>
              <ReviewCard review={review} />
            </div>
          );
        })}
      </Carousel>
      
    </div>
  );
};

export default Slider;
