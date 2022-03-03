const recursiveFactorial = function (n) {
  if (n < 2) return 1;
  return n * recursiveFactorial(n - 1);
};

let factorial = recursiveFactorial(5);

console.log(factorial);
