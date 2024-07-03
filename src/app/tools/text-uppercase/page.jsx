"use client";
import Wrapper from "@/app/__components/Wrapper";
import { document } from "postcss";
import React, { useState, useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";

const TextUppercase = () => {
  const [editorData, setEditorData] = useState("Enter your text");
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  const handleWordField = (e) => {
    setEditorData(e.target.value);
  };

  //   handle copy

  //   const textBoxRef = useRef(null);
  const handleCopyClip = () => {
    navigator.clipboard
      .writeText(editorData.toUpperCase())
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Wrapper>
      <div className="p-5 shadow-md rounded-lg my-10 min-h-[400px]">
        <div className="p-10 bg-teal-50 my-3 rounded-md">
          <h2 className="text-2xl text-black font-bold py-5 text-center">
            What is Text Uppercase?
          </h2>
          <p className="">
            Text uppercase refers to converting all the letters in a given text
            to their uppercase (capital) form. This means transforming every
            lowercase letter to its corresponding uppercase letter, while
            keeping the uppercase letters unchanged.
          </p>
          <p className="mt-2">
            For example, the text `Hello, world!` would be converted to `HELLO,
            WORLD!` when changed to uppercase. This process is often used for
            emphasis, headings, or to standardize the format of text.
          </p>
        </div>

        {isEditorLoaded ? (
          <textarea
            rows="4"
            className="rounded-md min-h-96 border border-purple-600 focus:border-pink-900 w-full p-8"
            cols="50"
            name="worddata"
            placeholder={editorData}
            onChange={handleWordField}
            // ref={textBoxRef}
            id="TextBoxContent"
          ></textarea>
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
            <h1 className="text-teal-950 text-2xl">
              {" "}
              <span className="font-bold font-sans text-purple-950 ">
                {" "}
                {editorData.toUpperCase()}
              </span>{" "}
            </h1>
          </code>
        </div>
        <div dangerouslySetInnerHTML={{ __html: editorData.data }} />
      </div>
    </Wrapper>
  );
};

export default TextUppercase;
