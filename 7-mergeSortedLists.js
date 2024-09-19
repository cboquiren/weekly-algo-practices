// Prompt: Write a function that takes two sorted lists of numbers and returns a single sorted list
// containing all elements from both lists.
// Extension: Modify the function to merge the lists without using any built-in sorting functions."

export const mergeSortedLists = (arr1, arr2) => {
  const ans = [];
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      ans.push(arr1[0]);
      arr1.shift();
    } else {
      ans.push(arr2[0]);
      arr2.shift();
    }
  }
  return ans;
};
