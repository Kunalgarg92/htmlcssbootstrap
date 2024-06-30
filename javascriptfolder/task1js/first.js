function submit() {
  var x = document.getElementsByClassName("number98")[0].value;

  function reverseFunction(x, reversed = 0) {
    if (x === 0) {
      return reversed;
    }
    return reverseFunction(Math.floor(x / 10), reversed * 10 + (x % 10));
  }

  var reversedNumber = reverseFunction(parseInt(x));

  document.getElementsByClassName("integer98")[0].innerHTML =
    "reverse of number : " + reversedNumber;
}
