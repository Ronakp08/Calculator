let answer = document.getElementById("ans");
let input = "";

function valueInput(value) {
  input = input + value;
  answer.textContent = input;
}

function clearInput() {
  input = "";
  answer.textContent = "0";
}

function calculate() {
  let result = calculation(input);
  answer.textContent = result;
  input = result.toString();
}

function calculation(expression) {
  let operator = expression.match(/[\+\-\*\/%]/g);
  let number = expression.split(/[\+\-\*\/%]/).map(Number);

  if (!operator || number.some(isNaN)) {
    answer.textContent = "invalid";
    return;
  }

  let result = number[0];

  for (let i = 0; i < operator.length; i++) {
    let nextInput = number[i + 1];

    switch (operator[i]) {
      case '+':
        result += nextInput;
        break;
      case '-':
        result -= nextInput;
        break;
      case '*':
        result *= nextInput;
        break;
      case '/':
        if (nextInput === 0) {
          answer.textContent = "error"; // Handle division by zero
          return;
        }
        result /= nextInput;
        break;
      case '%':
        result %= nextInput;
        break;
      default:
        answer.textContent = "error";
        return;
    }
  }

  return result;
}
