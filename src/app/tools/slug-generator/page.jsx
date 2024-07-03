"use client";
import Wrapper from "@/app/__components/Wrapper";
import { document } from "postcss";
import React, { useState, useEffect, useRef } from "react";
import { MdContentCopy } from "react-icons/md";

const SlugGenerator = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  useEffect(() => {
    setIsEditorLoaded(true);
  }, []);

  //   Handle Copy
  const handleCopyClip = () => {
    navigator.clipboard
      .writeText(slug)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  // Slugify function
  const createSlugGenerator = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };
  // Event handler for input change
  const handleInputChange = (e) => {
    setTitle(e.target.value); // Update the title state
    setSlug(createSlugGenerator(e.target.value)); // Update the slug state
  };

  return (
    <Wrapper>
      <div className="p-5 shadow-md rounded-lg my-10 min-h-[400px]">
        <div className="p-10 bg-teal-50 my-3 rounded-md">
          <h2 className="text-2xl text-black font-bold py-5 text-center">
            What is Slug Generator?
          </h2>
          <p className="">
            A slug generator is a tool that creates URL-friendly versions of
            strings, typically used in web development to generate readable and
            search engine optimized URLs. It converts strings to lowercase,
            removes special characters, replaces spaces with dashes, and trims
            whitespace to create user-friendly URLs.
          </p>
        </div>

        {isEditorLoaded ? (
          <textarea
            rows="2"
            className="rounded-md min-h-28 border border-purple-600 focus:border-pink-900 w-full p-8"
            cols="40"
            name="worddata"
            value={title}
            placeholder={slug}
            onChange={handleInputChange}
          ></textarea>
        ) : (
          <p>Editor Loading....</p>
        )}

        <div className="w-full rounded-md bg-purple-100 my-5 p-10 relative">
          <span
            onClick={handleCopyClip}
            className="absolute top-4 py-3 text-4xl right-4 text-slate-500 hover:text-slate-900"
          >
            <MdContentCopy />
          </span>
          <code>
            <h1 className="text-teal-950 text-2xl">
              {" "}
              <span className="font-bold font-sans text-purple-950 ">
                {" "}
                {slug}
              </span>{" "}
            </h1>
          </code>
        </div>
        <div />
      </div>
    </Wrapper>
  );
};

export default SlugGenerator;
