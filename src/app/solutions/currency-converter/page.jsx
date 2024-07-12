import React from "react";

const CurrencyConverter = () => {
  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl text-slate-900 font-semibold">
        Currency Converter
      </h2>
      <div> Dropdowns</div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          type="number"
          name=""
          id=""
          className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
      </div>
      <div className="flex justify-end">
        <button className="px-5 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          convert
        </button>
      </div>
    </div>
  );
};

export default CurrencyConverter;
