const btnNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperator = ["add", "subtract", "multiply", "divide"];
const btnEqual = document.getElementById("equal");
const btnDot = document.getElementById("dot");
const btnAC = document.getElementById("ac");
const btnSwap = document.getElementById("swap");
let currentCalculation = document.getElementById("cc");
let oldCalculation = document.getElementById("oc");
let mathResult;
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

// OLD FUNCTION - LOGIC TOTALLY BROKEN
// function handler() {
//   let arr = [];
//   let arr1;
//   let arr2;
//   let temp = currentCalculation.innerText;
//   let output;
//   if (temp.includes("+")) {
//     arr = temp.split("+");
//     arr1 = parseFloat(arr[0]);
//     arr2 = parseFloat(arr[1]);

//     return (output = operate("+", arr1, arr2));
//   } else if (temp.includes("-")) {
//     arr = temp.split("-");
//     arr1 = parseFloat(arr[0]);
//     arr2 = parseFloat(arr[1]);
//     return (output = operate("-", arr1, arr2));
//   } else if (temp.includes("*")) {
//     arr = temp.split("*");
//     arr1 = parseFloat(arr[0]);
//     arr2 = parseFloat(arr[1]);
//     return (output = operate("*", arr1, arr2));
//   } else if (temp.includes("/")) {
//     arr = temp.split("/");
//     arr1 = parseFloat(arr[0]);
//     arr2 = parseFloat(arr[1]);
//     return (output = operate("/", arr1, arr2));
//   }
// }

// function equalResult() {
//   if (oldCalculation.innerText == "") {
//     oldCalculation.innerText += currentCalculation.innerText;
//   } else if (oldCalculation.innerText != "") {
//     oldCalculation.innerText += ` |  ${currentCalculation.innerText}`;
//   }
//   currentCalculation.innerText = handler();
// }

// btnNumber.forEach(function (x) {
//   const number = document.getElementById(x);
//   number.addEventListener("click", () => {
//     currentCalculation.innerText += number.innerText;
//   });
// });

// btnOperator.forEach((x) => {
//   const operator = document.getElementById(x);
//   operator.addEventListener("click", () => {
//     if (
//       currentCalculation.innerText.includes("+") ||
//       currentCalculation.innerText.includes("-") ||
//       currentCalculation.innerText.includes("*") ||
//       currentCalculation.innerText.includes("/")
//     ) {
//       equalResult();
//     }
//     currentCalculation.innerText += operator.innerText;
//   });
// });

// btnEqual.addEventListener("click", () => {
//   equalResult();
// });

// btnDot.addEventListener("click", () => {
//   currentCalculation.innerText += ".";
// });

// btnAC.addEventListener("click", () => {
//   currentCalculation.innerText = "";
//   oldCalculation.innerText = "";
// });

btnNumber.forEach(function (x) {
  const number = document.getElementById(x);
  number.addEventListener("click", () => {
    currentCalculation.innerText += number.innerText;
    // if (
    //   valueHold.hasOwnProperty("operatorType") === false &&
    //   valueHold.numberOne != ""
    // ) {
    //   valueHold.numberTwo += number.innerText;
    // } else {
    if (valueHold.hasOwnProperty("operatorType") === false) {
      valueHold.numberOne += number.innerText;
    } else if (valueHold.hasOwnProperty("operatorType") === true) {
      valueHold.numberTwo += number.innerText;
      // }
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
    }
  });
});

function updateDisplay() {
  oldCalculation.innerText = currentCalculation.innerText;
  currentCalculation.innerText = "";
  currentCalculation.innerText += valueHold.result;
  valueHold.numberOne = valueHold.result;
  valueHold.numberOne = "";
  valueHold.numberTwo = "";
  valueHold.result = "";
}

function equalize() {
  if (valueHold.hasOwnProperty("operatorType") === true) {
    if (valueHold.operatorType.includes("+")) {
      valueHold.result = operate(
        "+",
        parseFloat(valueHold.numberOne),
        parseFloat(valueHold.numberTwo)
      );
      console.log(valueHold.result);
    } else if (valueHold.operatorType.includes("-")) {
      valueHold.result = operate(
        "-",
        parseFloat(valueHold.numberOne),
        parseFloat(valueHold.numberTwo)
      );
      console.log(valueHold.result);
    } else if (valueHold.operatorType.includes("*")) {
      valueHold.result = operate(
        "*",
        parseFloat(valueHold.numberOne),
        parseFloat(valueHold.numberTwo)
      );
      console.log(valueHold.result);
    } else if (valueHold.operatorType.includes("/")) {
      valueHold.result = operate(
        "/",
        parseFloat(valueHold.numberOne),
        parseFloat(valueHold.numberTwo)
      );
      console.log(valueHold.result);
    }
  }
}
btnEqual.addEventListener("click", () => {
  equalize();
  updateDisplay();
});
