"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { problems } from "@/data/problems";
import { Problem } from "@/types/problem";
import Explanation from "@/components/Explanation";
import Code from "@/components/Code";
import Examples from "@/components/Examples";
import Constraints from "@/components/Constraints";
import RomanConverter from "@/components/RomanConverter";
import TwoSum from "./TwoSum";
import TopKFrequentElements from "./TopKFrequentElements";
import ContainsDuplicate from "./ContainsDuplicate";
export default function ProblemPage() {
  const params = useParams();
  if (!params || typeof params.id !== "string") {
    return notFound();
  }

  const problem: Problem | undefined = problems.find((p) => p.id === params.id);
  if (!problem) return notFound();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {problem.title}
      </h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {problem.description}
      </p>

      {/* Problem-Specific Interactive Components */}
      {problem.id === "two-sum" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <TwoSum />
        </div>
      )}

      {problem.id === "roman-to-integer" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <RomanConverter />
        </div>
      )}

      {problem.id === "top-k-frequent-elements" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <TopKFrequentElements />
        </div>
      )}

      {/* Examples Section */}
      {problem.examples && problem.examples.length > 0 && (
        <div className="mt-6">
          <Examples examples={problem.examples} />
        </div>
      )}

      {/* Constraints Section */}
      {problem.constraints && problem.constraints.length > 0 && (
        <div className="mt-6">
          <Constraints constraints={problem.constraints} />
        </div>
      )}

      {problem.id === "contains-duplicate" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <ContainsDuplicate />
        </div>
      )}

      {/* Explanation & Code Section */}
      <div className="mt-6 space-y-4">
        <Explanation explanation={problem.explanation} />
        <Code code={problem.code} />
      </div>
    </main>
  );
}
