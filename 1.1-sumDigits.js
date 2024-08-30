// Create a function that takes an integer and returns the sum of its digits without converting the number to a string. Make sure you handle negatives!

export const sumDigits = (int) => {
  let x = Math.abs(int);
  let sum = 0;
  while (x > 0) {
    const y = x % 10;
    sum += y;
    x = Math.floor(x / 10);
  }
  return sum;
};
