"use client";

import React from "react";

interface ConstraintsProps {
  constraints: string[];
}

const Constraints: React.FC<ConstraintsProps> = ({ constraints }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Constraints</h2>
      <ul className="list-disc pl-5 text-gray-800 dark:text-gray-300">
        {constraints.map((constraint, index) => (
          <li key={index} className="text-sm">
            {constraint}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Constraints;
