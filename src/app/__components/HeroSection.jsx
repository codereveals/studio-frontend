import React from "react";
import Search from "./Search";

const HeroSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24 bg-[url('/menu-bg--desktop.svg')] bg-cover bg-no-repeat bg-center">
      <div className="relative z-3 max-w-5xl mx-auto pt-20 sm:pt-20 lg:pt-20">
        <h1 className="text-white font-extrabold text-xl text-me sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Effortless Word Count, Intelligent Insights – Your AI-Powered Writing
          Assistant
        </h1>
        <p className="mt-6 text-lg text-white text-center max-w-3xl mx-auto dark:text-slate-400">
          Transform ideas into stunning designs with high-quality{" "}
          <code className="text-transparent font-mono font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-sky-400">
            {" "}
            Frontend
          </code>
          ,{" "}
          <code className="text-transparent font-mono font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-sky-400">
            Word Counter
          </code>
          ,{" "}
          <code className="text-transparent font-mono font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-sky-400">
            Gradient and Color Generators,
          </code>{" "}
          and{" "}
          <code className=" text-transparent font-mono font-medium bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:text-sky-400">
            Title-To-Slug Converter
          </code>{" "}
          that can be helps you.
        </p>
        <div className="flex justify-center mt-10">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
