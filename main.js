'use strict';

const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const swap = document.getElementById('swap');
const dot = document.getElementById('dot');
const ac = document.getElementById('ac');
const c = document.getElementById('c');
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

function disableDot() {
  dot.addEventListener('click', () => {
    dot.setAttribute('style', 'pointer-events: none;');
  });
}
function enableDot() {
  dot.setAttribute('style', 'pointer-events: auto;');
}

number.forEach((button) => {
  button.addEventListener('click', () => {
    currentCalculation.innerText += button.innerText;
    switch (valueHold.hasOwnProperty('operatorType')) {
      case false:
        valueHold.numberOne += button.innerText;
        disableDot();
        break;
      case true:
        valueHold.numberTwo += button.innerText;
        disableDot();
        break;
    }
  });
});

operator.forEach((button) => {
  button.addEventListener('click', () => {
    enableDot();
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
        infinity();
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
    delete valueHold['operatorType'];
  }
}

equal.addEventListener('click', () => {
  enableDot();
  equalize();
  updateDisplay();
  infinity();
});

swap.addEventListener('click', () => {
  if (valueHold.numberOne.length < 1 && valueHold.numberTwo.length < 1) {
    currentCalculation.innerText += swap.innerText;
    valueHold.numberOne += swap.innerText;
    disableDot();
  } else if (
    valueHold.numberOne === '' &&
    valueHold.hasOwnProperty('operatorType') === true
  ) {
    currentCalculation.innerText += swap.innerText;
    valueHold.numberTwo += swap.innerText;
    disableDot();
  } else if (
    valueHold.numberOne !== '' &&
    valueHold.hasOwnProperty('operatorType') === true
  ) {
    currentCalculation.innerText += swap.innerText;
    valueHold.numberTwo += swap.innerText;
    disableDot();
  }
});

ac.addEventListener('click', () => {
  valueHold.numberOne = '';
  delete valueHold['operatorType'];
  valueHold.numberTwo = '';
  valueHold.result = '';
  currentCalculation.innerText = '';
  oldCalculation.innerText = '';
});

c.addEventListener('click', () => {
  let temp = currentCalculation.innerText.split('');
  temp.pop();
  currentCalculation.innerText = temp.join('');
  delete valueHold['operatorType'];
});

function infinity() {
  if (currentCalculation.innerText === 'Infinity') {
    valueHold.numberOne = '';
    delete valueHold['operatorType'];
    valueHold.numberTwo = '';
    valueHold.result = '';
    currentCalculation.innerText = 'BAD IDEA BUDDY!';
    oldCalculation.innerText = 'PRESS A/C!';
    for (let num of number) {
      num.setAttribute('style', 'pointer-events: none;');
    }
    for (let op of operator) {
      op.setAttribute('style', 'pointer-events: none;');
    }
    equal.setAttribute('style', 'pointer-events: none;');
    swap.setAttribute('style', 'pointer-events: none;');
    dot.setAttribute('style', 'pointer-events: none;');
  }
}

function rounding(x) {
  Math.round(x * 100) / 100;
}
