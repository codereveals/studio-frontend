import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto md:px-10 px-5 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
