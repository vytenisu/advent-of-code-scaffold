import { readFileSync } from "fs";

export const run = async (
  inputFileName: string,
  implementation: (lines: string[]) => void
) => {
  const startTime = new Date().getTime();

  console.log("\n\n");

  const data = readFileSync("./data/" + inputFileName, "utf8");
  const lines = data.split("\n");

  const result = await implementation(lines);

  console.log("RESULT:", result);

  const endTime = new Date().getTime();
  const duration = endTime - startTime;

  console.log(`\nDuration: ${duration}ms`);
  console.log("\n\n");
};
