/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')
const number = document.querySelectorAll('.button number')
const operand = document.querySelectorAll('.button operator')
const equals = document.querySelector('.button equals')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });  
  
/*-------------------------------- Functions --------------------------------*/

function  showDisplay(input) {
    display === 
}

function clearDisplay() {

}

function calculate() {

}