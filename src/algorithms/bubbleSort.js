import "../util/swap";

const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped = false;

  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      if (arr[i - 1] > arr[i]) {
        arr.swap(i - 1, i);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
};

export default bubbleSort;
