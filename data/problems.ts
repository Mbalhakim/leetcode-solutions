import { Problem } from '@/types/problem';

export const problems: Problem[] = [
  {
    id: "roman-to-integer",
    title: "13. Roman to Integer",
    difficulty: "Easy",
    description: "Convert Roman numerals to integers",
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
    category: "Algorithms",
    dateSolved: "2024-03-15"
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
    category: "Algorithms",
    dateSolved: "2025-02-03",
  },
];