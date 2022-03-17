# Technical interview (front-end developers)

Starter kit over a typescript-ready project with basic testing libraries:
* [`Jest`](https://github.com/facebook/jest) as unit testing library
* [`FastCheck`](https://github.com/fscheck/FsCheck) as property-based testing library

## Startup

* Install [`Nix`](https://nixos.org/guides/install-nix.html)
* Run `nix-shell`
* Run `npm install`
* Run `npm test`

## Exercices
### 1 FizzBuzz

Given a range of positive numbers from `1` to `n`, we expect the following rule to be applied:

- if the number can be divided by 3, we write `Fizz`
- if the number can be divided by 5, we write `Buzz`
- if the number can be divided by 3 and 5, we write `FizzBuzz`
- else we write the number

#### Examples

For `n` = `5`, we expect the following output: `1 2 Fizz 4 Buzz`
For `n` = `15`, we expect the following output: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz`

#### To-do

- You can start coding in `src/fizzBuzz.ts` and `tests/fizzBuzz.spec.ts` files that are already created
- Prerequisites: `npm install`
- Run tests: `npm test` (which is hot-reloading tests)
