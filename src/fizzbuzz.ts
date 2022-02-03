export const fizzBuzz = (n: number): string =>
  range(n).map(writeResult).join(" ");

export const writeResult = (n: number): string => {
  const result = assertFizz(n).concat(assertBuzz(n)).concat(assertBang(n));

  if (!result.length) {
    return n.toString();
  }

  return result.join("");
};

const assertWithParams = (predidate: boolean, result: string): string[] =>
  predidate ? [result] : [];

const assertFizz = (n: number): string[] =>
  assertWithParams(n % 3 === 0, "Fizz");
const assertBang = (n: number): string[] =>
  assertWithParams(n % 4 === 0, "Bang");
const assertBuzz = (n: number): string[] =>
  assertWithParams(n % 5 === 0, "Buzz");

const range = (maxLength: number): number[] =>
  Array.from({ length: maxLength }, (_, i) => i + 1);
