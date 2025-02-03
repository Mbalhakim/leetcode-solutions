"use client";

import React, { useState } from "react";

const ValidAnagram = () => {
  const [s, setS] = useState<string>("");
  const [t, setT] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
  };

  const handleCheck = () => {
    if (!s || !t) {
      setResult("Please enter both strings.");
      return;
    }
    setResult(isAnagram(s, t).toString());
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Try it Yourself</h2>
      <input
        type="text"
        placeholder="Enter first string (s)"
        value={s}
        onChange={(e) => setS(e.target.value)}
        className="w-full p-2 mb-2 border rounded-md bg-white dark:bg-gray-900"
      />
      <input
        type="text"
        placeholder="Enter second string (t)"
        value={t}
        onChange={(e) => setT(e.target.value)}
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

export default ValidAnagram;
