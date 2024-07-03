import React from "react";

const Search = () => {
  return (
    <div className=" w-full ">
      <form className="group  flex flex-col md:flex-row justify-center">
        <div className="relative  md:max-w-[320px] w-full">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-purple-500"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="w-full rounded-full focus:ring-2 ring-purple-800 max-w-[500px]  focus:outline-none bg-transparent appearance-none  text-sm leading-6 text-white min-h-[48px] placeholder-slate-400 py-2 pl-10 ring-1 focus:ring-pink-600 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter projects..."
          />
        </div>
        <a
          className=" mt-5 md:mt-0 rounded-full bg-gradient-to-r from-purple-800 to-pink-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6  w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
          href="/"
        >
          Find Project
        </a>
      </form>
    </div>
  );
};

export default Search;
