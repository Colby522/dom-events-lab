/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button')
const calculator = document.querySelector('#calculator')

/*-------------------------------- Variables --------------------------------*/

let firstValue = null
let secondValue = null
let operation = null

/*------------------------ Cached Element References ------------------------*/

let display = document.querySelector('.display')
  display.textContent = 0
let numbers = document.querySelectorAll('.number')
let operationButtons = document.querySelectorAll('.operator')
let equalsButton = document.querySelector('.equals')
let addButton = document.querySelector('#add')
let subtractButton = document.querySelector('#subtract')
let multiplyButton = document.querySelector('#multiply')
let divideButton = document.querySelector('#divide')
let clearButton = document.querySelector('#clear')

/*----------------------------Functions--------------------------------------*/
const add = () => {
  return firstValue + secondValue
}

const subtract = () => {
  return firstValue - secondValue
}

const multiply = () => {
  return firstValue * secondValue
}

const divide = () => {
  return firstValue / secondValue
}

const calculation = () => {
  let total
  if(operation  === '+') {
    total = add()
  } else if(operation === '-') {
    total = subtract()
  } else if(operation === '*') {
    total = multiply()
  } else if(operation === '/') {
    total = divide()
  }
  display.textContent = total
}

const equals = () => {
  secondValue = parseInt(display.textContent)
  calculation()
}

const operator = (event) => {
  firstValue = parseInt(display.textContent)
  operation = event.target.id
  display.textContent = 0
}

const clear = () => {
  display.textContent = 0
  firstValue = null
  secondValue = null
  operation = null
}

/*----------------------------- Event Listeners -----------------------------*/

equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clear);

numbers.forEach((number) => {
  number.addEventListener('click', (event) => {
    display.innerText = Number(
      display.innerText + event.target.innerText
    );
  });
});

operationButtons.forEach((operation) => {
  operation.addEventListener('click', operator);
});
