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
  const checkValue = (number) => cy.get("#total").should("eq", number);

  it("2개 숫자 덧셈", () => {
    clickDigits(1, 0);
    clickOperation("add");
    clickDigits(8, 4);
    clickOperation("equal");
    checkValue("94");
  });

  it("2개 숫자 뺄셈", () => {
    clickDigits(8, 0);
    clickOperation("sub");
    clickDigits(1, 7);
    clickOperation("equal");
    checkValue("63");
  });
});
