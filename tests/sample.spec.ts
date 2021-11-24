import {
  returnReversedNumber,
  isNumberComposedOfOddNumbers,
  isReversible,
  countReversibleNumbers,
} from "../src/sample"

describe("reverse function", () => {
  it("should return 63 when given number is 36", () => {
    expect(returnReversedNumber(36)).toBe(63)
  })

  it("should return 409 when given number is 904", () => {
    expect(returnReversedNumber(904)).toBe(409)
  })
})

describe("isNumberComposedOfOddNumbers function", () => {
  it("should return true when input number is 99", () => {
    expect(isNumberComposedOfOddNumbers(99)).toBe(true)
  })

  it("should return false when input number is 444", () => {
    expect(isNumberComposedOfOddNumbers(444)).toBe(false)
  })
})

describe("isReversible function", () => {
  it("should return true when input number is 36", () => {
    expect(isReversible(36)).toBe(true)
  })

  it("should return false when input number is 22", () => {
    expect(isReversible(22)).toBe(false)
  })
})

describe("countReversibleNumbers function", () => {
  it("should return 120 when 1000 numbers are given as input", () => {
    expect(countReversibleNumbers(500)).toStrictEqual(120)
  })
})
