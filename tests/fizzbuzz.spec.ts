import { fizzBuzz } from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  it('providing n = 5 returns "1 2 Fizz 4 Buzz"', () =>
    expect(fizzBuzz(5)).toBe("1 2 Fizz 4 Buzz"));

  it('providing n = 15 returns "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"', () =>
    expect(fizzBuzz(15)).toBe(
      "1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz"
    ));
});
