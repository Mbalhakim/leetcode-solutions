// components/Navbar.tsx
'use client';

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="w-full p-4 bg-background border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          LeetCode Solutions
        </Link>
        
        <div className="flex items-center gap-4">
          <Link
            href="/add-problem"
            className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-sm"
          >
            Add Problem
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}