"use client";
import DropdownSelect from "@/app/__components/DropdownSelect";
import React, { useEffect, useState } from "react";
import { IoMdSwap } from "react-icons/io";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false); // Fixed typo here

  const fetchCurrencies = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.log("Currency not fetched!");
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  console.log(currencies);

  const convertCurrency = async () => {
    if (!amount) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency);
    } catch (error) {
      console.log("Currency not fetched!");
    } finally {
      setLoading(false); // Fixed the loading state reset
    }
  };

  const handleFavorite = () => {};
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl text-slate-900 font-semibold">
        Currency Converter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <DropdownSelect
          currencies={currencies}
          title="From:"
          handleFavorite={handleFavorite}
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="flex justify-center items-center -mb-5 sm:mb-0">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <IoMdSwap className="text-2xl" />
          </button>
        </div>
        <DropdownSelect
          currencies={currencies}
          currency={toCurrency}
          title="To:"
          handleFavorite={handleFavorite}
          setCurrency={setToCurrency}
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-4"
        >
          Amount:
        </label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-purple-700"
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={convertCurrency}
          className={`py-3.5 px-7 bg-gradient-to-r from-purple-900 to-pink-800 shadow-md rounded-full text-white font-semibold text-md hover:bg-indigo-700 focus:ring-offset-2 ${
            loading ? "animate-pulse" : ""
          }`}
        >
          Convert
        </button>
      </div>

      {convertedAmount && (
        <div className="mt-5 font-medium text-xl text-center text-green-700">
          Converted Amount: {convertedAmount}
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
