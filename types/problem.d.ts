export interface Problem {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    description: string;
    explanation: string;
    code: string;
    constraints:Array;
    examples:Array;
    category?: string;
    dateSolved: string;
  }