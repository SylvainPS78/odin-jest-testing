import capitalize from "./capitalize.js";

test("capitalise : this is a test", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
  console.log(capitalize("this is a test"));
});

test("capitalise : TEST NUMBER TWO", () => {
  expect(capitalize("TEST NUMBER TWO")).toBe("Test number two");
  console.log(capitalize("TEST NUMBER TWO"));
});
