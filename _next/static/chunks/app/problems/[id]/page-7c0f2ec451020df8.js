(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{33158:(e,t,r)=>{Promise.resolve().then(r.bind(r,94270))},94270:(e,t,r)=>{"use strict";r.d(t,{default:()=>h});var n=r(95155),a=r(76046),s=r(53346);function l(e){let{explanation:t}=e;return(0,n.jsxs)("section",{className:"bg-background p-4 rounded-lg shadow border border-gray-200 dark:border-gray-800",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-foreground",children:"Explanation"}),(0,n.jsx)("p",{className:"text-foreground/80",children:t})]})}var i=r(64566),o=r(15122);function d(e){let{code:t}=e;return(0,n.jsxs)("section",{className:"bg-gray-900 text-white p-4 rounded-lg shadow",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-blue-400",children:"Code"}),(0,n.jsx)(i.A,{language:"typescript",style:o.A,children:t})]})}var c=r(12115);let u=e=>{let t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3},r=0;for(let n=0;n<e.length;n++){let a=t[e[n]],s=t[e[n+1]]||0;a<s?(r+=s-a,n++):r+=a}return r};function m(){let[e,t]=(0,c.useState)(""),[r,a]=(0,c.useState)(null);return(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100",children:"Live Converter"}),(0,n.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value.toUpperCase()),placeholder:"Enter Roman numeral",className:"flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}),(0,n.jsx)("button",{onClick:()=>{/^[IVXLCDM]+$/i.test(e)?a(u(e.toUpperCase())):(a(null),alert("Invalid Roman numeral. Please use only these characters: I, V, X, L, C, D, M."))},className:"bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors",children:"Convert"})]}),(0,n.jsxs)("div",{className:"mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded",children:[(0,n.jsx)("h3",{className:"text-lg font-medium text-gray-800 dark:text-gray-100 mb-2",children:"Valid Roman Numerals:"}),(0,n.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"I"})," = 1"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"V"})," = 5"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"X"})," = 10"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"L"})," = 50"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"C"})," = 100"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"D"})," = 500"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"M"})," = 1000"]})]})]}),null!==r&&(0,n.jsx)("div",{className:"mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded",children:(0,n.jsxs)("p",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100",children:["Result: ",(0,n.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:r})]})})]})}let g=()=>{let[e,t]=(0,c.useState)(""),[r,a]=(0,c.useState)(""),[s,l]=(0,c.useState)(null),i=(e,t)=>{let r=new Map;for(let n=0;n<e.length;n++){let a=t-e[n];if(r.has(a))return[r.get(a),n];r.set(e[n],n)}return[]};return(0,n.jsxs)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded shadow",children:[(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault();let n=e.split(",").map(e=>parseInt(e.trim(),10)).filter(e=>!isNaN(e)),a=parseInt(r,10);if(isNaN(a)){l([]);return}l(i(n,a))},children:[(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{className:"block mb-1 font-medium text-gray-800 dark:text-gray-200",children:"Numbers (comma separated):"}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600",placeholder:"e.g., 2,7,11,15"})]}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{className:"block mb-1 font-medium text-gray-800 dark:text-gray-200",children:"Target:"}),(0,n.jsx)("input",{type:"number",value:r,onChange:e=>a(e.target.value),className:"border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"})]}),(0,n.jsx)("button",{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-400",children:"Compute Two Sum"})]}),s&&s.length>0&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:"Result Indices:"}),(0,n.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:s.join(", ")})]}),s&&0===s.length&&(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:"No valid pair found."})})]})};function h(){let e=(0,a.useParams)();if(!e||"string"!=typeof e.id)return(0,a.notFound)();let t=s.B.find(t=>t.id===e.id);return t?(0,n.jsxs)("main",{className:"min-h-screen p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:t.title}),(0,n.jsx)("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.description}),"two-sum"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(g,{})]}),"roman-to-integer"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(m,{})]}),(0,n.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,n.jsx)(l,{explanation:t.explanation}),(0,n.jsx)(d,{code:t.code})]})]}):(0,a.notFound)()}},53346:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});let n=[{id:"roman-to-integer",title:"13. Roman to Integer",difficulty:"Easy",description:"Convert Roman numerals to integers",explanation:"The function romanToInt converts a Roman numeral string to its integer equivalent by iterating through the string and checking the current and next Roman numeral values. \n    The key logic is to check if the current numeral is less than the next one. If so, it subtracts the current numeral from \n    the next one (since it's part of a subtraction pair like IV or IX); otherwise, it simply adds the value.",code:"const romanToInt = (s: string): number => {\n  const romanValues: { [key: string]: number } = { \n    'I': 1, 'V': 5, 'X': 10, 'L': 50, \n    'C': 100, 'D': 500, 'M': 1000 \n  };\n  \n  let total = 0;\n  \n  for(let i = 0; i < s.length; i++) {\n    const current = romanValues[s[i]];\n    const next = romanValues[s[i+1]] || 0;\n    \n    if (current < next) {\n      total += next - current;\n      i++;\n    } else {\n      total += current;\n    }\n  }\n  return total;\n};",category:"Algorithms",dateSolved:"2024-03-15"},{id:"two-sum",title:"1. Two Sum",difficulty:"Easy",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",explanation:"We use a hash map to store the numbers and their indices while iterating through the array. For each number, we calculate its complement (target minus the current number) and check if the complement exists in the map. If it does, we return the indices; otherwise, we store the current number in the map. This solution runs in O(n) time.",code:"const twoSum = (nums: number[], target: number): number[] => {\n  const map = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n};",category:"Algorithms",dateSolved:"2025-02-03"}]}},e=>{var t=t=>e(e.s=t);e.O(0,[498,441,517,358],()=>t(33158)),_N_E=e.O()}]);