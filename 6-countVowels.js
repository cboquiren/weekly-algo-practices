// "Prompt: Write a function that takes a string as input and
// returns the number of vowels (a, e, i, o, u) in the string.
// Extension: Modify the function to also return the number of consonants in the string as well."

export const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").reduce((acc, val) => {
    if (vowels.includes(val.toLowerCase())) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

export const countVowelsExtended = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").reduce(
    (acc, val) => {
      if (vowels.includes(val.toLowerCase())) {
        return { ...acc, ["vowels"]: acc["vowels"] + 1 };
      } else {
        return { ...acc, ["consonants"]: acc["consonants"] + 1 };
      }
    },
    { vowels: 0, consonants: 0 }
  );
};
