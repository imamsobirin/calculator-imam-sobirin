// mengambil setiap elemen
const numbers = document.querySelectorAll(".number"),
  calculatorScreen = document.querySelector(".calculator-screen"),
  operators = document.querySelectorAll(".operator"),
  equalSign = document.querySelector(".equal-sign"),
  clearBtn = document.querySelector(".all-clear"),
  decimal = document.querySelector(".decimal");

// fungsi memperbarui tampilan pada layar
const updateScreen = (operation) => {
  calculatorScreen.value = operation;
};

// variabel temp number
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";
let displayedOperation = "";

// fungsi input number
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

// fungsi input operator
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

// fungsi all clear
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
  displayedOperation = "";
};

// fungsi kalkulasi
const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};

// add "click" event to number button
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    displayedOperation += event.target.value;
    updateScreen(displayedOperation);
  });
});

// add "click" event to operator button
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    displayedOperation += event.target.value;
    updateScreen(displayedOperation);
  });
});

// add "click" event to equal sign button
equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
  displayedOperation = "";
});

// add "click" event to all clear button
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

// get dot  function()
inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  } else currentNumber += dot;
};

// add "click" event to decimal button
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
  displayedOperation += event.target.value;
});
