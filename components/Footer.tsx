"use client";

import { FaGithub } from "react-icons/fa"; 
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-4 bg-background border-t border-gray-200 dark:border-gray-800 text-center text-muted-foreground flex flex-col items-center space-y-2">
      <p>© {new Date().getFullYear()} LeetCode Solutions by mbalhakim. All rights reserved.</p>
      
      {/* GitHub Icon with Link */}
      <Link
        href="https://github.com/Mbalhakim/leetcode-solutions.git" 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition"
      >
        <FaGithub className="w-6 h-6" />
        <span>View on GitHub</span>
      </Link>
    </footer>
  );
}
