"use client";

import React, { useState } from "react";

const ContainsDuplicate = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const containsDuplicate = (nums: number[]): boolean => {
    const seen = new Set<number>();
    for (const num of nums) { // 🔹 FIXED: 'let' changed to 'const'
      if (seen.has(num)) return true;
      seen.add(num);
    }
    return false;
  };

  const handleCheck = () => {
    try {
      const parsedInput = JSON.parse(input);
      if (!Array.isArray(parsedInput)) throw new Error();
      setResult(containsDuplicate(parsedInput).toString());
    } catch {
      setResult("Invalid input. Please enter a valid array of numbers."); // 🔹 FIXED: No unused variable
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Try it Yourself</h2>
      <input
        type="text"
        placeholder="Enter an array (e.g., [1,2,3,1])"
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

export default ContainsDuplicate;
