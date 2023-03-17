const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperator = ["add", "subtract", "multiply", "divide"];
const btnEqual = document.getElementById("equal");
let currentCalculation = document.getElementById("cc");
let valA;
let valB;
let valOp;
let valEq;

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

function handler() {}

btnNumber.forEach(function (x) {
  const number = document.getElementById(x);
  number.addEventListener("click", () => {
    currentCalculation.innerText += number.innerText;
  });
});

btnOperator.forEach((x) => {
  const operator = document.getElementById(x);
  operator.addEventListener("click", () => {
    currentCalculation.innerText += operator.innerText;
  });
});

btnEqual.addEventListener("click", () => {
  handler();
  currentCalculation.innerText += btnEqual.innerText;
});
