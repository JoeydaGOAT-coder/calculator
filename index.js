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
const exponent = document.getElementById("exponent");
const openPar = document.getElementById("open-par");
const closePar = document.getElementById("close-par");
const clearBtn = document.getElementById("clear");
const factBtn = document.getElementById("fact");
const stoXBtn = document.getElementById("sto-x");
const stoYBtn = document.getElementById("sto-y");
const stoZBtn = document.getElementById("sto-z");
const xBtn = document.getElementById("x");
const yBtn = document.getElementById("y");
const zBtn = document.getElementById("z");

let answer;
let prevAnswer;
let x;
let y;
let z;
let expression = "";
let expFinal = false;

function fact (x) {
  return Number.isInteger(x) && x >= 0 ? (x > 1 ? fact(x-1) * x: 1): NaN;
}

function getExpression (string, isOperator) {  
  if (isOperator && expression.length === 0) {
    expression = prevAnswer.toString();
  }
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
  answerOut.textContent = typeof answer !== "string" ? answer.toString(): answer;
  prevAnswer = answer;
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
  expression = "";
  answer = "";
  
}

class Number {
  constructor(num) {
    this.value = num.toString();
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
  getExpression(new Operation(operation), true);
}

function addVar (x) {
  checkExpression();
  getExpression(new Operation(x));
}

function assX () {
  getAnswer();
  answerOut.textContent = "x = " + (typeof answer !== "string" ? answer.toString(): answer);
  x = answer;
}

function assY () {
  getAnswer();
  answerOut.textContent = "y = " + (typeof answer !== "string" ? answer.toString(): answer);
  y = answer;
}


function assZ () {
  getAnswer();
  answerOut.textContent = "z = " + (typeof answer !== "string" ? answer.toString(): answer);
  z = answer;
}

enterBtn.addEventListener("click", getAnswer);
one.addEventListener("click", addNum.bind(this, 1));
two.addEventListener("click", addNum.bind(this, 2));
three.addEventListener("click", addNum.bind(this, 3));
four.addEventListener("click", addNum.bind(this, 4));
five.addEventListener("click", addNum.bind(this, 5));
six.addEventListener("click", addNum.bind(this, 6));
seven.addEventListener("click", addNum.bind(this, 7));
eight.addEventListener("click", addNum.bind(this, 8));
nine.addEventListener("click", addNum.bind(this, 9));
zero.addEventListener("click", addNum.bind(this, 0));
add.addEventListener("click", addOp.bind(this, "+"));
subtract.addEventListener("click", addOp.bind(this, "-"));
multiply.addEventListener("click", addOp.bind(this, "*"));
divide.addEventListener("click", addOp.bind(this, "/"));
exponent.addEventListener("click", addOp.bind(this, "**"));
openPar.addEventListener("click", addOp.bind(this, "("));
closePar.addEventListener("click", addOp.bind(this, ")"));
clearBtn.addEventListener("click", clear.bind(this));
factBtn.addEventListener("click", addVar.bind(this, "fact("));
stoXBtn.addEventListener("click", assX.bind(this));
stoYBtn.addEventListener("click", assY.bind(this));
stoZBtn.addEventListener("click", assZ.bind(this));
xBtn.addEventListener("click", addVar.bind(this, "x"));
yBtn.addEventListener("click", addVar.bind(this, "y"));
zBtn.addEventListener("click", addVar.bind(this, "z"));
