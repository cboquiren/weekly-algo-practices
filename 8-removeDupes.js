// Prompt: Write a function that takes a list (array) and returns a new list with all duplicate elements removed.
// Extension: Modify the function to maintain the order of the original list.

export const removeDupes = (arr) => {
  const ans = [];
  arr.map((elm) => {
    if (!ans.includes(elm)) {
      ans.push(elm);
    }
  });
  return ans;
};
