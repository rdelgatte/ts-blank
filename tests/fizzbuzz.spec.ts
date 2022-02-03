import { fizzBuzz, writeResult } from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  it('providing n = 5 returns "1 2 Fizz Bang Buzz"', () =>
    expect(fizzBuzz(5)).toBe("1 2 Fizz Bang Buzz"));

  it('providing n = 15 returns "1 2 Fizz Bang Buzz Fizz 7 Bang Fizz Buzz 11 FizzBang 13 14 FizzBuzz"', () =>
    expect(fizzBuzz(15)).toBe(
      "1 2 Fizz Bang Buzz Fizz 7 Bang Fizz Buzz 11 FizzBang 13 14 FizzBuzz"
    ));

  it("divided by 3 should write Fizz", () => {
    expect(writeResult(3)).toBe("Fizz");
  });

  it("divided by 1 should write 1", () => {
    expect(writeResult(1)).toBe("1");
  });

  it("divided by 5 should write Buzz", () => {
    expect(writeResult(5)).toBe("Buzz");
  });

  it("divided by 4 should write Bang", () => {
    expect(writeResult(4)).toBe("Bang");
  });

  it("divided by 15 should write FizzBuzz", () => {
    expect(writeResult(15)).toBe("FizzBuzz");
  });
});
