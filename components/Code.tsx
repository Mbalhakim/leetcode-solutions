"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa"; 

type CodeProps = {
  code: string;
};

export default function Code({ code }: CodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section className="relative bg-gray-900 text-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-blue-400">Code</h2>
        <button
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-md transition"
        >
          {copied ? (
            <>
              <FaCheck className="w-4 h-4 text-green-400" /> <span>Copied</span>
            </>
          ) : (
            <>
              <FaCopy className="w-4 h-4" /> <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </section>
  );
}
