import Breadcrumb from "@/app/__components/Breadcrumb";
import Wrapper from "@/app/__components/Wrapper";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <Breadcrumb title="About Us" />
      <Wrapper>
        <div className="w-full p-4 md:p-8 bg-slate-50 rounded-md  my-4">
          <div className="md:flex gap-8">
            <div className="">
              <h2 className="font-bold md:text-2xl py-8 text-center">
                Welcome to Code Reveals
              </h2>
              <p className="mb-2">
                At code Reveals, we are committed to providing simple,
                efficient, and reliable online tools to help you with your
                everyday tasks. Whether you`re a writer, designer, or just
                someone looking to make quick conversions, our tools are
                designed to save you time and effort. Here`s what we offer:
              </p>
              <h2 className="font-bold text-slate-800 my-3 mt-5">
                Word Counter
              </h2>
              <p>
                Our Word Counter is perfect for writers, students, and
                professionals who need to keep track of their word count.
                Whether you are working on a novel, an essay, or a report, our
                Word Counter helps you ensure your document meets the required
                length. With instant results and detailed statistics, you can
                stay on top of your writing goals.
              </p>
              <h2 className="font-bold text-slate-800 my-3 mt-5">
                Color Generator
              </h2>
              <p>
                For designers, artists, and developers, our Color Generator is
                an indispensable tool. Create beautiful color schemes and
                palettes effortlessly. Whether you`re designing a website,
                creating digital art, or working on any project that involves
                color, our Color Generator provides you with the perfect hues
                and combinations to bring your vision to life.
              </p>
              <h2 className="font-bold text-slate-800 my-3 mt-5">
                Currency Converter
              </h2>
              <p>
                Travelers, shoppers, and business professionals can benefit from
                our Currency Converter. Convert currencies quickly and
                accurately, using up-to-date exchange rates. Whether you`re
                planning a trip, making an international purchase, or managing
                finances across borders, our Currency Converter ensures you get
                the most accurate conversion rates available.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default AboutUsPage;
