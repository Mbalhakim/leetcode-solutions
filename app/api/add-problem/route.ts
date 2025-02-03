import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { Problem } from "@/types/problem";

const problemsFilePath = path.join(process.cwd(), "data", "problems.ts");

export async function POST(req: Request) {
  try {
    const newProblem: Problem = await req.json();

    // Read the existing problems file
    let fileContent = fs.readFileSync(problemsFilePath, "utf-8");

    // Extract the problems array correctly
    let jsonContent = fileContent.replace(/import .*?;\s*/, ""); // Remove import statement
    jsonContent = jsonContent.replace(/export const problems: Problem\[] =/, "").trim(); // Remove export line
    jsonContent = jsonContent.replace(/;$/, "").trim(); // Remove trailing semicolon

    let existingProblems: Problem[] = [];

    try {
      existingProblems = eval(`(${jsonContent})`); // Use eval safely to parse array
    } catch (error) {
      console.error("Failed to parse existing problems:", error);
      return NextResponse.json({ error: "Invalid problems.ts format" }, { status: 500 });
    }

    // Add new problem
    existingProblems.push(newProblem);

    // Format the updated file content
    const updatedContent = `import { Problem } from '@/types/problem';

export const problems: Problem[] = ${JSON.stringify(existingProblems, null, 2)};`;

    // Write back to problems.ts
    fs.writeFileSync(problemsFilePath, updatedContent, "utf-8");

    return NextResponse.json({ message: "Problem added successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error updating problems.ts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
