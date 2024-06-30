function multiply() {
  var number1 = parseInt(document.getElementsByClassName("number1")[0].value);
  var number2 = parseInt(document.getElementsByClassName("number2")[0].value);
  var result = number1 * number2;
  document.getElementsByClassName("result")[0].innerHTML =
    "The result is: " + result;
}

function divide() {
  var number1 = parseInt(document.getElementsByClassName("number1")[0].value);
  var number2 = parseInt(document.getElementsByClassName("number2")[0].value);
  var result = number1 / number2;
  document.getElementsByClassName("result")[0].innerHTML =
    "The result is: " + result;
}
