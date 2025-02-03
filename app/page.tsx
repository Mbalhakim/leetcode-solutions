"use client";
import { useState, useEffect } from "react";
import { problems } from "@/data/problems";
import { Problem } from "@/types/problem";
import { useRouter } from "next/navigation"; // Needed for manual navigation
import Link from "next/link";
export default function Home() {
  const [filter, setFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBookmarked, setShowBookmarked] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<string[]>([]); // ✅ Start with empty array

  const router = useRouter();

  // ✅ Load bookmarks from localStorage AFTER the component mounts (Fix Hydration Issue)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBookmarks = JSON.parse(
        localStorage.getItem("bookmarked") || "[]"
      );
      setBookmarked(storedBookmarks);
    }
  }, []);

  const toggleBookmark = (id: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent navigation
    event.preventDefault(); // Prevent default action

    const updated = bookmarked.includes(id)
      ? bookmarked.filter((p) => p !== id)
      : [...bookmarked, id];

    setBookmarked(updated);
    localStorage.setItem("bookmarked", JSON.stringify(updated));
  };

  // Filter problems based on search query and difficulty
  const filteredProblems = problems.filter(
    (problem: Problem) =>
      (filter === "All" || problem.difficulty === filter) &&
      (problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        problem.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Show only bookmarked problems when button is toggled
  const displayedProblems = showBookmarked
    ? problems.filter((p) => bookmarked.includes(p.id))
    : filteredProblems;

  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto bg-white dark:bg-gray-900">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          LeetCode Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          A collection of TypeScript solutions to various LeetCode problems
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search problems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700 w-full sm:w-64"
          />

          {/* Show Bookmarked Button */}
          <button
            onClick={() => setShowBookmarked(!showBookmarked)}
            className="p-2 border rounded-md transition 
            bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {showBookmarked ? "All Problems🎯" : "Show Bookmarked⭐"}
          </button>

          {/* Difficulty Filter */}
          <div className="flex items-center gap-3">
            <label className="text-gray-800 dark:text-gray-100 font-medium">
              Filter by Difficulty:
            </label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="p-2 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700"
            >
              <option value="All">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProblems.map((problem: Problem) => (
          <div
            key={problem.id}
            onClick={() => router.push(`/problems/${problem.id}`)}
            className="p-6 rounded-lg relative shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer"
          >
           
           
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {problem.title}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  problem.difficulty === "Easy"
                    ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                    : problem.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400"
                    : "bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400"
                }`}
              >
                {problem.difficulty}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              {problem.description}
            </p>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Solved: {problem.dateSolved}
            </div>
             {/* Add Edit button */}
             

            {/* Bookmark Button - Clickable Without Navigating */}
            <button
              onClick={(e) => toggleBookmark(problem.id, e)}
              className="mt-3 p-2 rounded-md text-yellow-500 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            >
              {bookmarked.includes(problem.id) ? "⭐ Bookmarked" : "☆ Bookmark"}
            </button>

            <Link
              href={`/edit-problem/${problem.id}`}
              onClick={(e) => e.stopPropagation()}
              className=" ml-3 text-sm bg-gray-200 dark:bg-gray-700 p-2  rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Edit
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
