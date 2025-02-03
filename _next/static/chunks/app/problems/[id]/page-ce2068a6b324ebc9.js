(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[683],{33158:(e,t,r)=>{Promise.resolve().then(r.bind(r,92744))},92744:(e,t,r)=>{"use strict";r.d(t,{default:()=>C});var n=r(95155),a=r(76046),s=r(53346);function l(e){let{explanation:t}=e;return(0,n.jsxs)("section",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-foreground",children:"Explanation"}),(0,n.jsx)("p",{className:"text-foreground/80",children:t})]})}var i=r(12115),o=r(64566),d=r(15122),u=r(11536);function c(e){let{code:t}=e,[r,a]=(0,i.useState)(!1),s=async()=>{try{await navigator.clipboard.writeText(t),a(!0),setTimeout(()=>a(!1),2e3)}catch(e){console.error("Failed to copy text: ",e)}};return(0,n.jsxs)("section",{className:"relative bg-gray-900 text-white p-4 rounded-lg shadow",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold text-blue-400",children:"Code"}),(0,n.jsx)("button",{onClick:s,className:"flex items-center space-x-2 px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-md transition",children:r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.CMH,{className:"w-4 h-4 text-green-400"})," ",(0,n.jsx)("span",{children:"Copied"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u.paH,{className:"w-4 h-4"})," ",(0,n.jsx)("span",{children:"Copy"})]})})]}),(0,n.jsx)(o.A,{language:"typescript",style:d.A,children:t})]})}let m=e=>{let{examples:t}=e;return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Examples"}),t.map((e,t)=>(0,n.jsxs)("div",{className:"mb-4 p-3 border rounded-lg bg-white dark:bg-gray-900",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Input:"})," ",e.input]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Output:"})," ",e.output]}),e.explanation&&(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"Explanation:"})," ",e.explanation]})]},t))]})},g=e=>{let{constraints:t}=e;return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Constraints"}),(0,n.jsx)("ul",{className:"list-disc pl-5 text-gray-800 dark:text-gray-300",children:t.map((e,t)=>(0,n.jsx)("li",{className:"text-sm",children:e},t))})]})},h=e=>{let t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3},r=0;for(let n=0;n<e.length;n++){let a=t[e[n]],s=t[e[n+1]]||0;a<s?(r+=s-a,n++):r+=a}return r};function x(){let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(null);return(0,n.jsxs)("div",{className:"bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100",children:"Live Converter"}),(0,n.jsxs)("div",{className:"flex gap-4 mb-4",children:[(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value.toUpperCase()),placeholder:"Enter Roman numeral",className:"flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}),(0,n.jsx)("button",{onClick:()=>{/^[IVXLCDM]+$/i.test(e)?a(h(e.toUpperCase())):(a(null),alert("Invalid Roman numeral. Please use only these characters: I, V, X, L, C, D, M."))},className:"bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors",children:"Convert"})]}),(0,n.jsxs)("div",{className:"mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded",children:[(0,n.jsx)("h3",{className:"text-lg font-medium text-gray-800 dark:text-gray-100 mb-2",children:"Valid Roman Numerals:"}),(0,n.jsxs)("ul",{className:"list-disc list-inside text-gray-700 dark:text-gray-300",children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"I"})," = 1"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"V"})," = 5"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"X"})," = 10"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"L"})," = 50"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"C"})," = 100"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"D"})," = 500"]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("strong",{children:"M"})," = 1000"]})]})]}),null!==r&&(0,n.jsx)("div",{className:"mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded",children:(0,n.jsxs)("p",{className:"text-lg font-semibold text-gray-800 dark:text-gray-100",children:["Result: ",(0,n.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:r})]})})]})}let p=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)(null),o=(e,t)=>{let r=new Map;for(let n=0;n<e.length;n++){let a=t-e[n];if(r.has(a))return[r.get(a),n];r.set(e[n],n)}return[]};return(0,n.jsxs)("div",{className:"p-4 bg-white dark:bg-gray-800 rounded shadow",children:[(0,n.jsxs)("form",{onSubmit:t=>{t.preventDefault();let n=e.split(",").map(e=>parseInt(e.trim(),10)).filter(e=>!isNaN(e)),a=parseInt(r,10);if(isNaN(a)){l([]);return}l(o(n,a))},children:[(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{className:"block mb-1 font-medium text-gray-800 dark:text-gray-200",children:"Numbers (comma separated):"}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600",placeholder:"e.g., 2,7,11,15"})]}),(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("label",{className:"block mb-1 font-medium text-gray-800 dark:text-gray-200",children:"Target:"}),(0,n.jsx)("input",{type:"number",value:r,onChange:e=>a(e.target.value),className:"border p-2 rounded w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-600"})]}),(0,n.jsx)("button",{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 dark:hover:bg-blue-400",children:"Compute Two Sum"})]}),s&&s.length>0&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("p",{className:"font-medium text-gray-800 dark:text-gray-200",children:"Result Indices:"}),(0,n.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:s.join(", ")})]}),s&&0===s.length&&(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)("p",{className:"text-gray-800 dark:text-gray-200",children:"No valid pair found."})})]})},b=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(0),[s,l]=(0,i.useState)(null),o=(e,t)=>{let r=new Map;return e.forEach(e=>r.set(e,(r.get(e)||0)+1)),Array.from(r).sort((e,t)=>t[1]-e[1]).slice(0,t).map(e=>e[0])};return(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",children:"Enter Numbers (comma separated)"}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Example: 1, 1, 1, 2, 2, 3",className:"w-full p-2 border rounded bg-background text-foreground"})]}),(0,n.jsxs)("div",{className:"mb-4",children:[(0,n.jsx)("label",{className:"block text-gray-700 dark:text-gray-300 mb-2",children:"Enter k"}),(0,n.jsx)("input",{type:"number",value:r,onChange:e=>a(Number(e.target.value)),className:"w-full p-2 border rounded bg-background text-foreground"})]}),(0,n.jsx)("button",{onClick:()=>{l(o(e.split(",").map(e=>parseInt(e.trim(),10)),r))},className:"bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors",children:"Get Top K Frequent"}),s&&(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)("h3",{className:"text-xl font-semibold text-gray-800 dark:text-gray-100",children:"Result: "}),(0,n.jsx)("p",{children:JSON.stringify(s)})]})]})},y=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(null),s=e=>{let t=new Set;for(let r of e){if(t.has(r))return!0;t.add(r)}return!1};return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Try it Yourself"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter an array (e.g., [1,2,3,1])",value:e,onChange:e=>t(e.target.value),className:"w-full p-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("button",{onClick:()=>{try{let t=JSON.parse(e);if(!Array.isArray(t))throw Error();a(s(t).toString())}catch(e){a("Invalid input. Please enter a valid array of numbers.")}},className:"mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Check"}),null!==r&&(0,n.jsxs)("div",{className:"mt-3 p-2 border rounded-md bg-white dark:bg-gray-900",children:[(0,n.jsx)("strong",{children:"Result:"})," ",r]})]})},f=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(null),s=e=>{if(e<0)return!1;let t=e.toString();return t===t.split("").reverse().join("")};return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Try it Yourself"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter an integer (e.g., 121)",value:e,onChange:e=>t(e.target.value),className:"w-full p-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("button",{onClick:()=>{let t=parseInt(e,10);isNaN(t)?a("Invalid input. Please enter a valid integer."):a(s(t).toString())},className:"mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Check"}),null!==r&&(0,n.jsxs)("div",{className:"mt-3 p-2 border rounded-md bg-white dark:bg-gray-900",children:[(0,n.jsx)("strong",{children:"Result:"})," ",r]})]})},j=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)(null),o=(e,t)=>e.length===t.length&&e.split("").sort().join("")===t.split("").sort().join("");return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Try it Yourself"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter first string (s)",value:e,onChange:e=>t(e.target.value),className:"w-full p-2 mb-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter second string (t)",value:r,onChange:e=>a(e.target.value),className:"w-full p-2 mb-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("button",{onClick:()=>{if(!e||!r){l("Please enter both strings.");return}l(o(e,r).toString())},className:"mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Check"}),null!==s&&(0,n.jsxs)("div",{className:"mt-3 p-2 border rounded-md bg-white dark:bg-gray-900",children:[(0,n.jsx)("strong",{children:"Result:"})," ",s]})]})},v=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(null),s=e=>{for(let t of e)if(t===t.split("").reverse().join(""))return t;return""};return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Try it Yourself"}),(0,n.jsx)("input",{type:"text",placeholder:'Enter an array of words (e.g., ["abc","car","ada","racecar"])',value:e,onChange:e=>t(e.target.value),className:"w-full p-2 mb-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("button",{onClick:()=>{try{let t=JSON.parse(e);if(!Array.isArray(t)||!t.every(e=>"string"==typeof e))throw Error();a(s(t))}catch(e){a("Invalid input. Please enter an array of lowercase strings.")}},className:"mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Check"}),null!==r&&(0,n.jsxs)("div",{className:"mt-3 p-2 border rounded-md bg-white dark:bg-gray-900",children:[(0,n.jsx)("strong",{children:"Result:"})," ",r]})]})};class w{constructor(e,t){this.val=null!=e?e:0,this.next=null!=t?t:null}}let N=(e,t)=>{let r=new w,n=r,a=0;for(;e||t||a;){var s,l,i,o;let r=(null!==(s=null==e?void 0:e.val)&&void 0!==s?s:0)+(null!==(l=null==t?void 0:t.val)&&void 0!==l?l:0)+a;a=Math.floor(r/10),n.next=new w(r%10),n=n.next,e=null!==(i=null==e?void 0:e.next)&&void 0!==i?i:null,t=null!==(o=null==t?void 0:t.next)&&void 0!==o?o:null}return r.next},k=e=>{let t=new w,r=t;for(let t of e)r.next=new w(t),r=r.next;return t.next},S=e=>{let t=[];for(;e;)t.push(e.val),e=e.next;return t},I=()=>{let[e,t]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)(null);return(0,n.jsxs)("div",{className:"border p-4 rounded-lg bg-gray-100 dark:bg-gray-800",children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Try it Yourself"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter first list (e.g., [2,4,3])",value:e,onChange:e=>t(e.target.value),className:"w-full p-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("input",{type:"text",placeholder:"Enter second list (e.g., [5,6,4])",value:r,onChange:e=>a(e.target.value),className:"w-full p-2 mt-2 border rounded-md bg-white dark:bg-gray-900"}),(0,n.jsx)("button",{onClick:()=>{try{let t=JSON.parse(e),n=JSON.parse(r);if(!Array.isArray(t)||!Array.isArray(n))throw Error("Inputs must be arrays of numbers.");let a=k(t),s=k(n),i=N(a,s);l(S(i))}catch(e){l(null)}},className:"mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600",children:"Compute"}),null!==s&&(0,n.jsxs)("div",{className:"mt-3 p-2 border rounded-md bg-white dark:bg-gray-900",children:[(0,n.jsx)("strong",{children:"Result:"})," ",JSON.stringify(s)]})]})};function C(){let e=(0,a.useParams)();if(!e||"string"!=typeof e.id)return(0,a.notFound)();let t=s.B.find(t=>t.id===e.id);return t?(0,n.jsxs)("main",{className:"min-h-screen p-8 max-w-4xl mx-auto bg-white dark:bg-gray-900",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-gray-800 dark:text-gray-100",children:t.title}),(0,n.jsx)("p",{className:"mt-2 text-gray-700 dark:text-gray-300",children:t.description}),"two-sum"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(p,{})]}),"roman-to-integer"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(x,{})]}),"valid-anagram"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(j,{})]}),"top-k-frequent-elements"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(b,{})]}),"find-first-palindromic-string"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(v,{})]}),"add-two-numbers"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(I,{})]}),t.examples&&t.examples.length>0&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)(m,{examples:t.examples})}),t.constraints&&t.constraints.length>0&&(0,n.jsx)("div",{className:"mt-6",children:(0,n.jsx)(g,{constraints:t.constraints})}),"contains-duplicate"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(y,{})]}),"palindrome-number"===t.id&&(0,n.jsxs)("div",{className:"mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100",children:"Try it Yourself"}),(0,n.jsx)(f,{})]}),(0,n.jsxs)("div",{className:"mt-6 space-y-4",children:[(0,n.jsx)(l,{explanation:t.explanation}),(0,n.jsx)(c,{code:t.code})]})]}):(0,a.notFound)()}},53346:(e,t,r)=>{"use strict";r.d(t,{B:()=>n});let n=[{id:"roman-to-integer",title:"13. Roman to Integer",difficulty:"Easy",description:"Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M. Each of these symbols has a corresponding value.",explanation:"The function romanToInt converts a Roman numeral string to its integer equivalent by iterating through the string and checking the current and next Roman numeral values. \n    The key logic is to check if the current numeral is less than the next one. If so, it subtracts the current numeral from \n    the next one (since it's part of a subtraction pair like IV or IX); otherwise, it simply adds the value.",code:"const romanToInt = (s: string): number => {\n  const romanValues: { [key: string]: number } = { \n    'I': 1, 'V': 5, 'X': 10, 'L': 50, \n    'C': 100, 'D': 500, 'M': 1000 \n  };\n  \n  let total = 0;\n  \n  for(let i = 0; i < s.length; i++) {\n    const current = romanValues[s[i]];\n    const next = romanValues[s[i+1]] || 0;\n    \n    if (current < next) {\n      total += next - current;\n      i++;\n    } else {\n      total += current;\n    }\n  }\n  return total;\n};",examples:[{input:"s = III ",output:"3",explanation:" III = 3."},{input:"s = LVIII",output:"58",explanation:" L = 50, V= 5, III = 3."}],constraints:["1 <= s.length <= 15","s contains only the characters (I, V, X, L, C, D, M)","It is guaranteed that s is a valid roman numeral in the range [1, 3999]."],category:"Algorithms",dateSolved:"05-06-2023"},{id:"two-sum",title:"1. Two Sum",difficulty:"Easy",description:"Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",explanation:"We use a hash map to store the numbers and their indices while iterating through the array. For each number, we calculate its complement (target minus the current number) and check if the complement exists in the map. If it does, we return the indices; otherwise, we store the current number in the map. This solution runs in O(n) time.",code:"const twoSum = (nums: number[], target: number): number[] => {\n  const map = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n};",examples:[{input:"nums = [2,7,11,15], target = ",output:"[0,1]",explanation:" Because nums[0] + nums[1] == 9, we return [0, 1]. "},{input:"nums = [3,2,4], target = 6",output:"[1,2]"}],constraints:["2 <= nums.length <= 10^4","-10^9 <= nums[i] <= 10^9","-10^9 <= target <= 10^9"],category:"Algorithms",dateSolved:"01-06-2023"},{id:"top-k-frequent-elements",title:"347. Top K Frequent Elements",difficulty:"Medium",description:"Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",explanation:"To find the k most frequent elements, we can use a hash map to count the frequency of each element and then use a heap (priority queue) to get the top k elements. This approach ensures the time complexity is better than O(n log n).",code:"const topKFrequent = (nums: number[], k: number): number[] => {\n      const countMap = new Map<number, number>();\n      nums.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));\n      \n      const sortedByFrequency = Array.from(countMap).sort((a, b) => b[1] - a[1]);\n      \n      return sortedByFrequency.slice(0, k).map(item => item[0]);\n    };",examples:[{input:"nums = [1,1,1,2,2,3], k = 2",output:"[1, 2]"},{input:"nums = [1], k = 1",output:"[1]"}],constraints:["1 <= nums.length <= 10^5","-10^4 <= nums[i] <= 10^4","k is in the range [1, the number of unique elements in the array]","It is guaranteed that the answer is unique."],category:"Algorithms",dateSolved:"20-07-2023"},{id:"contains-duplicate",title:"217. Contains Duplicate",difficulty:"Easy",description:"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",explanation:"To determine if an array contains duplicates, we can use a HashSet to store numbers as we iterate through the array. \n    If we encounter a number that is already in the HashSet, we return true; otherwise, we continue adding numbers to the set. \n    If the loop completes without finding duplicates, we return false. This approach ensures an O(n) time complexity.",code:"const containsDuplicate = (nums: number[]): boolean => {\n  const seen = new Set<number>();\n  for (let num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n};",examples:[{input:"nums = [1,2,3,1]",output:"true",explanation:"The element 1 occurs at the indices 0 and 3."},{input:"nums = [1,2,3,4]",output:"false",explanation:"All elements are distinct."},{input:"nums = [1,1,1,3,3,4,3,2,4,2]",output:"true"}],constraints:["1 <= nums.length <= 10^5","-10^9 <= nums[i] <= 10^9"],category:"Algorithms",dateSolved:"13-02-2024"},{id:"palindrome-number",title:"9. Palindrome Number",difficulty:"Easy",description:"Given an integer x, return true if x is a palindrome, and false otherwise.",explanation:"A palindrome number is a number that reads the same backward as forward. \n    To check if an integer is a palindrome, we can convert it to a string and compare it with its reverse. \n    Alternatively, we can reverse half of the number and check if it matches the original.",code:'const isPalindrome = (x: number): boolean => {\n  if (x < 0) return false;\n  const str = x.toString();\n  return str === str.split("").reverse().join("");\n};',examples:[{input:"x = 121",output:"true",explanation:"121 reads as 121 from left to right and from right to left."},{input:"x = -121",output:"false",explanation:"From left to right, it reads -121. From right to left, it becomes 121-."},{input:"x = 10",output:"false",explanation:"Reads 01 from right to left. Therefore it is not a palindrome."}],constraints:["-2\xb3\xb9 <= x <= 2\xb3\xb9 - 1"],category:"Algorithms",dateSolved:"24-05-2024"},{id:"valid-anagram",title:"242. Valid Anagram",difficulty:"Easy",description:"Given two strings s and t, return true if t is an anagram of s, and false otherwise.",explanation:"An anagram is a word formed by rearranging the letters of another word. \n    To check if two strings are anagrams, we can sort them and compare if they are equal. \n    Another approach is to count the frequency of each character in both strings and compare the counts.",code:'const isAnagram = (s: string, t: string): boolean => {\n  if (s.length !== t.length) return false;\n  return s.split("").sort().join("") === t.split("").sort().join("");\n};',examples:[{input:'s = "anagram", t = "nagaram"',output:"true"},{input:'s = "rat", t = "car"',output:"false"}],constraints:["1 <= s.length, t.length <= 5 \xd7 10⁴","s and t consist of lowercase English letters."],category:"Algorithms",dateSolved:"19-07-2024"},{id:"find-first-palindromic-string",title:"2108. Find First Palindromic String in the Array",difficulty:"Easy",description:'Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".',explanation:"A string is palindromic if it reads the same forward and backward. \n    To find the first palindromic string in an array, we iterate through the array and check each string.\n    If a string is a palindrome, we return it immediately. If none are found, we return an empty string.",code:'const firstPalindrome = (words: string[]): string => {\n  for (const word of words) {\n    if (word === word.split("").reverse().join("")) return word;\n  }\n  return "";\n};',examples:[{input:'words = ["abc","car","ada","racecar","cool"]',output:'"ada"',explanation:'The first palindromic string is "ada".'},{input:'words = ["notapalindrome","racecar"]',output:'"racecar"',explanation:'The first and only palindromic string is "racecar".'},{input:'words = ["def","ghi"]',output:'""',explanation:"There are no palindromic strings, so the empty string is returned."}],constraints:["1 <= words.length <= 100","1 <= words[i].length <= 100","words[i] consists only of lowercase English letters."],category:"Algorithms",dateSolved:"23-05-204"},{id:"add-two-numbers",title:"2. Add Two Numbers",difficulty:"Medium",description:"You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",explanation:"We traverse both linked lists, adding corresponding nodes along with a carry value. If one list is shorter, we continue with the longer one while keeping track of the carry. Finally, if there is a carry left, we add an extra node.",code:"class ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val?: number, next?: ListNode | null) {\n    this.val = val ?? 0;\n    this.next = next ?? null;\n  }\n}\n\nconst addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {\n  let dummy = new ListNode();\n  let current = dummy;\n  let carry = 0;\n\n  while (l1 || l2 || carry) {\n    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;\n    carry = Math.floor(sum / 10);\n    current.next = new ListNode(sum % 10);\n    current = current.next;\n    l1 = l1?.next ?? null;\n    l2 = l2?.next ?? null;\n  }\n\n  return dummy.next;\n};",examples:[{input:"l1 = [2,4,3], l2 = [5,6,4]",output:"[7,0,8]",explanation:"342 + 465 = 807."},{input:"l1 = [0], l2 = [0]",output:"[0]"},{input:"l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",output:"[8,9,9,9,0,0,0,1]"}],constraints:["The number of nodes in each linked list is in the range [1, 100].","0 <= Node.val <= 9","It is guaranteed that the list represents a number that does not have leading zeros."],category:"Linked List",dateSolved:"02-02-2025"}]}},e=>{var t=t=>e(e.s=t);e.O(0,[711,696,441,517,358],()=>t(33158)),_N_E=e.O()}]);