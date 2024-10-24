import Breadcrumb from "@/app/__components/Breadcrumb";
import Wrapper from "@/app/__components/Wrapper";
import Image from "next/image";
import React from "react";

const AiImageGenerators = () => {
  return (
    <>
      <Breadcrumb title="AI Image Generator" />
      <Wrapper>
        <div className="min-h-screen w-full align-middle bg-slate-800 my-4 rounded-md ">
          <div className="flex gap-4 items-center ">
            <div className="flex   w-full max-w-[40%] gap-5 flex-col p-8">
              <h2 className="text-xl text-white mt-6">
                <span className="text-transparent  font-bold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-sky-400">
                  AI
                </span>{" "}
                Image Generator
              </h2>
              <label htmlFor="aiGen" className="text-white text-sm">
                {" "}
                Describe your Imiginstion
              </label>
              <input
                type="text"
                id="aiGen"
                className="w-full text-left focus:ring-2 ring-purple-800 max-w-[500px]  focus:outline-none bg-transparent appearance-none rounded-md min-h-[150px] text-sm leading-6 text-white placeholder-slate-400 py-2 pl-10 ring-1 focus:ring-pink-600 shadow-sm"
              />
              <button className=" bg-gradient-to-r from-purple-900 to-pink-800   relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50  shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0">
                Generate
              </button>
            </div>
            <div className="w-full flex items-center ">
              <Image
                src="/gradient.webp"
                width={600}
                height={600}
                alt="AI Generated Image"
                className="rounded-md "
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AiImageGenerators;
