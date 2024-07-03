"use client";

import Wrapper from "@/app/__components/Wrapper";
import React, { useState, useEffect } from "react";

const WordCounter = () => {
  const [editorData, setEditorData] = useState("Enter your text");
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);
  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  const handleWordField = (e) => {
    setEditorData(e.target.value);
  };

  return (
    <Wrapper>
      <div className="p-5 shadow-md rounded-lg my-10 min-h-[400px]">
        <div className="p-10 bg-teal-50 my-3 rounded-md">
          <h2 className="text-2xl text-black font-bold py-5 text-center">
            What is word counter?
          </h2>
          <p className="">
            A word counter is a tool that counts the number of words in a given
            text. It is used in writing, editing, SEO, social media, academic
            work, and software development to ensure text meets specific word
            count requirements or limits.
          </p>
          <p className="mt-2">
            We are developing this product to count words, where each space is
            counted as a character.
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
          ></textarea>
        ) : (
          <p>Editor Loading....</p>
        )}

        <div className="w-full rounded-md bg-purple-100 my-5 p-10">
          <h1 className="text-teal-950 text-4xl">
            {" "}
            <span className="font-bold text-purple-950 ">
              {" "}
              {editorData.split(" ").length}
            </span>{" "}
            words and
            <span className="font-bold text-purple-950 ">
              {" "}
              {editorData.length}
            </span>{" "}
            characters
          </h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: editorData.data }} />
      </div>
    </Wrapper>
  );
};

export default WordCounter;
