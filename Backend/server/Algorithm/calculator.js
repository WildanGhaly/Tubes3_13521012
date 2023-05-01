function calculateEquation(equationString) {
  const validOperators = ['+', '-', '*', '/', '^'];
  const validNumbers = /^[0-9]+(\.[0-9]+)?$/;

  const equation = equationString.replace(/\s/g, ''); // Remove all whitespace from the equation string
  const equationParts = equation.split(/([\+\-\*\/\^\(\)])/); // Split the equation into parts (numbers, operators, and parentheses)

  let result = null;
  let operator = null;
  let operatorStack = [];
  let numberStack = [];

  for (let i = 0; i < equationParts.length; i++) {
    const part = equationParts[i];

    if (part === '(') {
      // If the current part is an opening parenthesis, push the current operator and result to the stacks and reset them
      operatorStack.push(operator);
      numberStack.push(result);
      operator = null;
      result = null;
    } else if (part === ')') {
      // If the current part is a closing parenthesis, perform the operation in the parentheses and update the result
      const number = numberStack.pop();
      switch (operatorStack.pop()) {
        case '+':
          result += number;
          break;
        case '-':
          result -= number;
          break;
        case '*':
          result *= number;
          break;
        case '/':
          result /= number;
          break;
        case '^':
          result = Math.pow(result, number);
          break;
      }
    } else if (validNumbers.test(part)) {
      // If the current part is a number
      const number = parseFloat(part);

      if (result === null) {
        // If the result hasn't been initialized yet, set it to the current number
        result = number;
      } else if (operator !== null) {
        // If an operator is defined, perform the operation with the current number and update the result
        if ((operator === '*' || operator === '/') && (operatorStack[operatorStack.length - 1] === '+' || operatorStack[operatorStack.length - 1] === '-')) {
          // If the current operator has lower precedence than the previous operator on the stack, push the current operator and result to the stacks and reset them
          operatorStack.push(operator);
          numberStack.push(result);
          operator = null;
          result = number;
        } else {
          switch (operator) {
            case '+':
              result += number;
              break;
            case '-':
              result -= number;
              break;
            case '*':
              result *= number;
              break;
            case '/':
              result /= number;
              break;
            case '^':
              result = Math.pow(result, number);
              break;
          }
        }
      }
    } else if (validOperators.includes(part)) {
      // If the current part is an operator, update the operator
      operator = part;
    } else {
      // If the current part is not a valid number, operator, or parenthesis, return an error
      return 'Error: Invalid equation';
    }
  }

  return result;
}
