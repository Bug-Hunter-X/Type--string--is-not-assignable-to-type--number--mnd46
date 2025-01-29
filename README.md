# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common type error in TypeScript where a string is passed to a function expecting a number.  The error message will be helpful in identifying the issue.

## Setup

1. Clone the repository: `git clone <repository_url>`
2. Navigate to the directory: `cd type-error`
3. Compile and run the TypeScript code (using a TypeScript compiler like `tsc`): `tsc bug.ts && node bug.js`
4. Observe the error.

## Solution

The solution involves type checking or type conversion to ensure that only numbers are passed to the function.

Examine `bugSolution.ts` for the corrected code.