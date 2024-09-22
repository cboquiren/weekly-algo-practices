// Write a function that takes an array of integers and a target integer.
// The function should return indices of the two numbers that add up to the target. Solve this in O(n) or better.

export const twoSumOptimized = (arr, target) => {
  // const ans = [];
  // for (let x = 0; x < arr.length - 1; x++) {
  //   for (let y = x + 1; y < arr.length; y++) {
  //     if (arr[x] + arr[y] === target) {
  //       ans.push(x, y);
  //     }
  //   }
  // }
  // return ans;

  // ^^^This answer was O(n^2);
  //
  //
  // const ans = [];
  // arr.map((elm) => {
  //   if (elm < target) {
  //     if (arr.includes(target - elm)) {
  //       if (arr.indexOf(elm) !== arr.indexOf(target - elm)) {
  //         ans.push([arr.indexOf(elm), arr.indexOf(target - elm)]);
  //       }
  //     }
  //   }
  // });
  // return ans[0] ?? "None";

  // ^^^This answer was O(n^4?);

  let storage = {};
  for (let x = 0; x < arr.length; x++) {
    const check = target - arr[x];
    if (storage[check] !== undefined) {
      return [storage[check], x];
    }
    storage = { ...storage, [arr[x]]: x };
  }
};
