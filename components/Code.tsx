import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

type CodeProps = {
  code: string;
};

export default function Code({ code }: CodeProps) {
  return (
    <section className="bg-gray-900 text-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2 text-blue-400">Code</h2>
      <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </section>
  );
}
