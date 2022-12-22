import { solution } from "../src/2";

describe("Task 2", () => {
  it("returns some result", async () => {
    const result = await solution(["test"]);
    expect(["string", "number"].includes(typeof result)).toBeTruthy();
  });
});
