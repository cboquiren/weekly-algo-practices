// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// apple => 'ple'

// export const longestSubstring = (str) => {
//   const map = new Map();
//   const arr = [];
//   let count = 0;
//   for (let x = 0; x < str.length; x++) {
//     if (!map.has(str[x])) {
//       map.set(str[x], x);
//     } else {
//       console.log(x, count);
//       arr.push(str.slice(count, x));
//       count = map.get(str[x]);
//       console.log("new count", count);
//     }
//   }
//   console.log(arr);
// };

// Tyler's Solution
// https://www.loom.com/share/60973c6ed3914dea86fda0c4c6607796?sid=8b722c45-0d3c-4dcd-9c79-bd92f2a02f20
export const longestSubstring = (str) => {
  const charIndex = {};
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];

    if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= left) {
      left = charIndex[currentChar] + 1;
    }

    charIndex[currentChar] = right;

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
