import Breadcrumb from "@/app/__components/Breadcrumb";
import Wrapper from "@/app/__components/Wrapper";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Contact Us" />
      <Wrapper>
        <form className="py-5 md:py-8">
          <div className="space-y-12 ">
            <div className="">
              <h2 className="text-base font-semibold leading-7 text-gray-900 text-center">
                Give Suggestions
              </h2>
              <p className="mt-1 mb-5 text-sm leading-6 text-gray-600 text-center">
                This information will be not displayed publicly.
              </p>

              <div className="flex-col flex md:flex-row flex-wrap gap-4">
                <div className="w-full md:w-[49%]">
                  <label
                    HTMLfor="price"
                    className="block text-sm font-medium leading-6 mb-1 text-gray-900"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="w-full md:w-[49%]">
                  <label
                    HTMLfor="price"
                    className="block text-sm font-medium leading-6 mb-1 text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="w-full md:w-[49%]">
                  <label
                    HTMLfor="price"
                    className="block text-sm font-medium leading-6 mb-1 text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Last Name"
                  />
                </div>

                <div className="w-full md:w-[49%]">
                  <label
                    HTMLfor="price"
                    className="block text-sm font-medium leading-6 mb-1 text-gray-900"
                  >
                    Contact
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter contact"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-4">
            <label
              HTMLfor="price"
              className="block text-sm font-medium leading-6 mb-1 text-gray-900"
            >
              Comments
            </label>
            <p className=" text-sm leading-6 text-gray-600">
              Write a few sentences about your Query.
            </p>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows="3"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-4">
            <button
              type="submit"
              className="rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
};

export default ContactUs;
