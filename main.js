const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const swap = document.getElementById('swap');
let currentCalculation = document.getElementById('cc');
let oldCalculation = document.getElementById('oc');
const valueHold = {
  numberOne: '',
  numberTwo: '',
  result: '',
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
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

function swapper(x) {
  if (x > 0) {
    return -x;
  } else if (x < 0) {
    return Math.abs(x);
  }
}

number.forEach((button) => {
  button.addEventListener('click', () => {
    currentCalculation.innerText += button.innerText;
    switch (valueHold.hasOwnProperty('operatorType')) {
      case false:
        valueHold.numberOne += button.innerText;
        break;
      case true:
        valueHold.numberTwo += button.innerText;
        break;
    }
  });
});

operator.forEach((button) => {
  button.addEventListener('click', () => {
    switch (valueHold.hasOwnProperty('operatorType')) {
      case false:
        valueHold.operatorType = button.innerText;
        currentCalculation.innerText += button.innerText;
        break;
      case true:
        equalize();
        updateDisplay();
        valueHold.operatorType = button.innerText;
        currentCalculation.innerText += button.innerText;
        console.log(valueHold.operatorType);
        break;
    }
  });
});

function updateDisplay() {
  oldCalculation.innerText = currentCalculation.innerText;
  currentCalculation.innerText = '';
  currentCalculation.innerText += valueHold.result;
  valueHold.numberOne = valueHold.result;
  valueHold.numberTwo = '';
}

function equalize() {
  if (valueHold.hasOwnProperty('operatorType') === true) {
    valueHold.result = operate(
      valueHold.operatorType,
      parseFloat(valueHold.numberOne),
      parseFloat(valueHold.numberTwo)
    );
  }
}

equal.addEventListener('click', () => {
  equalize();
  updateDisplay();
});

swap.addEventListener('click', () => {
  if (valueHold.numberOne !== '') {
    swapper(valueHold.numberOne);
  } else if (valueHold.numberTwo !== '' && valueHold.numberOne !== '') {
    swapper(valueHold.numberTwo);
  }
});
