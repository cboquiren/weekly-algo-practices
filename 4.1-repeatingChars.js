// Implement a function that returns the first non-repeating character in a string.
// If all characters are repeating, return null.

export const repeatingChars = (str) => {
  const hashmap = str.split("").reduce((acc, val) => {
    const check = acc[val] ?? 0;
    return { ...acc, [val]: check + 1 };
  }, {});
  const find = Object.entries(hashmap).find((entry) => {
    return entry[1] === 1;
  });
  return Array.isArray(find) ? find[0] : null;
};
