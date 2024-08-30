// Implement a function that takes a string and returns an object with the counts of vowels and consonants.

export const createDictionary = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const arr = str.split("");
  return arr.reduce(
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
