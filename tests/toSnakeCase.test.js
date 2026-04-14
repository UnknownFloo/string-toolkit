const { toSnakeCase } = require("../src");

describe("toSnakeCase", () => {
  test("converts a string to snake_case", () => {
    expect(toSnakeCase("Hello World")).toBe("hello_world");
  });
});