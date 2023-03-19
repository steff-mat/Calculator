const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperator = ["add", "subtract", "multiply", "divide"];
const btnEqual = document.getElementById("equal");
let currentCalculation = document.getElementById("cc");
let oldCalculation = document.getElementById("oc");
let valA;
let valB;
let valOp;
let valEq;
let output;

const add = function (a, b) {
  return a + b;
};
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

function handler() {
  let arr = [];
  let arr1;
  let arr2;
  let temp = currentCalculation.innerText;
  if (temp.includes("+")) {
    arr = temp.split("+");
    arr1 = parseInt(arr[0]);
    arr2 = parseInt(arr[1]);
    return (output = operate("+", arr1, arr2));
  } else if (temp.includes("-")) {
    arr = temp.split("-");
    arr1 = parseInt(arr[0]);
    arr2 = parseInt(arr[1]);
    return (output = operate("-", arr1, arr2));
  } else if (temp.includes("*")) {
    arr = temp.split("*");
    arr1 = parseInt(arr[0]);
    arr2 = parseInt(arr[1]);
    return (output = operate("*", arr1, arr2));
  } else if (temp.includes("/")) {
    arr = temp.split("/");
    arr1 = parseInt(arr[0]);
    arr2 = parseInt(arr[1]);
    return (output = operate("/", arr1, arr2));
  }
}

function equalResult() {
  if (oldCalculation.innerText == "") {
    oldCalculation.innerText += currentCalculation.innerText;
  } else if (oldCalculation.innerText != "") {
    oldCalculation.innerText += ` |  ${currentCalculation.innerText}`;
  }
  currentCalculation.innerText = handler();
}

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
    equalResult();
  });
});

btnEqual.addEventListener("click", () => {
  equalResult();
});
