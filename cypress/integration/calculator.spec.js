import { OPERATION } from "../fixtures/contants";

describe("Case 1 Test", () => {
  before(() => {
    cy.visit("/");
  });
  const clickDigits = (...numbers) =>
    numbers.forEach((number) => cy.get(`.digits`).contains(number).click());
  const clickOperation = (oper) =>
    cy
      .get(`.operations > :nth-child(${OPERATION[oper.toUpperCase()]})`)
      .click();
  const clickEqual = () =>
    cy.get(`.operations > :nth-child(${OPERATION.EQUAL})`).click();
  const checkValue = (number) =>
    cy.get("#total").should("contain.html", number);
  const clickAc = () => cy.get(".modifiers").contains("AC").click();

  it("2개 숫자 덧셈", () => {
    clickDigits(1, 0);
    clickOperation("add");
    clickDigits(8, 4);
    clickEqual();
    checkValue("94");
    clickAc();
  });

  it("2개 숫자 뺄셈", () => {
    clickDigits(8, 0);
    clickOperation("sub");
    clickDigits(1, 7);
    clickEqual();
    checkValue("63");
    clickAc();
  });

  it("2개 숫자 곱셈", () => {
    clickDigits(1, 2);
    clickOperation("multi");
    clickDigits(8);
    clickEqual();
    checkValue("96");
    clickAc();
  });

  it("2개 숫자 나눗셈", () => {
    clickDigits(1, 2);
    clickOperation("divi");
    clickDigits(3);
    clickEqual();
    checkValue("4");
  });

  it("AC 버튼 클릭 시 0으로 초기화", () => {
    checkValue("4");
    clickAc();
    checkValue("0");
  });

  it("최대 3자리 수 입력", () => {
    clickDigits(1, 2, 3, 4, 5);
    checkValue("123");
    clickAc();
  });

  it("소수점 이하 버림", () => {
    clickDigits(1, 0);
    clickOperation("divi");
    clickDigits(3);
    clickEqual();
    checkValue("3");
  });
});
