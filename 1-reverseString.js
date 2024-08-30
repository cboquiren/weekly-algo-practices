// Prompt: Write a function that takes a string as input and returns the string reversed.

// Extension: Write a version of this function without built-in methods.

export const reverseString = (str) => {
  return str.split("").reverse().join("");
};

export const reverseStringNoMethods = (str) => {
  let ans = "";
  for (let x = str.length - 1; x >= 0; x--) {
    ans = ans.concat(str[x]);
  }
  return ans;
};
