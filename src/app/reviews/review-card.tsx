import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};

const ReviewCard = ({ review }: Props) => {
  const { name, review: clientReview, rating, profession, image } = review;
  return (
    <div className="rounded-md overflow-hidden bg-[#6d835c] m-4">
      <div className="p-6">
        <Image src="/images/e.png" alt="image" width={30} height={30} />

        <p className="text-[#fdf0ea] opacity-60">{clientReview}</p>
        <Image
          src="/images/e.png"
          alt=""
          width={30}
          height={30}
          className="ml-auto rotate-180"
        />
      </div>
      <div className="px-6 py-3 pt-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-[#4e763b] text-[#fdf0ea] font-bold">
<span>{rating}/5</span>
<FaStar className="text-yellow-400"/>
      </div>
      <div className="bg-[#d2c3be] ">
        <div className="p-6 flex items-center space-x-6 ">
            <div>
                <Image
                src={image}
                alt={name}
                width={40}
                height={40}
                className="object-cover rounded-full"
                />
            </div>
            <div>
                <h1 className="font-bold">{name}</h1>
                <p className="text-base text-gray-700">{profession}</p>
            </div>

        </div>

      </div>
    </div>
  );
};

export default ReviewCard;
