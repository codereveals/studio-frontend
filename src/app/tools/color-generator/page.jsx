"use client";
import Wrapper from "@/app/__components/Wrapper";
import React, { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { getRandomColor } from "../../../utils/randomColor.js";
import Breadcrumb from "@/app/__components/Breadcrumb.jsx";

const ColorGenerator = () => {
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  const [color, setColor] = useState(getRandomColor());
  const handleGenerateColor = () => {
    setColor(getRandomColor());
  };

  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  //   Handle Copy
  const handleCopyClip = () => {
    navigator.clipboard
      .writeText(color)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <Breadcrumb title="Random Color Generator" />
      <Wrapper>
        <div className="p-5 shadow-md rounded-lg my-10 min-h-[400px]">
          <div className="p-10 bg-teal-50 my-3 rounded-md">
            <h2 className="text-2xl text-black font-bold py-5 text-center">
              What is Random Color Generator?
            </h2>
            <p className="">
              A Random Color Generator is a tool or software that produces
              colors randomly, typically using hexadecimal codes or RGB values.
              It is used in web design, graphic design, UI/UX design, and other
              creative applications to generate diverse and vibrant color
              schemes effortlessly.
            </p>
          </div>

          {isEditorLoaded ? (
            <>
              <div className="text-center py-6">
                <a
                  onClick={handleGenerateColor}
                  className="mx-auto bg-gradient-to-r from-purple-800 to-pink-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold  md:h-10 px-4 md:px-6 rounded-lg py-4 text-md sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 cursor-pointer"
                >
                  Generate
                </a>

                <div className="flex justify-center my-8">
                  <div
                    style={{ backgroundColor: color }}
                    className={`h-48 w-48 rounded-md flex justify-center items-center relative`}
                  >
                    <span
                      onClick={handleCopyClip}
                      className="absolute top-2 py-3 cursor-pointer text-2xl right-4 text-slate-300 hover:text-white"
                    >
                      <MdContentCopy />
                    </span>
                    <span className="text-white">{color}</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Editor Loading....</p>
          )}

          <div />
        </div>
      </Wrapper>
    </>
  );
};

export default ColorGenerator;
