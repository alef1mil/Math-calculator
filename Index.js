class Calculator {
  static sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  };
  static mult(...numbers) {
    return numbers.reduce((acc, curr) => acc * curr, 1)
  };
  static power(a, b) {
    return a ** b
  }
  static division(a, b) {
    if (b == 0) {
      return console.error("Cannot divide by 0")
    }
    return a / b
  }
  
};

module.exports = Calculator;
