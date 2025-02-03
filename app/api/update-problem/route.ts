import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Problem } from "@/types/problem";

const problemsFilePath = path.join(process.cwd(), "data", "problems.ts");

export async function PUT(req: Request) {
  try {
    const updatedProblem: Problem = await req.json();

    let fileContent = fs.readFileSync(problemsFilePath, "utf-8");

    let jsonContent = fileContent.replace(/import .*?;\s*/, "").replace(/export const problems: Problem\[] =/, "").trim();
    jsonContent = jsonContent.replace(/;$/, "").trim();

    let problems: Problem[] = eval(`(${jsonContent})`);

    const index = problems.findIndex(p => p.id === updatedProblem.id);
    if (index === -1) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    problems[index] = updatedProblem;

    const updatedContent = `import { Problem } from '@/types/problem';

export const problems: Problem[] = ${JSON.stringify(problems, null, 2)};`;

    fs.writeFileSync(problemsFilePath, updatedContent, "utf-8");

    return NextResponse.json({ message: "Problem updated successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error updating problems.ts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
