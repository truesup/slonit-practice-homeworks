const operations = {
  plus: '+',
  minus: '-',
  multiply: '*',
  divide: '/',
};

const operationFunctions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

function calculate(a, b, operator) {
  return operationFunctions[operator]
    ? operationFunctions[operator](a, b)
    : NaN;
}

const selectedOperation = 'multiply';
console.log(calculate(6, 3, operations[selectedOperation]));
