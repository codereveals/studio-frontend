import React from "react";

const Breadcrumb = ({ title, desc }) => {
  return (
    <div className="w-full flex justify-center flex-col items-center bg-[#2C2134] py-3 md:py-8">
      <h1 className="text-xl md:text-4xl text-white">{title}</h1>
    </div>
  );
};

export default Breadcrumb;
