const { toKebabCase } = require("../src");

describe("toKebabCase", () => {
  test("converts a string to kebab-case", () => {
    expect(toKebabCase("Hello World")).toBe("hello-world");
  });
});