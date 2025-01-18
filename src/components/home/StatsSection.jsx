import Image from "next/image";
import * as React from "react";

const statsData = [
  { number: "01", title: "Years of Experience", count: "6+" },
  { number: "02", title: "Country Served", count: "51+" },
  { number: "03", title: "Happy Clients", count: "200+" },
  { number: "04", title: "Industry we worked", count: "25+" },
];

const StatsSection = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex relative flex-col pb-11 w-full min-h-[900px] max-md:max-w-full">
        <Image
          src={"/assets/banner.png"}
          width={1000}
          height={1000}
          alt="Background image"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col self-center mt-16 w-full font-bold text-center text-white max-w-[1170px] max-md:mt-10 max-md:max-w-full">
          <div className="self-start ml-3 text-9xl leading-none max-md:ml-2.5 max-md:text-4xl">
            We are{" "}
          </div>
          <div className="flex z-10 flex-wrap gap-1.5 justify-center items-center text-black">
            {statsData.map((stat, index) => (
              <div
                className={`flex flex-col justify-center self-stretch p-6 my-auto w-72 rounded-2xl bg-white bg-opacity-40 min-h-[505px] min-w-[240px] max-md:px-5`}
                key={index}
              >
                <div className="gap-2.5 self-stretch p-2.5 w-full text-lg leading-none whitespace-nowrap">
                  {stat.number}
                </div>
                <div className="flex flex-col mt-64 w-full max-md:mt-10">
                  <div className="gap-2.5 self-stretch px-2.5 py-4 w-full text-xl leading-none border-b border-zinc-300">
                    {stat.title}
                  </div>
                  <div className="gap-2.5 self-start p-2.5 mt-8 text-6xl leading-none whitespace-nowrap max-md:text-4xl">
                    {stat.count}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="self-end mt-0 mr-36 text-9xl leading-none max-md:mr-2.5 max-md:text-4xl">
            Pro's
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
