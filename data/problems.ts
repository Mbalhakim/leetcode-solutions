import { Problem } from '@/types/problem';

export const problems: Problem[] = [
  {
    id: "roman-to-integer",
    title: "13. Roman to Integer",
    difficulty: "Easy",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M. Each of these symbols has a corresponding value.",
    explanation: `The function romanToInt converts a Roman numeral string to its integer equivalent by iterating through the string and checking the current and next Roman numeral values. 
    The key logic is to check if the current numeral is less than the next one. If so, it subtracts the current numeral from 
    the next one (since it's part of a subtraction pair like IV or IX); otherwise, it simply adds the value.`,
    code: `const romanToInt = (s: string): number => {
  const romanValues: { [key: string]: number } = { 
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 
    'C': 100, 'D': 500, 'M': 1000 
  };
  
  let total = 0;
  
  for(let i = 0; i < s.length; i++) {
    const current = romanValues[s[i]];
    const next = romanValues[s[i+1]] || 0;
    
    if (current < next) {
      total += next - current;
      i++;
    } else {
      total += current;
    }
  }
  return total;
};`,
examples: [
    {
      input: 's = III ',
      output: '3',
      explanation:" III = 3."
    },
    {
      input: 's = LVIII',
      output: '58',
      explanation: ' L = 50, V= 5, III = 3.'
    }
  ],
  constraints: [
    '1 <= s.length <= 15',
    's contains only the characters (I, V, X, L, C, D, M)',
    'It is guaranteed that s is a valid roman numeral in the range [1, 3999].',

  ],
    category: "Algorithms",
    dateSolved: "05-06-2023"
  },
  {
    id: "two-sum",
    title: "1. Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    
    explanation:
      "We use a hash map to store the numbers and their indices while iterating through the array. For each number, we calculate its complement (target minus the current number) and check if the complement exists in the map. If it does, we return the indices; otherwise, we store the current number in the map. This solution runs in O(n) time.",
    code: `const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
};`,
examples: [
    {
      input: 'nums = [2,7,11,15], target = ',
      output: '[0,1]',
      explanation:" Because nums[0] + nums[1] == 9, we return [0, 1]. "
    },
    {
      input: 'nums = [3,2,4], target = 6',
      output: '[1,2]',
    }
  ],
  constraints: [
    '2 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '-10^9 <= target <= 10^9',

  ],
    category: "Algorithms",
    dateSolved: "01-06-2023",
  },
  {
    id: "top-k-frequent-elements",
    title: "347. Top K Frequent Elements",
    difficulty: "Medium",
    description:
      "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    explanation: `To find the k most frequent elements, we can use a hash map to count the frequency of each element and then use a heap (priority queue) to get the top k elements. This approach ensures the time complexity is better than O(n log n).`,
    code: `const topKFrequent = (nums: number[], k: number): number[] => {
      const countMap = new Map<number, number>();
      nums.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));
      
      const sortedByFrequency = Array.from(countMap).sort((a, b) => b[1] - a[1]);
      
      return sortedByFrequency.slice(0, k).map(item => item[0]);
    };`,
    examples: [
      {
        input: 'nums = [1,1,1,2,2,3], k = 2',
        output: '[1, 2]',
        
      },
      {
        input: 'nums = [1], k = 1',
        output: '[1]',
      }
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      'k is in the range [1, the number of unique elements in the array]',
      'It is guaranteed that the answer is unique.'
    ],
    category: "Algorithms",
    dateSolved: "20-07-2023"
  },
  {
    id: "contains-duplicate",
    title: "217. Contains Duplicate",
    difficulty: "Easy",
    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    explanation: `To determine if an array contains duplicates, we can use a HashSet to store numbers as we iterate through the array. 
    If we encounter a number that is already in the HashSet, we return true; otherwise, we continue adding numbers to the set. 
    If the loop completes without finding duplicates, we return false. This approach ensures an O(n) time complexity.`,
    code: `const containsDuplicate = (nums: number[]): boolean => {
  const seen = new Set<number>();
  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};`,
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The element 1 occurs at the indices 0 and 3.",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "All elements are distinct.",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
    ],
    category: "Algorithms",
    dateSolved: "13-02-2024",
  },
  {
    id: "palindrome-number",
    title: "9. Palindrome Number",
    difficulty: "Easy",
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise.",
    explanation: `A palindrome number is a number that reads the same backward as forward. 
    To check if an integer is a palindrome, we can convert it to a string and compare it with its reverse. 
    Alternatively, we can reverse half of the number and check if it matches the original.`,
    code: `const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split("").reverse().join("");
};`,
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation: "From left to right, it reads -121. From right to left, it becomes 121-.",
      },
      {
        input: "x = 10",
        output: "false",
        explanation: "Reads 01 from right to left. Therefore it is not a palindrome.",
      },
    ],
    constraints: ["-2³¹ <= x <= 2³¹ - 1"],
    category: "Algorithms",
    dateSolved: "24-05-2024",
  },
  {
    id: "valid-anagram",
    title: "242. Valid Anagram",
    difficulty: "Easy",
    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    explanation: `An anagram is a word formed by rearranging the letters of another word. 
    To check if two strings are anagrams, we can sort them and compare if they are equal. 
    Another approach is to count the frequency of each character in both strings and compare the counts.`,
    code: `const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};`,
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: [
      "1 <= s.length, t.length <= 5 × 10⁴",
      "s and t consist of lowercase English letters.",
    ],
    category: "Algorithms",
    dateSolved: "19-07-2024",
  },
];