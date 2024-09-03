// Write a function that merges two sorted arrays into one sorted array without using any sorting functions.

export const mergeArrays = (arr1, arr2, combinedArr = []) => {
  if (arr1.length === 0 && arr2.length === 0) {
    return combinedArr;
  }
  if (arr1[0] < arr2[0]) {
    combinedArr.push(arr1[0]);
    arr1.shift();
    mergeArrays(arr1, arr2, combinedArr);
  } else {
    combinedArr.push(arr2[0]);
    arr2.shift();
    mergeArrays(arr1, arr2, combinedArr);
  }
  return combinedArr;
};
