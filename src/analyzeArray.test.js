import analyzeArray from "./analyzeArray.js";

test("Analyse Array [1,8,3,4,2,6] :", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);

  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);

  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);

  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
