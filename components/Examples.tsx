"use client";

import React from "react";

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

interface ExamplesProps {
  examples: Example[];
}

const Examples: React.FC<ExamplesProps> = ({ examples }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Examples</h2>
      {examples.map((example, index) => (
        <div key={index} className="mb-4 p-3 border rounded-lg bg-white dark:bg-gray-900">
          <p><strong>Input:</strong> {example.input}</p>
          <p><strong>Output:</strong> {example.output}</p>
          {example.explanation && <p><strong>Explanation:</strong> {example.explanation}</p>}
        </div>
      ))}
    </div>
  );
};

export default Examples;
