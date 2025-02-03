
import { problems } from '@/data/problems';
import { Problem } from '@/types/problem';
import ProblemPage from '@/components/ProblemPage';
export async function generateStaticParams() {
  return problems.map((problem: Problem) => ({
    id: problem.id,
  }));
}

export default function Page() {
    return <ProblemPage />;
  }
