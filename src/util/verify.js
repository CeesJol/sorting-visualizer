/**
 * Verify array is sorted properly.
 */
const verify = (array) => {
  let prevElem = -Number.MAX_VALUE;
  for (let elem of array) {
    if (elem < prevElem) {
      return false;
    }
    prevElem = elem;
  }
  return true;
};

export default verify;
