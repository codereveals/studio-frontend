import React from "react";
import { CiStar } from "react-icons/ci";

const DropdownSelect = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handleFevorite,
  title,
}) => {
  const handleFavorite = () => {};

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {" "}
        {title}
      </label>
      <div className="mt-2 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-700"
        >
          {currencies?.map((currency) => {
            return (
              <option value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
        </select>
        <button
          onClick={() => handleFavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex justify-center items-center text-sm leading-5"
        >
          <CiStar />
        </button>
      </div>
    </div>
  );
};

export default DropdownSelect;
