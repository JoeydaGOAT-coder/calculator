const expressionOut = document.getElementById("expression");
const answerOut = document.getElementById("output");
const enterBtn = document.getElementById("enter-btn");

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const zero = document.getElementById("0");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let answer;
let prevAnswer;
let expression = "";
let expFinal = false;

function getExpression (string) {  
  expression += string.value;
  expressionOut.textContent = expression;
}

function getAnswer () {
  try {
    answer = eval(expression);
    if (answer === NaN || answer === Infinity) {
      answer = "Divide By Zero Error";
    }
  } catch (error) {
    answer = "Syntax Error";
  }
  expFinal = true;
  answerOut.textContent = typeof answer !== "string" ? toString(answer): answer;
}

function checkExpression () {
  if (expFinal) {
    expressionOut.textContent = "";
    expression = "";
    expFinal = false;
  }
}

function clear () {
  answerOut.textContent = "";
  expressionOut.textContent = "";
}

class Number {
  constructor(num) {
    this.value = toString(num);
  }
}

class Operation {
  constructor(operation) {
    this.value = operation;
  }
}

function addNum (num) {
  checkExpression();
  getExpression(new Number(num));
}

function addOp (operation) {
  checkExpression();
  getExpression(new Operation(operation));
}

enterBtn.addEventListener("click", getAnswer());
one.addEventListener("click", addNum(1));
two.addEventListener("click", addNum(2));
three.addEventListener("click", addNum(3));
four.addEventListener("click", addNum(4));
five.addEventListener("click", addNum(5));
six.addEventListener("click", addNum(6));
seven.addEventListener("click", addNum(7));
eight.addEventListener("click", addNum(8));
nine.addEventListener("click", addNum(9));
zero.addEventListener("click", addNum(0));
add.addEventListener("click", addOp("+"));
subtract.addEventListener("click", addOp("-"));
multiply.addEventListener("click", addOp("*"));
divide.addEventListener("click", addOp("/"));
