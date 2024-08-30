import { describe, expect, test } from "vitest";
import { reverseString, reverseStringNoMethods } from "./1-reverseString";
import { sumDigits } from "./1.1-sumDigits";
import { createDictionary } from "./2.1-createDictionary";

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

describe("createDictionary", () => {
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
