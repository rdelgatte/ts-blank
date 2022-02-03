import {
  reverse,
  isComposedOfOnlyOdds,
  isReversible,
  countReversibleNumbers,
} from "../src/reversible";

describe("reverse function", () => {
  it("should return 63 when given number is 36", () => {
    expect(reverse(36)).toBe(63);
  });

  it("should return 409 when given number is 904", () => {
    expect(reverse(904)).toBe(409);
  });
});

describe("isNumberComposedOfOddNumbers function", () => {
  it("should return true when input number is 99", () => {
    expect(isComposedOfOnlyOdds(99)).toBe(true);
  });

  it("should return false when input number is 444", () => {
    expect(isComposedOfOnlyOdds(444)).toBe(false);
  });
});

describe("isReversible function", () => {
  it("should return true when input number is 36", () => {
    expect(isReversible(36)).toBe(true);
  });

  it("should return false when input number is 22", () => {
    expect(isReversible(22)).toBe(false);
  });

  it("should return false when input number is 10", () => {
    expect(isReversible(10)).toBe(false);
  });
});

describe("countReversibleNumbers function", () => {
  it("should return 120 when 1000 numbers are given as input", () => {
    expect(countReversibleNumbers(1000)).toStrictEqual(120);
  });
});
