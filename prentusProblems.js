// Prentus Problems

// Roman Numeral Generator
// export const romanNumeralGenerator = (num) => {
//   const symbols = {
//     1000: "M",
//     900: "CM",
//     500: "D",
//     400: "CD",
//     100: "C",
//     90: "XC",
//     50: "L",
//     40: "XL",
//     10: "X",
//     9: "IX",
//     5: "V",
//     4: "IV",
//     1: "I",
//   };
//   const numArrRev = [];
//   while (num > 0) {
//     numArrRev.push(num % 10);
//     num = Math.floor(num / 10);
//   }
//   const values = numArrRev.map((num, index) => {
//     return Number(`${num}${"0".repeat(index)}`);
//   });
//   const generator = values.map((num) => {
//     if (symbols[num]) {
//       return symbols[num];
//     } else {
//       const symbolsKeysRev = Object.keys(symbols).reverse();
//       let holder = num;
//       let roman = "";
//       while (holder > 0) {
//         let subtract = 0;
//         symbolsKeysRev.map((key) => {
//           if (num > key) {
//             roman += symbols[key];
//             subtract = key;
//           }
//         });
//         holder -= subtract;
//       }
//       console.log(roman);
//     }
//   });
//   console.log(generator);
// };

export const romanNumeralGenerator = (num) => {
  const symbols = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };
  const symbolsKeysRev = Object.keys(symbols).reverse();
  let roman = "";
  for (const key of symbolsKeysRev) {
    while (num >= key) {
      roman += symbols[key];
      num -= key;
    }
  }
  return roman;
};
