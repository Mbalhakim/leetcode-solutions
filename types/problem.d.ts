export interface Problem {
    id: string;
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    description: string;
    explanation: string;
    code: string;
    category?: string;
    dateSolved: string;
  }