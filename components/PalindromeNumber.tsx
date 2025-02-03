"use client";

import React, { useState } from "react";

const PalindromeNumber = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const isPalindrome = (x: number): boolean => {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split("").reverse().join("");
  };

  const handleCheck = () => {
    const parsedInput = parseInt(input, 10);
    if (isNaN(parsedInput)) {
      setResult("Invalid input. Please enter a valid integer.");
    } else {
      setResult(isPalindrome(parsedInput).toString());
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Try it Yourself</h2>
      <input
        type="text"
        placeholder="Enter an integer (e.g., 121)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 border rounded-md bg-white dark:bg-gray-900"
      />
      <button
        onClick={handleCheck}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Check
      </button>
      {result !== null && (
        <div className="mt-3 p-2 border rounded-md bg-white dark:bg-gray-900">
          <strong>Result:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default PalindromeNumber;
