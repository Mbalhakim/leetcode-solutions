'use client';

import { useState } from 'react';

const romanToInt = (s: string): number => {
  const romanValues: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i + 1]] || 0;

    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }
  return total;
};

export default function RomanConverter() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleConvert = () => {
    if (/^[IVXLCDM]+$/i.test(input)) {
      setResult(romanToInt(input.toUpperCase()));
    } else {
      setResult(null);
      alert('Invalid Roman numeral. Please use only these characters: I, V, X, L, C, D, M.');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Live Converter</h2>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          placeholder="Enter Roman numeral"
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
        <button
          onClick={handleConvert}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Convert
        </button>
      </div>
      
      {/* List of valid Roman numeral characters */}
      <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-2">Valid Roman Numerals:</h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li><strong>I</strong> = 1</li>
          <li><strong>V</strong> = 5</li>
          <li><strong>X</strong> = 10</li>
          <li><strong>L</strong> = 50</li>
          <li><strong>C</strong> = 100</li>
          <li><strong>D</strong> = 500</li>
          <li><strong>M</strong> = 1000</li>
        </ul>
      </div>

      {result !== null && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded">
          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Result: <span className="text-blue-600 dark:text-blue-400">{result}</span>
          </p>
        </div>
      )}
    </div>
  );
}
