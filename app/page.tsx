import Link from 'next/link';
import { problems } from '@/data/problems';
import { Problem } from '@/types/problem';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-6xl mx-auto bg-white dark:bg-gray-900">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          LeetCode Solutions
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          A collection of TypeScript solutions to various LeetCode problems
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem: Problem) => (
          <Link 
            key={problem.id}
            href={`/problems/${problem.id}`}
            className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {problem.title}
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm ${
                problem.difficulty === 'Easy' ? 
                  'bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400' :
                problem.difficulty === 'Medium' ? 
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-400' :
                  'bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-400'
              }`}>
                {problem.difficulty}
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Solved: {problem.dateSolved}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
