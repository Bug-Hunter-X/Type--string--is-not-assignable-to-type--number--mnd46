function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string | number): number {
  const bNumber = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(bNumber)) {
    throw new Error("Invalid input: b must be a number or a parsable string");
  }
  return a + bNumber;
}

let result1 = add(1, 2); // Works correctly
let result2 = addSafe(1, "2"); // Works correctly
//let result3 = add(1, "2"); // This will still cause a compile-time error if you try to compile this version.

console.log(result1); // Output: 3
console.log(result2); // Output: 3