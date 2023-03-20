const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperator = ["add", "subtract", "multiply", "divide"];
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("dot");
const btnAC = document.getElementById("ac");
const btnSwap = document.getElementById("swap");
let currentCalculation = document.getElementById("cc");
let oldCalculation = document.getElementById("oc");
const valueHold = {
  numberOne: "",
  numberTwo: "",
  result: "",
};

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

btnNumber.forEach(function (x) {
  const number = document.getElementById(x);
  number.addEventListener("click", () => {
    currentCalculation.innerText += number.innerText;
    if (valueHold.hasOwnProperty("operatorType") === false) {
      valueHold.numberOne += number.innerText;
    } else if (valueHold.hasOwnProperty("operatorType") === true) {
      valueHold.numberTwo += number.innerText;
    }
  });
});

btnOperator.forEach((x) => {
  const operator = document.getElementById(x);
  operator.addEventListener("click", () => {
    if (valueHold.hasOwnProperty("operatorType") === false) {
      currentCalculation.innerText += operator.innerText;
      valueHold.operatorType = operator.innerText;
    } else {
      equalize();
      updateDisplay();
      currentCalculation.innerText += operator.innerText;
    }
  });
});

function updateDisplay() {
  oldCalculation.innerText = currentCalculation.innerText;
  currentCalculation.innerText = "";
  currentCalculation.innerText += valueHold.result;
  valueHold.numberOne = "";
  valueHold.numberOne = valueHold.result;
  valueHold.numberTwo = "";
  valueHold.result = "";
}

function equalize() {
  if (valueHold.hasOwnProperty("operatorType") === true) {
    valueHold.result = operate(
      valueHold.operatorType,
      parseFloat(valueHold.numberOne),
      parseFloat(valueHold.numberTwo)
    );
  }
}

btnEqual.addEventListener("click", () => {
  equalize();
  updateDisplay();
});
