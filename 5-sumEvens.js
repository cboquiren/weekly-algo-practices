// Prompt: Write a function that takes a list of numbers and returns the sum of all even numbers in the list.
// Extension: Modify the function to return both the sum of even numbers and the sum of odd numbers.

export const sumEvens = (arr) => {
  const filter = arr.filter((num) => num % 2 === 0);
  return filter.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

export const sumEvensAndOdds = (arr) => {
  const ans = { odds: 0, evens: 0 };
  arr.map((num) => {
    if (num % 2 === 0) {
      ans["evens"] += num;
    } else {
      ans["odds"] += num;
    }
  });
  return ans;
};
