import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Problem } from "@/types/problem";

const problemsFilePath = path.join(process.cwd(), "data", "problems.ts");

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    let fileContent = fs.readFileSync(problemsFilePath, "utf-8");

    let jsonContent = fileContent.replace(/import .*?;\s*/, "").replace(/export const problems: Problem\[] =/, "").trim();
    jsonContent = jsonContent.replace(/;$/, "").trim();

    let problems: Problem[] = eval(`(${jsonContent})`);

    const newProblems = problems.filter(p => p.id !== id);

    if (newProblems.length === problems.length) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    const updatedContent = `import { Problem } from '@/types/problem';

export const problems: Problem[] = ${JSON.stringify(newProblems, null, 2)};`;

    fs.writeFileSync(problemsFilePath, updatedContent, "utf-8");

    return NextResponse.json({ message: "Problem deleted successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting problem:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
