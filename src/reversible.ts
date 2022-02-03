export const isReversible = (n: number): boolean =>
  n % 10 !== 0 && isComposedOfOnlyOdds(n + reverse(n));

export const reverse = (value: number): number =>
  Number(value.toString().split("").reverse().join(""));

export const isComposedOfOnlyOdds = (result: number): boolean =>
  result
    .toString()
    .split("")
    .map(Number)
    .every((val) => val % 2 == 1);

export const countReversibleNumbers = (maxRange: number): number =>
  Array.from(Array(maxRange).keys())
    .map((i) => i++)
    .filter(isReversible).length;
