"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Image from "next/image";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        // Adjust this value based on when you want the style to change
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-[url('/menu-bg--desktop.svg')] ${
        scrolled ? " fixed ease-in-out delay-150" : ""
      } top-0 left-0  py-3 bg-cover  bg-no-repeat bg-center w-full h-auto md:h-[80px]  flex items-center transition-all	 duration-300 z-20 `}
    >
      <Wrapper className={`flex items-center justify-between`}>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={150}
            height={80}
            className="w-[100px] md:w-[150px]"
          />
        </Link>
        <MobileMenu isActive={isActive} />
        {/* <Menu /> */}

        <div className="flex items-center">
          <Link
            href="/company/contact-us"
            className=" bg-gradient-to-r from-purple-900 to-pink-800   relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-slate-50  shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>{" "}
            Get started
          </Link>
          <span className="p-3 md:hidden" onClick={toggleActive}>
            <Image src="/hamburger.svg" alt="menu" width={40} height={40} />
          </span>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
