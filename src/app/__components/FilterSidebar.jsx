import React from "react";
import Card from "./Card";

const FilterSidebar = () => {
  return (
    <>
      <div className="lg:w-1/3 xl:w-1/4 ps-7 bg-purple-100 p-3 rounded-lg">
        <div className="divide-y divide-slate-200 dark:divide-slate-700">
          <div className="relative flex flex-col pb-8 space-y-4">
            <h3 className="font-semibold mb-2.5">Categories</h3>
            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Backpacks"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Backpacks"
                />
                <label
                  for="Backpacks"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    Photo
                  </span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Travel Bags"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Travel Bags"
                />
                <label
                  for="Travel Bags"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    Vector
                  </span>
                </label>
              </div>
            </div>

            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Accessories"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Accessories"
                />
                <label
                  for="Accessories"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    Videos
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col py-8 space-y-4">
            <h3 className="font-semibold mb-2.5">Colors</h3>

            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Brown"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Brown"
                />
                <label
                  for="Brown"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    pink
                  </span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Green"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Green"
                />
                <label
                  for="Green"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    Green
                  </span>
                </label>
              </div>
            </div>
            <div className="">
              <div className="flex text-sm sm:text-base ">
                <input
                  id="Navy"
                  className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                  type="checkbox"
                  name="Navy"
                />
                <label
                  for="Navy"
                  className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                >
                  <span className="text-slate-900 dark:text-slate-100 text-sm font-normal ">
                    Navy
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col py-8 space-y-4">
            <h3 className="font-semibold mb-2.5">Sort order</h3>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Most-Popular"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Most-Popular"
                name="radioNameSort"
              />
              <label
                for="Most-Popular"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                Most Popular
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Best-Rating"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Best-Rating"
                name="radioNameSort"
              />
              <label
                for="Best-Rating"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                Best Rating
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Newest"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Newest"
                name="radioNameSort"
              />
              <label
                for="Newest"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                Newest
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Price-low-hight"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Price-low-hight"
                name="radioNameSort"
              />
              <label
                for="Price-low-hight"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                Price Low - Hight
              </label>
            </div>
            <div className="flex items-center sm:text-base !text-sm">
              <input
                id="Price-hight-low"
                className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 dark:hover:border-slate-500 dark:checked:bg-primary-500 focus:ring-primary-500 w-5 h-5"
                type="radio"
                value="Price-hight-low"
                name="radioNameSort"
              />
              <label
                for="Price-hight-low"
                className="pl-2.5 sm:pl-3 block text-slate-900 dark:text-slate-100 select-none"
              >
                Price Hight - Low
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
