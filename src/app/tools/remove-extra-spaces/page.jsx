"use client";
import Wrapper from "@/app/__components/Wrapper";
import React, { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import { removeExtraSpaces } from "../../../utils/helpers";
import Breadcrumb from "@/app/__components/Breadcrumb";

const RemoveExtraSpaces = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  const handleRemoveSpaces = () => {
    setOutputText(removeExtraSpaces(inputText));
  };

  //   handle copy

  //   const textBoxRef = useRef(null);
  const handleCopyClip = () => {
    navigator.clipboard
      .writeText(outputText)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <Breadcrumb title="Remove Extra Spaces" />
      <Wrapper>
        <div className="p-5 shadow-md rounded-lg my-10 min-h-[400px]">
          <div className="p-10 bg-teal-50 my-3 rounded-md">
            <h2 className="text-2xl text-black font-bold py-5 text-center">
              What is Remove Extra Spaces?
            </h2>
            <p className="">
              `Remove Extra Spaces` refers to the process of eliminating
              unnecessary whitespace within and around words in a text. This
              typically involves removing multiple consecutive spaces between
              words, as well as any leading or trailing spaces in a string. This
              can help clean up and standardize text input, making it more
              suitable for storage, display, or further processing.
            </p>
          </div>

          {isEditorLoaded ? (
            <div className="py">
              <textarea
                rows="4"
                className="rounded-md min-h-48 border border-purple-600 focus:border-pink-900 w-full p-8"
                cols="50"
                name="worddata"
                value={inputText}
                onChange={handleInputChange}
                // ref={textBoxRef}
                id="TextBoxContent"
              ></textarea>
              <div className="my-7 text-center">
                <a
                  onClick={handleRemoveSpaces}
                  className="mx-auto bg-gradient-to-r from-purple-800 to-pink-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold  md:h-10 px-4 md:px-6 rounded-lg py-4 text-md sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400 cursor-pointer"
                >
                  Remove Extra space
                </a>
              </div>
            </div>
          ) : (
            <p>Editor Loading....</p>
          )}

          <div className="w-full rounded-md bg-purple-100 my-5 p-10 relative">
            <span
              onClick={handleCopyClip}
              className="absolute top-4 cursor-pointer py-3 text-4xl right-4 text-slate-500 hover:text-slate-900"
            >
              <MdContentCopy />
            </span>
            <code>
              {outputText && (
                <h1 className="text-teal-950 text-2xl">{outputText}</h1>
              )}
            </code>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default RemoveExtraSpaces;
