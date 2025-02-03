'use client';

import { useState } from 'react';

const TwoSum = () => {
  const [nums, setNums] = useState<string>('');
  const [target, setTarget] = useState<string>('');
  const [result, setResult] = useState<number[] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Convert comma-separated string to number array
    const numArray = nums
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n));

    const parsedTarget = parseInt(target, 10);
    if (isNaN(parsedTarget)) {
      // Optionally handle the error here, e.g., show a message or clear result.
      setResult([]);
      return;
    }
    const output = twoSum(numArray, parsedTarget);
    setResult(output);
  };

  const twoSum = (nums: number[], target: number): number[] => {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement)!, i];
      }
      map.set(nums[i], i);
    }
    return [];
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
            Numbers (comma separated):
          </label>
          <input
            type="text"
            value={nums}
            onChange={(e) => setNums(e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
            placeholder="e.g., 2,7,11,15"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
            Target:
          </label>
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-400"
        >
          Compute Two Sum
        </button>
      </form>
      {result && result.length > 0 && (
        <div className="mt-4">
          <p className="font-medium text-gray-800 dark:text-gray-200">Result Indices:</p>
          <p className="text-gray-800 dark:text-gray-200">{result.join(', ')}</p>
        </div>
      )}
      {result && result.length === 0 && (
        <div className="mt-4">
          <p className="text-gray-800 dark:text-gray-200">No valid pair found.</p>
        </div>
      )}
    </div>
  );
};

export default TwoSum;
