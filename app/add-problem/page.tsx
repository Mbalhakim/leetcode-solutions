"use client";

import { useState } from "react";

export default function AddProblemPage() {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    difficulty: "Easy",
    description: "",
    explanation: "",
    code: "",
    constraints: "",
    examples: "",
    category: "",
    dateSolved: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newProblem = {
      ...formData,
      constraints: formData.constraints.split(",").map(item => item.trim()),
      examples: formData.examples.split(",").map(item => item.trim()),
    };

    const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/leetcode-solutions";
console.log(BASE_PATH)
    const res = await fetch(`${BASE_PATH}/api/add-problem`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProblem),
    });

    if (res.ok) {
      alert("Problem added successfully!");
      setFormData({
        id: "",
        title: "",
        difficulty: "Easy",
        description: "",
        explanation: "",
        code: "",
        constraints: "",
        examples: "",
        category: "",
        dateSolved: new Date().toISOString().split("T")[0],
      });
    } else {
      alert("Failed to add problem");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Add New Problem
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder="Problem ID"
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <select
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <textarea
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          placeholder="Explanation"
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <textarea
          name="code"
          value={formData.code}
          onChange={handleChange}
          placeholder="Code"
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 font-mono"
        />
        <input
          type="text"
          name="constraints"
          value={formData.constraints}
          onChange={handleChange}
          placeholder="Constraints (comma-separated)"
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="examples"
          value={formData.examples}
          onChange={handleChange}
          placeholder="Examples (comma-separated)"
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="date"
          name="dateSolved"
          value={formData.dateSolved}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 dark:bg-blue-600 text-white p-2 rounded hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Add Problem
        </button>
      </form>
    </div>
  );
}
