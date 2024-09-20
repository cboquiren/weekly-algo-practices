// Given an array of integers from 1 to n with one number missing, write a function to find the missing number.

export const findMissingNum = (arr) => {
  const lastNum = arr.length + 1;
  const expected = (lastNum * (lastNum + 1)) / 2;
  const actual = arr.reduce((a, b) => a + b);
  return expected - actual;
};
