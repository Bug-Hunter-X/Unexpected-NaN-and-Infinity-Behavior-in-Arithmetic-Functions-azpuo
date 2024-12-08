function foo(a, b) {
  // Check for NaN or Infinity before performing arithmetic operations
  if (isNaN(a) || isNaN(b) || a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
    return NaN; // Handle these cases explicitly
  }
  if (a === 0 && b === 0) {
    return 0; // Handle the 0, 0 case explicitly
  }
  return a + b;
}

console.log(foo(0, 0)); // Returns 0
console.log(foo(1, 2)); // Returns 3
console.log(foo(0, NaN)); // Returns NaN
console.log(foo(NaN, 0)); // Returns NaN
console.log(foo(NaN, NaN)); // Returns NaN
console.log(foo(Infinity, -Infinity)); // Returns NaN
console.log(foo(-Infinity, Infinity)); // Returns NaN