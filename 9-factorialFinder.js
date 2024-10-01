// Prompt: Write a function that takes a non-negative integer and returns its factorial.
// Extension: Modify the function to handle large numbers by using memoization to improve efficiency.

export const factorialFinder = (num) => {
  if (num <= 1) {
    return 1;
  }
  return num * factorialFinder(num - 1);
};

// export const memoizeFactorialFinder = (num) => {
//   const map = new Map();
//   console.log(map);
//   if (num <= 1) {
//     map.set(num, 1);
//     return 1;
//   }
//   if (map.has(num)) {
//     return map.get(num);
//   } else {
//     map.set(num, num * memoizeFactorialFinder(num - 1));
//     return map.get(num);
//   }
// };

export const memoizeFactorialFinder = (num) => {
  const map = new Map();
  const factorialize = (num) => {
    if (num <= 1) {
      map.set(num, 1);
      return 1;
    }
    if (map.has(num)) {
      return map.get(num);
    } else {
      map.set(num, num * factorialize(num - 1));
      return map.get(num);
    }
  };
  return factorialize;
};

export const memoizeFinder = memoizeFactorialFinder();

// const factorialFinder = memoizeFactorialFinder();
// factorialFinder();

// const factorialFinder2 = memoizeFactorialFinder();
// factorialFinder2();

// const tylerScore = playerScore();
// const rossScore = playerScore();

// tylerScore(2);
// rossScore(3);
