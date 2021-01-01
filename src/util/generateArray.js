const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const generateArray = (size = 10, min = 0, max = 100) => {
  const result = [];
  for (let i = 0; i < size; i++) {
    result.push(random(min, max));
  }
  return result;
};

export default generateArray;
