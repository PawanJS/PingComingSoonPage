"use strict";
const form = document.querySelector(".js-form");
const email = document.querySelector(".js-email");

// Valid Email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Error Message
function setErrorFor(input, message) {
  const formControl = email.parentElement;
  const errorMessage = formControl.querySelector(".js-error-msg");
  formControl.classList.add("error");
  errorMessage.innerText = message;
  errorMessage.style.color = "hsl(354, 100%, 66%)";
}

// Success Message
function setSuccessFor(input, message) {
  const formControl = email.parentElement;
  const successMessage = formControl.querySelector(".js-error-msg");
  formControl.classList.remove("error");
  successMessage.innerText = message;
  successMessage.style.color = "#16c79a";
}

// Checking Input
function checkInput() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email is not valid!");
  } else {
    setSuccessFor(email, "Your email is successfully Submitted.");
    email.value = "";
  }
}

// Event handlers
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkInput();
});
