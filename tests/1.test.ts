import { solution } from "../src/1";

describe("Task 1", () => {
  it("returns some result", async () => {
    const result = await solution(["test"]);
    expect(["string", "number"].includes(typeof result)).toBeTruthy();
  });
});
