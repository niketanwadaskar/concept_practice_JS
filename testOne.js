function multiply(number) {
  // The inner function will be returned until the final call with no arguments
  var multiplyRecursive = function (num2) {
    if (num2 === undefined) {
      return function () {
        return number;
      }; // Final result is returned when the chain is ended with `()`
    } else {
      return function (nextNum) {
        return multiply(number * nextNum);
      };
    }
  };
  return multiplyRecursive;
}
// Usage:
console.log(multiply(1)(2)(3)(4)(5)(6)()); // Output: 720
