type ExplanationProps = {
    explanation: string;
  };
  
  export default function Explanation({ explanation }: ExplanationProps) {
    return (
      <section className="border p-4 rounded-lg bg-gray-100 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Explanation</h2>
        <p className="text-foreground/80">{explanation}</p>
      </section>
    );
  }