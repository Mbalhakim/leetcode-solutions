'use client';

import { useState } from 'react';

const TopKFrequentElements = () => {
  const [nums, setNums] = useState<string>('');
  const [k, setK] = useState<number>(0);
  const [result, setResult] = useState<number[] | null>(null);

  const topKFrequent = (nums: number[], k: number): number[] => {
    const countMap = new Map<number, number>();
    nums.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
    const sortedByFrequency = Array.from(countMap).sort((a, b) => b[1] - a[1]);
    return sortedByFrequency.slice(0, k).map(item => item[0]);
  };

  const handleConvert = () => {
    const numArray = nums.split(',').map(num => parseInt(num.trim(), 10));
    setResult(topKFrequent(numArray, k));
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Enter Numbers (comma separated)</label>
        <input
          type="text"
          value={nums}
          onChange={(e) => setNums(e.target.value)}
          placeholder="Example: 1, 1, 1, 2, 2, 3"
          className="w-full p-2 border rounded bg-background text-foreground"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-2">Enter k</label>
        <input
          type="number"
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          className="w-full p-2 border rounded bg-background text-foreground"
        />
      </div>
      <button
        onClick={handleConvert}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Get Top K Frequent
      </button>
      {result && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Result: </h3>
          <p>{JSON.stringify(result)}</p>
        </div>
      )}
    </div>
  );
};

export default TopKFrequentElements;
