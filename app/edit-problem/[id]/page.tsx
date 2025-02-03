import { problems } from '@/data/problems';
import EditProblemClient from './EditProblemClient';

export async function generateStaticParams() {
  return problems.map((problem) => ({
    id: problem.id,
  }));
}

export default function Page() {
  return <EditProblemClient />;
}