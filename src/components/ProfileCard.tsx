import React from "react";
import { VscSettings } from "react-icons/vsc";
import { PiArrowClockwise } from "react-icons/pi";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const ProfileCard = () => {
  return (
    <div className="px-5 pb-10 max-w-[400px] w-full border-[2px] rounded-2xl h-fit relative bg-gradient-to-b from-white from-40% via-primary via-70% to-black">
      <div className="flex items-center justify-between py-3 px-3">
        <PiArrowClockwise className="cursor-pointer text-2xl text-black/50" />
        <VscSettings className="cursor-pointer text-2xl text-black/50" />
      </div>
      <div className="relative mx-auto w-[280px] h-[350px]">
        {Array.from({ length: 3 }).map((_, i) => {
          return (
            <Image
              key={i}
              src="/lady.png"
              alt=""
              width={280}
              height={300}
              className={`rounded-lg absolute w-full h-full object-cover`}
              style={{
                top: `${i * 5}px`,
                left: `${i * 5}px`,
                transform: `${
                  i == 1 && "rotateZ(-10deg) translate(-30px,-20px)"
                }`,
                zIndex: `${i == 1 && "30"}`,
              }}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-4 mt-10">
        <div className="w-full flex justify-between max-w-[180px] gap-3 items-center mx-auto">
          <MdClose className="text-2xl text-white cursor-pointer" />
          <FaRegHeart className="text-2xl text-white cursor-pointer" />
          <FaRegStar className="text-2xl text-white cursor-pointer" />
        </div>
        <div className="text-white text-center">
          <p className="text-lg mb-1 font-medium tracking-wide">
            Celina Williams, 22
          </p>
          <div className="text-xs tracking-wider flex justify-center items-center gap-2">
            <span>Beautician</span>
            <span className="inline-flex items-center gap-[2px]">
              <IoLocationOutline className="text-red-500 text-base" /> 10km
            </span>
          </div>
        </div>
        <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default ProfileCard;
