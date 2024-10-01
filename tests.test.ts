import { describe, expect, test } from "vitest";
import { reverseString, reverseStringNoMethods } from "./1-reverseString";
import { sumDigits } from "./1.1-sumDigits";
import { createDictionary } from "./2.1-createDictionary";
import { isPalindrome } from "./3-isPalindrome";
import { moveZeroes } from "./3.1-moveZeroes";
import { maxValue } from "./4-maxValue";
import { repeatingChars } from "./4.1-repeatingChars";
import { sumEvens, sumEvensAndOdds } from "./5-sumEvens";
import { mergeArrays } from "./5.1-mergeArrays";
import { romanNumeralGenerator } from "./prentusProblems";
import { countVowels, countVowelsExtended } from "./6-countVowels";
import { mergeSortedLists } from "./7-mergeSortedLists";
import { findMissingNum } from "./7.1-findMissingNum";
import { removeDupes } from "./8-removeDupes";
import { twoSumOptimized } from "./8.1-twoSumOptimized";
import { factorialFinder, memoizeFactorialFinder, memoizeFinder } from "./9-factorialFinder";

describe.skip("Prentus Problems", () => {
  describe("Roman Numeral Generator", () => {
    test("3749 => MMMDCCXLIX", () => {
      expect(romanNumeralGenerator(3749)).toBe("MMMDCCXLIX");
    });
    test("58 => LVIII", () => {
      expect(romanNumeralGenerator(58)).toBe("LVIII");
    });
    test("1994 => MCMXCIV", () => {
      expect(romanNumeralGenerator(1994)).toBe("MCMXCIV");
    });
  });
});

describe.skip("reverseString", () => {
  test("test => tset", () => {
    expect(reverseString("test")).toBe("tset");
  });
  test("apple => elppa", () => {
    expect(reverseString("apple")).toBe("elppa");
  });
  test("reverse => esrever", () => {
    expect(reverseString("reverse")).toBe("esrever");
  });
});

describe.skip("reverseStringNoMethods", () => {
  test("test => tset", () => {
    expect(reverseStringNoMethods("test")).toBe("tset");
  });
  test("apple => elppa", () => {
    expect(reverseStringNoMethods("apple")).toBe("elppa");
  });
  test("reverse => esrever", () => {
    expect(reverseStringNoMethods("reverse")).toBe("esrever");
  });
});

describe.skip("sumDigits", () => {
  test("1234 => 10", () => {
    expect(sumDigits(1234)).toBe(10);
  });
  test("-1234 => 10", () => {
    expect(sumDigits(-1234)).toBe(10);
  });
});

describe.skip("createDictionary", () => {
  test("apple => {vowels: 2, consonants: 3}", () => {
    expect(createDictionary("apple")).toEqual({ vowels: 2, consonants: 3 });
  });
  test("orange => {vowels: 3, consonants: 3}", () => {
    expect(createDictionary("orange")).toEqual({ vowels: 3, consonants: 3 });
  });
  test("CapitAlS => {vowels: 3, consonants: 5}"),
    () => {
      expect(createDictionary("CapitAlS")).toEqual({ vowels: 3, consonants: 5 });
    };
});

describe.skip("isPalindrome", () => {
  test("apple => false", () => {
    expect(isPalindrome("apple")).toBe(false);
  });
  test("Never Odd Or Even => true"),
    () => {
      expect(isPalindrome("Never Odd Or Even")).toBe(true);
    };
  test("racecar => true", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
  test("R acE Car => true", () => {
    expect(isPalindrome("R acE Car.")).toBe(true);
  });
});

describe.skip("moveZeroes", () => {
  test("[1, 0, 2, 0, 3] => [1, 0, 2, 0, 3]", () => {
    expect(moveZeroes([1, 0, 2, 0, 3])).toEqual([1, 2, 3, 0, 0]);
  });
  test("[5, 0, 4, 3, 0, 0, 0, 3, 2, 1] => [5, 4, 3, 3, 2, 1, 0, 0, 0, 0]", () => {
    expect(moveZeroes([5, 0, 4, 3, 0, 0, 0, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 1, 0, 0, 0, 0]);
  });
  test("[4, 0, 3, 0, 2, 3, 4, 0] => [4, 3, 2, 3, 4, 0, 0, 0]", () => {
    expect(moveZeroes([4, 0, 3, 0, 2, 3, 4, 0])).toEqual([4, 3, 2, 3, 4, 0, 0, 0]);
  });
});

describe.skip("maxValue", () => {
  test("[1, 2, 3, 4] => 4", () => {
    expect(maxValue([1, 2, 3, 4])).toEqual({ max: 4, index: 3 });
  });
  test("[5, 3, 2, 6, 7, 2, 1, 0] => 7", () => {
    expect(maxValue([5, 3, 2, 6, 7, 2, 1, 0])).toEqual({ max: 7, index: 4 });
  });
  test("[93, 23, 4, 2, 0, 90]", () => {
    expect(maxValue([93, 23, 4, 2, 0, 90])).toEqual({ max: 93, index: 0 });
  });
});

describe.skip("repeatingChars", () => {
  test("swiss => w", () => {
    expect(repeatingChars("swiss")).toBe("w");
  });
  test("sss => null", () => {
    expect(repeatingChars("sss")).toBe(null);
  });
  test("apple => a", () => {
    expect(repeatingChars("apple")).toBe("a");
  });
});

describe.skip("sumEvens", () => {
  test("[1, 2, 3, 4, 5, 6] => 12", () => {
    expect(sumEvens([1, 2, 3, 4, 5, 6])).toBe(12);
  });
  test("[1, 3, 5, 7] => 0", () => {
    expect(sumEvens([1, 3, 5, 7])).toBe(0);
  });
  test("[2, 2, 2, 2, 2] => 10", () => {
    expect(sumEvens([2, 2, 2, 2, 2])).toBe(10);
  });
});

describe.skip("sumEvensAndOdds", () => {
  test("[1, 2, 3, 4, 5, 6] => 12", () => {
    expect(sumEvensAndOdds([1, 2, 3, 4, 5, 6])).toEqual({ odds: 9, evens: 12 });
  });
  test("[1, 3, 5, 7] => 0", () => {
    expect(sumEvensAndOdds([1, 3, 5, 7])).toEqual({ odds: 16, evens: 0 });
  });
  test("[2, 2, 2, 2, 2] => 10", () => {
    expect(sumEvensAndOdds([2, 2, 2, 2, 2])).toEqual({ odds: 0, evens: 10 });
  });
});

describe.skip("mergeArrays", () => {
  test("[1, 3, 5], [2, 4, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("[2, 3, 5], [1, 4, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeArrays([2, 3, 5], [1, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("[1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe.skip("countVowels", () => {
  test("apple => 2", () => {
    expect(countVowels("apple")).toBe(2);
  });
  test("dinOsAur => 4", () => {
    expect(countVowels("dinOsAur")).toBe(4);
  });
  test("brAcElEt => 3", () => {
    expect(countVowels("brAcElEt")).toBe(3);
  });
});

describe.skip("countVowelsExtended", () => {
  test("apple => {vowels: 2, consonants: 3", () => {
    expect(countVowelsExtended("apple")).toEqual({ vowels: 2, consonants: 3 });
  });
  test("DINOsaur => {vowels: 4, consonants: 4", () => {
    expect(countVowelsExtended("DINOsaur")).toEqual({ vowels: 4, consonants: 4 });
  });
  test("BRACELET => {vowels: 3, consonants: 5", () => {
    expect(countVowelsExtended("BRACELET")).toEqual({ vowels: 3, consonants: 5 });
  });
});

describe.skip("mergeSortedLists", () => {
  test("[1, 3, 5], [2, 4, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeSortedLists([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("[2, 3, 5], [1, 4, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeSortedLists([2, 3, 5], [1, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("[1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]", () => {
    expect(mergeSortedLists([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe.skip("findMissingNum", () => {
  test("[1, 2, 3, 5, 6, 7] => 4", () => {
    expect(findMissingNum([1, 2, 3, 5, 6, 7])).toBe(4);
  });
  test("[1, 3] => 2", () => {
    expect(findMissingNum([1, 3])).toBe(2);
  });
  test("[1, 2, 3, 4, 5, 6, 8] => 7", () => {
    expect(findMissingNum([1, 2, 3, 4, 5, 6, 8])).toBe(7);
  });
});

describe.skip("removeDupes", () => {
  test("[1, 1, 2, 2, 3, 3] => [1, 2, 3]", () => {
    expect(removeDupes([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
  test("['a', 'b', 'c', 'a', 'b', 'c'] => ['a', 'b', 'c']", () => {
    expect(removeDupes(["a", "b", "c", "a", "b", "c"])).toEqual(["a", "b", "c"]);
  });
  test("['apple', 'banana', 'orange', 'pear', 'apple'] => ['apple', 'banana', 'orange', 'pear']", () => {
    expect(removeDupes(["apple", "banana", "orange", "pear", "apple"])).toEqual([
      "apple",
      "banana",
      "orange",
      "pear",
    ]);
  });
});

describe.skip("twoSumOptimized", () => {
  test("[1, 2, 3, 4], 6 => [1, 3]", () => {
    expect(twoSumOptimized([1, 2, 3, 4], 6)).toEqual([1, 3]);
  });
  test("[ 3, 6, 9, 12, 15], 12 => [0, 2]", () => {
    expect(twoSumOptimized([3, 6, 9, 12, 15], 12)).toEqual([0, 2]);
  });
  test("[-1, -2, -3, -4, 1, 2, 3], 2 => [0, 6]", () => {
    expect(twoSumOptimized([-1, -2, -3, -4, 1, 2, 3], 2)).toEqual([0, 6]);
  });
});

describe.skip("factorialFinder", () => {
  test("3 => 6", () => {
    expect(factorialFinder(3)).toBe(6);
  });
  test("5 => 120", () => {
    expect(factorialFinder(5)).toBe(120);
  });
  test("9 => 362880", () => {
    expect(factorialFinder(9)).toBe(362880);
  });
  test("15 => 1307674368000", () => {
    expect(factorialFinder(15)).toBe(1307674368000);
  });
});

describe.skip("memoizeFactorialFinder", () => {
  test("3 => 6", () => {
    expect(memoizeFinder(3)).toBe(6);
  });
  test("9 => 362880", () => {
    expect(memoizeFinder(9)).toBe(362880);
  });
  test("5 => 120", () => {
    expect(memoizeFinder(5)).toBe(120);
  });
  test("15 => 1307674368000", () => {
    expect(memoizeFinder(15)).toBe(1307674368000);
  });
});
