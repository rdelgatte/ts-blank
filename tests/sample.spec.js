import { returnReversedNumber } from "../src/app"

describe("reverse function", () => {
  it("should return 63 when given number is 36", () => {
    expect(returnReversedNumber(36)).toBe(63)
  })
})
