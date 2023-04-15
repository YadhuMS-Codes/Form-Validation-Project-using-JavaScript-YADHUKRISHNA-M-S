const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get user inputs
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  
  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  // Define validation patterns
  const namePattern = /^[a-zA-Z]{5,}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^(?!1234567890)\d{10}$/;
  const passwordPattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  // Validate name
  if (!namePattern.test(nameInput.value)) {
    nameError.innerHTML = "Enter a valid name (at least 5 characters).";
  } else {
    nameError.innerHTML = "";
  }

  // Validate email
  if (!emailPattern.test(emailInput.value)) {
    emailError.innerHTML = "Enter a valid email address.";
  } else {
    emailError.innerHTML = "";
  }

  // Validate phone number
  if (!phonePattern.test(phoneInput.value)) {
    phoneError.innerHTML = "Enter a valid 10-digit phone number.";
  } else {
    phoneError.innerHTML = "";
  }

  // Validate password
  if (passwordInput.value.length < 8) {
    passwordError.innerHTML = "Password must be at least 8 characters long.";
  } else if (passwordInput.value.toLowerCase() === "password" || 
             passwordInput.value.toLowerCase() === nameInput.value.toLowerCase()) {
    passwordError.innerHTML = "Password cannot be 'password' or your name.";
  } else if (!passwordPattern.test(passwordInput.value)) {
    passwordError.innerHTML = "";
  } else {
    passwordError.innerHTML = "";
  }

  // Validate confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.innerHTML = "Passwords do not match.";
  } else {
    confirmPasswordError.innerHTML = "";
  }

});