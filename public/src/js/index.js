(function () {
  const DIGIT_BUTTONS = Array.from(document.querySelectorAll(".digit"));
  const OPER_BUTTONS = Array.from(document.querySelectorAll(".operation"));
  const TOTAL_FIELD = document.getElementById('total');
  const AC_BUTTON = document.querySelector('.modifier');
  const OPER_UNIT = {
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

  let numOrder = 1;

  const setTotal = () => {
    const fieldText = (inputData.num1 ?? 0) + (inputData.oper ?? '') + (inputData.num2 ?? '');
    TOTAL_FIELD.innerText = fieldText;
  }

  const handleClickDigit = (e) => {
    const key = 'num' + numOrder;
    if (inputData[key] !== null && inputData[key].toString().length >= 3) {
      return alert('3자리까지만 입력이 가능합니다.');
    }
    const clickDigit = e.target.innerText;
    inputData[key] = inputData[key] === null ? +clickDigit : +(inputData[key].toString() + clickDigit);
    setTotal();
  }

  const handleClickOper = (e) => {
    const oper = e.target.innerText;

    if (oper !== OPER_UNIT.EQUAL) {
      inputData.oper = oper;
      numOrder = 2;
    } else {
      let resultValue = 0;
      switch (inputData.oper) {
        case OPER_UNIT.ADD:
          resultValue = inputData.num1 + inputData.num2;
          break;
        case OPER_UNIT.SUB:
          resultValue = inputData.num1 - inputData.num2;
          break;
        case OPER_UNIT.MULTI:
          resultValue = inputData.num1 * inputData.num2;
          break;
        case OPER_UNIT.DIVI:
          resultValue = Math.floor(inputData.num1 / inputData.num2);
          break;
      }
      resetData(resultValue);
    }
    setTotal();
  }

  const handleClickAC = () => {
    resetData();
    setTotal();
  }

  const resetData = (value = null) => {
    inputData.num1 = value;
    inputData.num2 = null;
    inputData.oper = null;
    numOrder = 1;
    setTotal();
  }

  DIGIT_BUTTONS.forEach(digit => digit.addEventListener('click', handleClickDigit))
  OPER_BUTTONS.forEach(oper => oper.addEventListener('click', handleClickOper))
  AC_BUTTON.addEventListener('click', handleClickAC);
})();