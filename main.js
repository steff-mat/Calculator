let oldCalculation = document.getElementById("oc").innerText;
let currentCalculation = document.getElementById("cc");
let currentValueA;
let currentOperator;
let currentValueB;
let currentResult;
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const btnSwap = document.getElementById("swap");
const btnDot = document.getElementById("dot");
const btnClear = document.getElementById("ac");
const btnEnter = document.getElementById("enter");

const btnNumber = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operators");

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (x, a, b) {
  return x;
};

// do {
//   for (let i = 0; i < btnNumber.length; i++) {
//     btnNumber[i].addEventListener("click", () => {
//       currentCalculation.innerText += parseInt(btnNumber[i].innerText);
//       currentValueA = currentCalculation.innerText;
//     });
//   }
// } while (currentValueA === undefined);

// do {
//   for (let i = 0; i < btnNumber.length; i++) {
//     btnNumber[i].addEventListener("click", () => {
//       currentCalculation.innerText += parseInt(btnNumber[i].innerText);
//       currentValueB = currentCalculation.innerText;
//     });
//   }
// } while (currentValueB === undefined);

// for (let i = 0; i < btnOperator.length; i++) {
//   btnOperator[i].addEventListener("click", () => {
//     currentCalculation.innerText += btnOperator.innerText;
//     currentValueA = currentValueB;
//     currentValueB = undefined;
//     console.log("A2", currentValueA);
//     console.log("B2", currentValueB);
//   });
// }

// btnEnter.addEventListener("click", () => {});
