function analyzeArray(array) {
  let resultObject = {};

  if (!Array.isArray(array) || array.length === 0) {
    resultObject.average = NaN;
    resultObject.min = NaN;
    resultObject.max = NaN;
    resultObject.length = 0;
  } else {
    resultObject.average =
      array.reduce((acc, curr) => acc + curr, 0) / array.length;
    resultObject.min = Math.min(...array);
    resultObject.max = Math.max(...array);
    resultObject.length = array.length;
  }

  return resultObject;
}

export default analyzeArray;
