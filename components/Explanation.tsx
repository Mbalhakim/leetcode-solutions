type ExplanationProps = {
    explanation: string;
  };
  
  export default function Explanation({ explanation }: ExplanationProps) {
    return (
      <section className="bg-background p-4 rounded-lg shadow border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-2 text-foreground">Explanation</h2>
        <p className="text-foreground/80">{explanation}</p>
      </section>
    );
  }