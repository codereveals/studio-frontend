import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, imgURL }) => {
  return (
    <div className={`h-[220px] rounded-lg overflow-hidden`}>
      <Link
        href=""
        className="w-full gap-0 h-full flex flex-col relative items-center hover-bg"
      >
        <Image
          src={imgURL}
          alt="Card image"
          width={300}
          height={320}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="w-full h-full absolute top-0 left-0 flex bg-overl"></div>
        <div className="min-h-[7.5rem] w-full flex-col flex gap-3 items-center p-5 z-0 justify-center">
          <p className="text-white text-xl font-bold">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
