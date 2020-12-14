import { sum } from '../src/sample';

describe('sum of two numbers', () => {
  it('should return 42 when summing 40 and 2', () =>
    expect(sum(40, 2)).toBe(42));
});
