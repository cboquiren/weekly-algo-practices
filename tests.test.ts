import { describe, expect, test } from "vitest";
import { reverseString, reverseStringNoMethods } from "./1-reverseString";
import { sumDigits } from "./1.1-sumDigits";
import { createDictionary } from "./2.1-createDictionary";
import { isPalindrome } from "./3-isPalindrome";
import { moveZeroes } from "./3.1-moveZeroes";
import exp from "constants";

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

describe("moveZeroes", () => {
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
