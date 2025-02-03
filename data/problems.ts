import { Problem } from '@/types/problem';

export const problems: Problem[] = [
  {
    id: "roman-to-integer",
    title: "13. Roman to Integer",
    difficulty: "Easy",
    description: "Convert Roman numerals to integers",
    explanation: `Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.`,
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