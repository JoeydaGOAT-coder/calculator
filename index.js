const expressionOut = document.getElementById("expresion");
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

let One = {
  type: "number",
  value: 1
};
let Two = {
  type: "number",
  value: 2
};
let Three = {
  type: "number",
  value: 3
};
let Four = {
  type: "number",
  value: 4
};
let Five = {
  type: "number",
  value: 5
};
let Six = {
  type: "number",
  value: 6
};
let Seven = {
  type: "number",
  value: 7
};
let Eight = {
  type: "number",
  value: 8
};
let Nine = {
  type: "number",
  value: 9
};
let Zero = {
  type: "number",
  value: 0
};

let Plus = {
  type: "add"
};
let Minus = {
  type: "subtract"
};
let Multiply = {
  type: "multiply"
};
let Divide = {
  type: "divide"
};

let expression = [];
let answer;

function addDigit (digit) {
  if (expression.length() > 1) {
    if (expression
