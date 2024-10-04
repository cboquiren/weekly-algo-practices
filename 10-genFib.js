// Prompt: Write a function that takes a number n and returns the first n numbers in the Fibonacci sequence.
// Extension: Modify the function to return the Fibonacci sequence as a comma-separated string.

const closure = () => {
  const map = new Map();
  const test = (num) => {
    if (num === 1) {
      map.set(1, [1]);
      return [1];
    }
    if (num === 2) {
      map.set(2, [1, 1]);
      return [1, 1];
    }
    if (map.has(num)) {
      return map.get(num);
    }
    const previous = map.get(num - 1) ?? test(num - 1);
    const ans = [...previous, previous[previous.length - 2] + previous[previous.length - 1]];
    map.set(num, ans);
    return ans;
  };
  return test;
};

export const genFib = closure();
