const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperator = ["add", "subtract", "multiply", "divide"];
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("dot");
const btnAC = document.getElementById("ac");
const btnSwap = document.getElementById("swap");
let currentCalculation = document.getElementById("cc");
let ccText = currentCalculation.innerText;
let oldCalculation = document.getElementById("oc");

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
  let output;
  if (temp.includes("+")) {
    arr = temp.split("+");
    arr1 = parseFloat(arr[0]);
    arr2 = parseFloat(arr[1]);

    return (output = operate("+", arr1, arr2));
  } else if (temp.includes("-")) {
    arr = temp.split("-");
    arr1 = parseFloat(arr[0]);
    arr2 = parseFloat(arr[1]);
    return (output = operate("-", arr1, arr2));
  } else if (temp.includes("*")) {
    arr = temp.split("*");
    arr1 = parseFloat(arr[0]);
    arr2 = parseFloat(arr[1]);
    return (output = operate("*", arr1, arr2));
  } else if (temp.includes("/")) {
    arr = temp.split("/");
    arr1 = parseFloat(arr[0]);
    arr2 = parseFloat(arr[1]);
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
    if (
      currentCalculation.innerText.includes("+") ||
      currentCalculation.innerText.includes("-") ||
      currentCalculation.innerText.includes("*") ||
      currentCalculation.innerText.includes("/")
    ) {
      equalResult();
    }
    currentCalculation.innerText += operator.innerText;
  });
});

btnEqual.addEventListener("click", () => {
  equalResult();
});

btnDot.addEventListener("click", () => {
  currentCalculation.innerText += ".";
});

btnAC.addEventListener("click", () => {
  currentCalculation.innerText = "";
  oldCalculation.innerText = "";
});
