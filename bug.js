function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This line is problematic
  }
  return a + b;
}

console.log(foo(0, 0)); // Returns 0, as expected
console.log(foo(1, 2)); // Returns 3, as expected
console.log(foo(0, NaN)); // Returns NaN, this is fine.
console.log(foo(NaN, 0)); // Returns NaN, this is fine.
console.log(foo(NaN, NaN)); // Returns NaN, this is fine. 
console.log(foo(Infinity, -Infinity)); // Returns NaN, this is fine. 
console.log(foo(-Infinity, Infinity)); // Returns NaN, this is fine.