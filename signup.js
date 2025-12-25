const passwordInput = document.getElementById("passwordInput");
const eightChar = document.getElementById("eightChar");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const containNumber = document.getElementById("containNumber");
const specialChar = document.getElementById("specialChar");
const sumNumbers = document.getElementById("sumNumbers");
const monthName = document.getElementById("monthName");
const romanNumeral = document.getElementById("romanNumeral");
const noTriple = document.getElementById("noTriple");
const btn = document.querySelector(".loginBtn .login");

btn.addEventListener("click", function () {
  const password = passwordInput.value;
  const alertBox = document.querySelector(".alertMessages");
  if (password.length > 0) {
    alertBox.classList.remove("none");
  } else {
    alertBox.classList.add("none");
  }
});

passwordInput.addEventListener("input", function () {
  const password = passwordInput.value;

  if (password.length >= 8) {
    eightChar.classList.add("valid");
    eightChar.classList.remove("invalid");
  } else {
    eightChar.classList.add("invalid");
    eightChar.classList.remove("valid");
  }

  if (/[a-z]/.test(password)) {
    lowerCase.classList.add("valid");
    lowerCase.classList.remove("invalid");
  } else {
    lowerCase.classList.add("invalid");
    lowerCase.classList.remove("valid");
  }

  if (/[A-Z]/.test(password)) {
    upperCase.classList.add("valid");
    upperCase.classList.remove("invalid");
  } else {
    upperCase.classList.add("invalid");
    upperCase.classList.remove("valid");
  }

  if (/[0-9]/.test(password)) {
    containNumber.classList.add("valid");
    containNumber.classList.remove("invalid");
  } else {
    containNumber.classList.add("invalid");
    containNumber.classList.remove("valid");
  }

  if (/[!@#$%^&*]/.test(password)) {
    specialChar.classList.add("valid");
    specialChar.classList.remove("invalid");
  } else {
    specialChar.classList.add("invalid");
    specialChar.classList.remove("valid");
  }

  const numbers = password.match(/\d/g);
  const sum = numbers
    ? numbers.reduce((acc, num) => acc + parseInt(num), 0)
    : 0;
  if (sum > 25) {
    sumNumbers.classList.add("valid");
    sumNumbers.classList.remove("invalid");
  } else {
    sumNumbers.classList.add("invalid");
    sumNumbers.classList.remove("valid");
  }

  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  const lowerPassword = password.toLowerCase();
  const hasMonth = months.some((month) => lowerPassword.includes(month));
  if (hasMonth) {
    monthName.classList.add("valid");
    monthName.classList.remove("invalid");
  } else {
    monthName.classList.add("invalid");
    monthName.classList.remove("valid");
  }

  if (/[IVXLCDM]/i.test(password)) {
    romanNumeral.classList.add("valid");
    romanNumeral.classList.remove("invalid");
  } else {
    romanNumeral.classList.add("invalid");
    romanNumeral.classList.remove("valid");
  }

  if (/(.)\1{2}/.test(password)) {
    noTriple.classList.add("invalid");
    noTriple.classList.remove("valid");
  } else {
    noTriple.classList.add("valid");
    noTriple.classList.remove("invalid");
  }
});
