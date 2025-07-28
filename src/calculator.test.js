import calculator from "./calculator.js";

test("Calculation tests :", () => {
  expect(calculator(3, 5, "+")).toBe(8);
  console.log(`Result of 3 + 5 is = ${calculator(3, 5, "+")}`);
  expect(calculator(12, 3, "-")).toBe(9);
  console.log(`Result of 12 - 3 is = ${calculator(12, 3, "-")}`);
  expect(calculator(16, 4, "/")).toBe(4);
  console.log(`Result of 16 / 4 is = ${calculator(16, 4, "/")}`);
  expect(calculator(10, 6, "*")).toBe(60);
  console.log(`Result of 10 * 6 is = ${calculator(10, 6, "*")}`);
});
