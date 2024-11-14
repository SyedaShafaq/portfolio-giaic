"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
 
 

{
  /**Props */
}
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const Card = ({service}: Props) => {
  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#fdf0ea] h-[10%]">
      <Image src={service.icon} alt={service.title} width={50} height={50} />
      <h1 className="mt-4 text-lg font-bold text-gray-800 ">{service.title}</h1>
      <p className="mt-3 text-sm text-gray-400">{service.description}</p>
    </Tilt>
  );
};

export default Card;
