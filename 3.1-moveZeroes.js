// Write a function that takes an array of numbers and moves all zeros to the end of the array
// while maintaining the order of the non-zero elements.

export const moveZeroes = (arr) => {
  const length = arr.length;
  const filter = arr.filter((num) => num > 0);
  while (filter.length < length) {
    filter.push(0);
  }
  return filter;
};
