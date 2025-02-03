"use client";

import React, { useState } from "react";

const FindFirstPalindromicString = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const firstPalindrome = (words: string[]): string => {
    for (const word of words) {
      if (word === word.split("").reverse().join("")) return word;
    }
    return "";
  };

  const handleCheck = () => {
    try {
      const parsedInput = JSON.parse(input);
      if (!Array.isArray(parsedInput) || !parsedInput.every((w) => typeof w === "string")) {
        throw new Error();
      }
      setResult(firstPalindrome(parsedInput));
    } catch {
      setResult("Invalid input. Please enter an array of lowercase strings.");
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Try it Yourself</h2>
      <input
        type="text"
        placeholder='Enter an array of words (e.g., ["abc","car","ada","racecar"])'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md bg-white dark:bg-gray-900"
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

export default FindFirstPalindromicString;
