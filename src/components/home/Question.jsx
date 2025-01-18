import Image from "next/image";
import { Box } from "@mui/material";
const Question = () => {
  return (
    <Box className="mt-60">
      <div className="flex flex-col">
        <div className="flex relative flex-col pb-48 w-full min-h-[899px] max-md:pb-24 max-md:max-w-full">
          <Image
            src={"/assets/banner.png"}
            width={1000}
            height={1000}
            alt="Background image"
            className="object-cover absolute inset-0 size-full"
          />

          <div className="flex relative flex-wrap gap-2 items-center self-center mt-28 mb-0 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
            <div className="flex flex-col justify-center self-stretch px-6 py-11 my-auto rounded-2xl bg-white bg-opacity-40 min-h-[505px] min-w-[240px] w-[867px] max-md:px-5 max-md:max-w-full">
              <div className="gap-2.5 self-stretch p-2.5 w-full text-3xl font-bold leading-none text-center text-orange-500 max-md:max-w-full">
                Got a Project in Mind?
              </div>
              <div className="flex flex-col mt-10 w-full max-md:max-w-full">
                <div className="gap-2.5 self-stretch px-2.5 py-4 w-full text-7xl font-bold border-b border-zinc-300 leading-[104px] text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                  Let's Discus the details!
                </div>
                <div className="flex gap-2.5 justify-center items-center self-start p-2.5 mt-8 text-base font-medium tracking-normal leading-7 text-black">
                  <button className="flex overflow-hidden justify-center items-center self-stretch px-6 py-3 my-auto bg-orange-500 min-w-[240px] rounded-[100px] max-md:px-5">
                    Book a free Consultation today!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center self-stretch px-6 py-11 my-auto rounded-2xl bg-white bg-opacity-40 min-h-[505px] min-w-[240px] w-[309px] max-md:px-5">
              <div className="flex gap-2.5 items-center p-2.5 w-full">
                <Image
                  src={"/assets/profile.png"}
                  width={1000}
                  height={1000}
                  alt="Profile picture of Rafat, Design Head at Protoja"
                  className="object-contain self-stretch my-auto rounded-full aspect-square w-[100px]"
                />
              </div>
              <div className="flex flex-col mt-28 w-full text-base font-bold max-md:mt-10">
                <div className="flex-1 shrink gap-2.5 self-stretch px-2.5 py-4 w-full leading-5 text-black border-b border-zinc-300">
                  My Name is Rafat, Design Head at Protoja. I will answer all
                  your Question
                </div>
                <div className="flex gap-2.5 justify-center items-center self-start p-2.5 mt-8 tracking-normal leading-7 text-gray-200">
                  <button className="flex overflow-hidden gap-3 justify-center items-center self-stretch px-6 py-3 my-auto bg-neutral-900 max-w-[620px] rounded-[100px] max-md:px-5">
                    <span className="self-stretch my-auto">Ask Questions</span>
                    <Image
                      src={"/assets/whatsapp.png"}
                      width={1000}
                      height={1000}
                      alt="logo"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Question;
