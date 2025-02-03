"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { problems } from "@/data/problems";

export default function EditProblemClient() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

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

  useEffect(() => {
    if (id) {
      const problem = problems.find(p => p.id === id);
      if (problem) {
        setFormData(problem);
      } else {
        router.push("/");
      }
    }
  }, [id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "/leetcode-solutions";
    const res = await fetch(`${BASE_PATH}/api/update-problem`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Problem updated successfully!");
      router.push("/");
    } else {
      alert("Failed to update problem");
    }
  };

  // Keep the rest of your existing client-side logic here
  // (handleChange, handleSubmit, delete functionality, etc.)

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
        Edit Problem
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="id"
          value={formData.id}
          disabled
          className="w-full p-2 border rounded bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:border-gray-700"
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
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
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <textarea
          name="explanation"
          value={formData.explanation}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <textarea
          name="code"
          value={formData.code}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 font-mono"
        />
        <input
          type="text"
          name="constraints"
          value={formData.constraints}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="examples"
          value={formData.examples}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
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
          Update Problem
        </button>
        <button
          onClick={async () => {
            const res = await fetch("/api/delete-problem", {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id: formData.id }),
            });
            if (res.ok) {
              alert("Problem deleted successfully!");
              router.push("/");
            } else {
              alert("Failed to delete problem");
            }
          }}
          className="w-full bg-red-500 dark:bg-red-600 text-white p-2 rounded hover:bg-red-600 dark:hover:bg-red-700 transition-colors"
        >
          Delete Problem
        </button>
      </form>
    </div>
  );
}