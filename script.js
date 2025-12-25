const correctUsername = "username";
const correctPassword = "password";

function goToContactPage() {
  window.location.href = "about.html";
}
function goTosignpage() {
  window.location.href = "signup.html";
}

function handleLogin() {
  const usernameInput = document.getElementById("usernameInput");
  const passwordInput = document.getElementById("passwordInput");
  const usernameError = document.getElementById("usernameError");
  const passwordError = document.getElementById("passwordError");

  usernameError.textContent = "";
  passwordError.textContent = "";
  usernameInput.classList.remove("error");
  passwordInput.classList.remove("error");

  let isValid = true;

  if (usernameInput.value === "") {
    usernameError.textContent = "Please enter username";
    usernameInput.classList.add("error");
    isValid = false;
  } else if (usernameInput.value !== correctUsername) {
    usernameError.textContent = "Incorrect username";
    usernameInput.classList.add("error");
    isValid = false;
  }

  if (passwordInput.value === "") {
    passwordError.textContent = "Please enter password";
    passwordInput.classList.add("error");
    isValid = false;
  } else if (passwordInput.value !== correctPassword) {
    passwordError.textContent = "Incorrect password";
    passwordInput.classList.add("error");
    isValid = false;
  }

  if (isValid) {
    goToContactPage();
  }
}

document
  .getElementById("passwordInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleLogin();
    }
  });
