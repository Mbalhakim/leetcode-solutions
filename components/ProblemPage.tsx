'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { problems } from '@/data/problems';
import { Problem } from '@/types/problem';
import Explanation from '@/components/Explanation';
import Code from '@/components/Code';
import RomanConverter from '@/components/RomanConverter'; // Import RomanConverter
import TwoSum from './TwoSum';

export default function ProblemPage() {
  const params = useParams();
  if (!params || typeof params.id !== 'string') {
    return notFound();
  }

  const problem: Problem | undefined = problems.find(p => p.id === params.id);
  if (!problem) return notFound();

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        {problem.title}
      </h1>
      <p className="mt-2 text-gray-700 dark:text-gray-300">
        {problem.description}
      </p>
      
      {problem.id === "two-sum" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <TwoSum />
        </div>
      )}
      
      {/* Show RomanConverter ONLY if the problem is "roman-to-integer" */}
      {problem.id === "roman-to-integer" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Try it Yourself
          </h2>
          <RomanConverter />
        </div>
      )}

      <div className="mt-6 space-y-4">
        <Explanation explanation={problem.explanation} />
        <Code code={problem.code} />
      </div>
    </main>
  );
}
