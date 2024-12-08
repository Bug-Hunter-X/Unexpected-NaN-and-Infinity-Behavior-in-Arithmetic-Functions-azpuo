# Unexpected NaN and Infinity Behavior in Arithmetic Functions

This repository demonstrates a subtle bug in a JavaScript function involving arithmetic operations. The function `foo` appears to work correctly for most inputs but returns unexpected results when dealing with `NaN`, `Infinity`, and `-Infinity`.

The bug stems from JavaScript's loose comparison and its handling of these special numeric values.  While this function is simple, the issue highlights potential problems in more complex functions where similar edge cases might be overlooked.

The `bug.js` file contains the buggy code, while `bugSolution.js` offers a potential fix. The README provides detailed explanations of the issue and its resolution.