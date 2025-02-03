"use client";

import React, { useState } from "react";

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  const dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
};

// Convert array to linked list
const arrayToList = (arr: number[]): ListNode | null => {
  const dummy = new ListNode();
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
};

// Convert linked list to array
const listToArray = (head: ListNode | null): number[] => {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};

const AddTwoNumbers = () => {
  const [input1, setInput1] = useState<string>("");
  const [input2, setInput2] = useState<string>("");
  const [result, setResult] = useState<number[] | null>(null);

  const handleCompute = () => {
    try {
      const arr1 = JSON.parse(input1);
      const arr2 = JSON.parse(input2);
      if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("Inputs must be arrays of numbers.");
      }
      const list1 = arrayToList(arr1);
      const list2 = arrayToList(arr2);
      const sumList = addTwoNumbers(list1, list2);
      setResult(listToArray(sumList));
    } catch {
      setResult(null);
    }
  };

  return (
    <div className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
      <h2 className="text-lg font-semibold mb-2">Try it Yourself</h2>
      <input
        type="text"
        placeholder='Enter first list (e.g., [2,4,3])'
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="w-full p-2 border rounded-md bg-white dark:bg-gray-900"
      />
      <input
        type="text"
        placeholder='Enter second list (e.g., [5,6,4])'
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        className="w-full p-2 mt-2 border rounded-md bg-white dark:bg-gray-900"
      />
      <button
        onClick={handleCompute}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Compute
      </button>
      {result !== null && (
        <div className="mt-3 p-2 border rounded-md bg-white dark:bg-gray-900">
          <strong>Result:</strong> {JSON.stringify(result)}
        </div>
      )}
    </div>
  );
};

export default AddTwoNumbers;
