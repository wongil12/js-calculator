const DIGIT_BUTTONS = Array.from(document.querySelectorAll(".digit"));
const OPER_BUTTONS = Array.from(document.querySelectorAll(".operation"));
const OPER = {
  ADD: "+",
  SUB: "-",
  MULTI: "X",
  DIVI: "/",
  EQUAL: "=",
};

const inputData = {
  num1: null,
  oper: null,
  num2: null,
};
