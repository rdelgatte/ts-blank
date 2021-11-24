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
### 1. Reversible numbers 

How many reversible numbers are there below one-billion?

> Some positive integers n have the property that the sum [ n + reverse(n) ] consists entirely of odd (decimal) digits. For instance, 36 + 63 = 99 and 409 + 904 = 1313. We will call such numbers reversible; so 36, 63, 409, and 904 are reversible. Leading zeroes are not allowed in either n or reverse(n).

There are 120 reversible numbers below one-thousand. 
#### To-do 

* You can start coding in `src/reversible.ts` and `tests/reversible.spec.ts` files that are already created 
* Prerequisites: `npm install`
* Run tests: `npm test` (which is hot-reloading tests)

#### Solution 

The expected solution is the "naive" approach which basically consist of decomposing the problem by following the problem instructions. Even though the problem is not complex, we expect the developer to write efficient code and tests (unit tests and property-based tests).

Another approach can be found by analysing deeper the raising patterns of the problem but we do not necessarily expect the candidate to develop it. 
