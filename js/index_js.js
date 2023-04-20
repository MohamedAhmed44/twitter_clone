// DOM Elements
const btnTop = document.querySelector(".btn-top");
const sign_up = document.querySelector(".sign-up");
const log_in = document.querySelector(".log-in");
const forgot_btn = document.querySelector(".label-forget");

//**************************************
const inputUserInfo = document.querySelector(".user-info");
const inputPassword = document.querySelector(".password");
//*******************Check Email and Passowrd*******************
const emailInput = document.querySelector(".user-info");
const passwordInput = document.querySelector(".password");
const emailError = document.querySelector("#email-error");
const passwordError = document.querySelector("#password-error");

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  // على حرف كبير وحرف صغير ورقم وحرف خاص، بطول 8 أحرف على الأقل
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return regex.test(password);
}

function showErrorMessage(input, errorLabel, errorMessage) {
  input.classList.add("error");
  errorLabel.innerHTML = errorMessage;
  errorLabel.style.display = "block";
}

function hideErrorMessage(input, errorLabel) {
  input.classList.remove("error");
  errorLabel.style.display = "none";
}

document.querySelector(".btn-top").addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!validateEmail(email)) {
    showErrorMessage(emailInput, emailError, "Invalid email address");
  } else {
    hideErrorMessage(emailInput, emailError);
  }

  if (!validatePassword(password)) {
    showErrorMessage(passwordInput, passwordError, "Invalid password");
  } else {
    hideErrorMessage(passwordInput, passwordError);
  }

  // If all inputs are valid, perform login action
  if (validateEmail(email) && validatePassword(password)) {
    // Perform login action
    // console.log("Logged in successfully");
    window.location.href = "../newsPage.html";
  }
});

// ***********************Login********************************
function login() {
  // هنا نقدر نحط اكتر من مستخدم هما فقط اللي يدخلو
  // if (
  //   (inputUserInfo.value == "Keroles@gmail.com" &&
  //     inputPassword.value == "Keroles12345") ||
  //   (inputUserInfo.value == "Mohamed@gmail.com" &&
  //     inputPassword.value == "Mohamed12345") ||
  //   (inputUserInfo.value == "Asmaa@gmail.com" &&
  //     inputPassword.value == "Asmaa12345")
  // ) {
  //   window.location.href = "newsPage.html";
  // }
  // window.location.href = "newsPage.html";
}

btnTop.addEventListener("click", login);

// ------------------------------------
sign_up.addEventListener("click", () => {
  window.location.href = "../sign_up.html";
});

log_in.addEventListener("click", () => {
  window.location.href = "/loginpage.html";
});

//forgot button
forgot_btn.addEventListener("click", () => {
  window.location.href = "../Forgot_Password.html";
});

// ***************************************************************8
