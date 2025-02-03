import { Problem } from '@/types/problem';

export const problems: Problem[] = [
  {
    "id": "roman-to-integer",
    "title": "13. Roman to Integer",
    "difficulty": "Easy",
    "description": "Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M. Each of these symbols has a corresponding value.",
    "explanation": "The function romanToInt converts a Roman numeral string to its integer equivalent by iterating through the string and checking the current and next Roman numeral values. \n    The key logic is to check if the current numeral is less than the next one. If so, it subtracts the current numeral from \n    the next one (since it's part of a subtraction pair like IV or IX); otherwise, it simply adds the value.",
    "code": "const romanToInt = (s: string): number => {\n  const romanValues: { [key: string]: number } = { \n    'I': 1, 'V': 5, 'X': 10, 'L': 50, \n    'C': 100, 'D': 500, 'M': 1000 \n  };\n  \n  let total = 0;\n  \n  for(let i = 0; i < s.length; i++) {\n    const current = romanValues[s[i]];\n    const next = romanValues[s[i+1]] || 0;\n    \n    if (current < next) {\n      total += next - current;\n      i++;\n    } else {\n      total += current;\n    }\n  }\n  return total;\n};",
    "examples": [
      {
        "input": "s = III ",
        "output": "3",
        "explanation": " III = 3."
      },
      {
        "input": "s = LVIII",
        "output": "58",
        "explanation": " L = 50, V= 5, III = 3."
      }
    ],
    "constraints": [
      "1 <= s.length <= 15",
      "s contains only the characters (I, V, X, L, C, D, M)",
      "It is guaranteed that s is a valid roman numeral in the range [1, 3999]."
    ],
    "category": "Algorithms",
    "dateSolved": "05-06-2023"
  },
  {
    "id": "two-sum",
    "title": "1. Two Sum",
    "difficulty": "Easy",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "explanation": "We use a hash map to store the numbers and their indices while iterating through the array. For each number, we calculate its complement (target minus the current number) and check if the complement exists in the map. If it does, we return the indices; otherwise, we store the current number in the map. This solution runs in O(n) time.",
    "code": "const twoSum = (nums: number[], target: number): number[] => {\n  const map = new Map<number, number>();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement)!, i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n};",
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = ",
        "output": "[0,1]",
        "explanation": " Because nums[0] + nums[1] == 9, we return [0, 1]. "
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      }
    ],
    "constraints": [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9"
    ],
    "category": "Algorithms",
    "dateSolved": "01-06-2023"
  },
  {
    "id": "top-k-frequent-elements",
    "title": "347. Top K Frequent Elements",
    "difficulty": "Medium",
    "description": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "explanation": "To find the k most frequent elements, we can use a hash map to count the frequency of each element and then use a heap (priority queue) to get the top k elements. This approach ensures the time complexity is better than O(n log n).",
    "code": "const topKFrequent = (nums: number[], k: number): number[] => {\n      const countMap = new Map<number, number>();\n      nums.forEach(num => countMap.set(num, (countMap.get(num) || 0) + 1));\n      \n      const sortedByFrequency = Array.from(countMap).sort((a, b) => b[1] - a[1]);\n      \n      return sortedByFrequency.slice(0, k).map(item => item[0]);\n    };",
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1, 2]"
      },
      {
        "input": "nums = [1], k = 1",
        "output": "[1]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "k is in the range [1, the number of unique elements in the array]",
      "It is guaranteed that the answer is unique."
    ],
    "category": "Algorithms",
    "dateSolved": "20-07-2023"
  },
  {
    "id": "contains-duplicate",
    "title": "217. Contains Duplicate",
    "difficulty": "Easy",
    "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "explanation": "To determine if an array contains duplicates, we can use a HashSet to store numbers as we iterate through the array. \n    If we encounter a number that is already in the HashSet, we return true; otherwise, we continue adding numbers to the set. \n    If the loop completes without finding duplicates, we return false. This approach ensures an O(n) time complexity.",
    "code": "const containsDuplicate = (nums: number[]): boolean => {\n  const seen = new Set<number>();\n  for (let num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n};",
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": "The element 1 occurs at the indices 0 and 3."
      },
      {
        "input": "nums = [1,2,3,4]",
        "output": "false",
        "explanation": "All elements are distinct."
      },
      {
        "input": "nums = [1,1,1,3,3,4,3,2,4,2]",
        "output": "true"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "category": "Algorithms",
    "dateSolved": "13-02-2024"
  },
  {
    "id": "palindrome-number",
    "title": "9. Palindrome Number",
    "difficulty": "Easy",
    "description": "Given an integer x, return true if x is a palindrome, and false otherwise.",
    "explanation": "We begin by performing an initial check. If the input number x is negative, it cannot be a palindrome since palindromes are typically defined for positive numbers. In such cases, we immediately return false.\n\nWe initialize two variables:\n\nreversed: This variable will store the reversed value of the number x.\ntemp: This variable is a temporary placeholder to manipulate the input number without modifying the original value.\nWe enter a loop that continues until temp becomes zero:\n\nInside the loop, we extract the last digit of temp using the modulo operator % and store it in the digit variable.\nTo reverse the number, we multiply the current value of reversed by 10 and add the extracted digit.\nWe then divide temp by 10 to remove the last digit and move on to the next iteration.\nOnce the loop is completed, we have reversed the entire number. Now, we compare the reversed value reversed with the original input value x.\n\nIf they are equal, it means the number is a palindrome, so we return true.\nIf they are not equal, it means the number is not a palindrome, so we return false.\nThe code uses a long long data type for the reversed variable to handle potential overflow in case of large input numbers.",
    "code": "function isPalindrome(x: number): boolean {\n  if(x < 0){\n    return false \n  }\n  let revNum = 0; \n  let temp = x;\n\n  while(temp != 0) {\n    console.log(temp, \" temp in the first of the loop\")    \n    let digit = temp % 10;\n    console.log(digit, \" digit temp % 10\")\n\n    console.log(revNum, \" rev num  \")    \n\n    revNum = revNum * 10 + digit;\n    console.log(revNum, \" rev num * 10 + digit \")    \n\n    console.log(temp, ' temp number')    \n     temp = Math.floor(temp / 10);\n         console.log(temp, ' temp / 10')    \n\n  }\n  return (revNum == x)\n};",
    "examples": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 reads as 121 from left to right and from right to left."
      },
      {
        "input": "x = -121",
        "output": "false",
        "explanation": "From left to right, it reads -121. From right to left, it becomes 121-."
      },
      {
        "input": "x = 10",
        "output": "false",
        "explanation": "Reads 01 from right to left. Therefore it is not a palindrome."
      }
    ],
    "constraints": [
      "-2³¹ <= x <= 2³¹ - 1"
    ],
    "category": "Algorithms",
    "dateSolved": "24-05-2024"
  },
  {
    "id": "valid-anagram",
    "title": "242. Valid Anagram",
    "difficulty": "Easy",
    "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    "explanation": "An anagram is a word formed by rearranging the letters of another word. \n    To check if two strings are anagrams, we can sort them and compare if they are equal. \n    Another approach is to count the frequency of each character in both strings and compare the counts.",
    "code": "const isAnagram = (s: string, t: string): boolean => {\n  if (s.length !== t.length) return false;\n  return s.split(\"\").sort().join(\"\") === t.split(\"\").sort().join(\"\");\n};",
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true"
      },
      {
        "input": "s = \"rat\", t = \"car\"",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= s.length, t.length <= 5 × 10⁴",
      "s and t consist of lowercase English letters."
    ],
    "category": "Algorithms",
    "dateSolved": "19-07-2024"
  },
  {
    "id": "find-first-palindromic-string",
    "title": "2108. Find First Palindromic String in the Array",
    "difficulty": "Easy",
    "description": "Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string \"\".",
    "explanation": "A string is palindromic if it reads the same forward and backward. \n    To find the first palindromic string in an array, we iterate through the array and check each string.\n    If a string is a palindrome, we return it immediately. If none are found, we return an empty string.",
    "code": "const firstPalindrome = (words: string[]): string => {\n  for (const word of words) {\n    if (word === word.split(\"\").reverse().join(\"\")) return word;\n  }\n  return \"\";\n};",
    "examples": [
      {
        "input": "words = [\"abc\",\"car\",\"ada\",\"racecar\",\"cool\"]",
        "output": "\"ada\"",
        "explanation": "The first palindromic string is \"ada\"."
      },
      {
        "input": "words = [\"notapalindrome\",\"racecar\"]",
        "output": "\"racecar\"",
        "explanation": "The first and only palindromic string is \"racecar\"."
      },
      {
        "input": "words = [\"def\",\"ghi\"]",
        "output": "\"\"",
        "explanation": "There are no palindromic strings, so the empty string is returned."
      }
    ],
    "constraints": [
      "1 <= words.length <= 100",
      "1 <= words[i].length <= 100",
      "words[i] consists only of lowercase English letters."
    ],
    "category": "Algorithms",
    "dateSolved": "23-05-204"
  },
  {
    "id": "add-two-numbers",
    "title": "2. Add Two Numbers",
    "difficulty": "Medium",
    "description": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
    "explanation": "We traverse both linked lists, adding corresponding nodes along with a carry value. If one list is shorter, we continue with the longer one while keeping track of the carry. Finally, if there is a carry left, we add an extra node.",
    "code": "class ListNode {\n  val: number;\n  next: ListNode | null;\n  constructor(val?: number, next?: ListNode | null) {\n    this.val = val ?? 0;\n    this.next = next ?? null;\n  }\n}\n\nconst addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {\n  let dummy = new ListNode();\n  let current = dummy;\n  let carry = 0;\n\n  while (l1 || l2 || carry) {\n    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;\n    carry = Math.floor(sum / 10);\n    current.next = new ListNode(sum % 10);\n    current = current.next;\n    l1 = l1?.next ?? null;\n    l2 = l2?.next ?? null;\n  }\n\n  return dummy.next;\n};",
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]"
      },
      {
        "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        "output": "[8,9,9,9,0,0,0,1]"
      }
    ],
    "constraints": [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    "category": "Linked List",
    "dateSolved": "02-02-2025"
  }
];