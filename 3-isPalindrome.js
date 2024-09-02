// Prompt: Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
// Ensure the function ignores spaces, punctuation, and case differences when checking for a palindrome.
// Extension: Write a recursive version of this function.

export const isPalindrome = (str) => {
  const arr = str.split("");
  const verify = arr
    .filter((char) => {
      const regex = /\w/;
      if (regex.test(char)) {
        return true;
      } else return false;
    })
    .map((char) => {
      return char.toLowerCase();
    });
  const reversed = verify.slice(0).reverse();
  const ans = [];
  for (let x = 0; x <= Math.floor(verify.length / 2); x++) {
    ans.push(verify[x] === reversed[x]);
  }
  return !ans.includes(false);
};
