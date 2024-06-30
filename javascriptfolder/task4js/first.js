function date() {
  function getFormattedDate() {
    var date = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    var formattedDate = day + "/" + months[monthIndex] + "/" + year;
    return formattedDate;
  }
  var formattedDate = getFormattedDate();
  document.getElementsByClassName("date")[0].innerHTML = formattedDate;
}
function time() {
  function displayCurrentTime() {
    var date = new Date();

    var dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });
    var month = date.toLocaleString("en-US", { month: "short" });
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    var timeZoneAbbreviation = date
      .toLocaleString("en-US", { timeZoneName: "short" })
      .split(" ")[2];

    var formattedTime =
      dayOfWeek +
      " " +
      month +
      " " +
      dayOfMonth +
      " " +
      year +
      " " +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds +
      " GMT" +
      date.getTimezoneOffset();

    document.getElementsByClassName("time")[0].innerHTML = formattedTime;
  }

  displayCurrentTime();
}
