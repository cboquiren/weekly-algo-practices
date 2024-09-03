// Prompt: Write a function that takes an array of numbers as input and returns the maximum value.
// Extension: Modify the function to return the index of the maximum value in the list.

export const maxValue = (arr) => {
  const max = arr.reduce((acc, val) => {
    return acc > val ? acc : val;
  });
  const index = arr.indexOf(max);
  return { max, index };
};
