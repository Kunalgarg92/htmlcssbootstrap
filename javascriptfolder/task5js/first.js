document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var firstname = document.getElementById("firstname");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var address = document.getElementById("address");
    var firstnameError = document.getElementById("firstnameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var addressError = document.getElementById("addressError");
    firstname.classList.remove("input-error");
    email.classList.remove("input-error");
    password.classList.remove("input-error");
    address.classList.remove("input-error");
    firstnameError.style.display = "none";
    emailError.style.display = "none";
    passwordError.style.display = "none";
    addressError.style.display = "none";
    var isValid = true;
    if (firstname.value.trim() === "") {
      firstname.classList.add("input-error");
      firstnameError.style.display = "block";
      isValid = false;
    }
    if (email.value.trim() === "") {
      email.classList.add("input-error");
      emailError.style.display = "block";
      isValid = false;
    }
    if (password.value.trim() === "") {
      password.classList.add("input-error");
      passwordError.style.display = "block";
      isValid = false;
    }
    if (address.value.trim() === "") {
      address.classList.add("input-error");
      addressError.style.display = "block";
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault();
    }
  });
