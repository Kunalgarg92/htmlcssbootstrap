document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document
      .getElementById("confirmpassword")
      .value.trim();
    var state = document.getElementById("state").value.trim();
    var address = document.getElementById("address").value.trim();
    var phonenumber = document.getElementById("phonenumber").value.trim();
    var age = document.getElementById("age").value.trim();

    // Reset error messages
    document.getElementById("firstnameError").style.display = "none";
    document.getElementById("lastnameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    document.getElementById("confirmpasswordError").style.display = "none";
    document.getElementById("stateError").style.display = "none";
    document.getElementById("addressError").style.display = "none";
    document.getElementById("phoneError").style.display = "none";
    document.getElementById("ageError").style.display = "none";

    var isValid = true;

    // Validation checks
    if (firstname === "") {
      document.getElementById("firstnameError").style.display = "inline";
      isValid = false;
    }

    if (lastname === "") {
      document.getElementById("lastnameError").style.display = "inline";
      isValid = false;
    }

    if (email === "") {
      document.getElementById("emailError").style.display = "inline";
      isValid = false;
    }

    if (password.length < 6) {
      document.getElementById("passwordError").style.display = "inline";
      isValid = false;
    }

    if (confirmPassword !== password) {
      document.getElementById("confirmpasswordError").style.display = "inline";
      isValid = false;
    }

    if (state === "") {
      document.getElementById("stateError").style.display = "inline";
      isValid = false;
    }

    if (address === "") {
      document.getElementById("addressError").style.display = "inline";
      isValid = false;
    }

    if (phonenumber === "") {
      document.getElementById("phoneError").style.display = "inline";
      isValid = false;
    }

    if (age === "") {
      document.getElementById("ageError").style.display = "inline";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
