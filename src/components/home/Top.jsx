"use client";

import Image from "next/image";
import HeroStar from "../atoms/HeroStar";

const Top = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden text-black">
      {/* Background video */}
      <video
        src="/assets/heroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></video>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full text-white p-6 md:ms-32">
        {/* Centered heading */}
        <div className="flex items-center h-full">
          <div>
            <h6 className="text-[48px] md:text-[70px] lg:text-[100px] xl:text-[110px] text-[#161616] font-outfit font-bold leading-none">
              Top Global UX
            </h6>
            <br />
            <span className="text-[48px] md:text-[70px] lg:text-[100px] xl:text-[110px] font-outfit font-bold leading-none text-[#575757]">
              Design Studio
            </span>
          </div>
        </div>

        {/* Bottom text */}
        <div className="absolute bottom-32 md:bottom-48 lg:bottom-64 left-0 right-0 flex ">
          <div className="flex px-4 py-1 rounded-[40.994px] bg-white">
            <div className="rounded-[22.873px]">
              <Image
                width={46}
                height={46}
                src="/assets/reviewBased.png"
                alt="logo"
              />
            </div>
            <div className="ms-3">
              <div className="flex mt-[-4px]">
                <p className="text-black text-[16px] md:text-[20px] lg:text-[22.125px] font-inter font-medium leading-[31.2px] mx-1">
                  5.0
                </p>
                <HeroStar />
              </div>
              <p className="text-[13px] md:text-[14px] lg:text-[15.125px] font-semibold text-[#444446] font-inter leading-[28px] tracking-[-0.5px] ms-1">
                Based on Clutch reviews
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 md:bottom-16 lg:bottom-24 right-4 md:right-16 lg:right-40">
          <div className="max-w-xs md:max-w-md lg:max-w-lg">
            <span className="text-[14px] md:text-[18px] lg:text-[21px] font-semibold text-[#202124]">
              Protoja is a UI UX Design and Brand design studio, crafting
              user-centered experiences and impactful brand identities to drive
              business growth.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
