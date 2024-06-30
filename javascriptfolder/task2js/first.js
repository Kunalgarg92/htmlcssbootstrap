function submit() {
  var input = document.getElementsByClassName("text98")[0].value;

  function sortStringAlphabetically(str) {
    var chars = str.split("");
    var sortedChars = chars.sort();
    var sortedStr = sortedChars.join("");
    return sortedStr;
  }

  var sortedString = sortStringAlphabetically(input);

  document.getElementsByClassName("reverse98")[0].innerHTML =
    "The sorted string is: " + sortedString;
}
