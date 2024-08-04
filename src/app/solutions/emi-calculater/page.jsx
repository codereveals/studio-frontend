"use client";
import Breadcrumb from "@/app/__components/Breadcrumb";
import DropdownSelect from "@/app/__components/DropdownSelect";
import Wrapper from "@/app/__components/Wrapper";
import React, { useEffect, useState } from "react";
import { IoMdSwap } from "react-icons/io";

const EmiCalculater = () => {
  return (
    <>
      <Breadcrumb title="EMI Calculater" />
      <Wrapper>
        <div className="p-10 bg-teal-50 my-3 rounded-md">
          <h2 className="text-2xl text-black font-bold py-5 text-center">
            What is EMI Calculater?
          </h2>
          <p className="">
            An EMI (Equated Monthly Installment) calculator is a financial tool
            used to calculate the fixed monthly payments required to repay a
            loan over a specified tenure. It helps borrowers determine the
            monthly amount they need to pay to clear their loan, including both
            the principal and interest components
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default EmiCalculater;
