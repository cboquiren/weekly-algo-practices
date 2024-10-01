export const removeDuplicates = (arr) => {
  const obj = new Map();
  for (let x = 0; x < arr.length; x++) {
    if (!obj.has(arr[x])) {
      obj.set(arr[x], true);
    }
  }
  return Array.from(obj.keys());
};
