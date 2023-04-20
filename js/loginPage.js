// DOM Elements
const loginFormBtn = document.querySelector(".login-form-btn");
const rememberMeCheckbox = document.getElementById("remember-me-checkbox");

//*****************Keroles*********************

loginFormBtn.addEventListener("click", () => {
  const inputUserInfo = document.querySelector(".user-info");
  const inputPassword = document.querySelector(".password");

  // هنا نقدر نحط اكتر من مستخدم هما فقط اللي يدخلو
  if (
    (inputUserInfo.value == "keroles@gmail.com" &&
      inputPassword.value == "Keroles12345") ||
    (inputUserInfo.value == "moh93091@gmail.com" &&
      inputPassword.value == "6350461mO") ||
    (inputUserInfo.value == "asmaaali2595@gmail.com" &&
      inputPassword.value == "5Ag12345678")
  ) {
    window.location.href = "../newsPage.html";
  }
});

log_in.addEventListener("click", () => {
  window.location.href = "../loginpage.html";
});

// start Remember me
// تعيين علامة مفتاح وقيمة في Local Storage عندما يتم تحديد زر "تذكرني"
const inputUserInfo = document.querySelector(".user-info");
const inputPassword = document.querySelector(".password");
const rememberMe = document.getElementById("rememberMe");

function checkUserAndPassword() {
  // هنا يتم فحص معلومات تسجيل الدخول كالمعتاد

  // إذا تم اختيار تذكرني، يتم حفظ اسم المستخدم وكلمة المرور في متغيرات تخزين محلي
  if (rememberMe.checked) {
    localStorage.setItem("username", inputUserInfo.value);
    localStorage.setItem("password", inputPassword.value);
  }
}

// عند تحميل الصفحة، يتم تعيين متغيرات تخزين المحلية في حال كان المستخدم قد حفظ بيانات تسجيل الدخول مسبقًا
window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    inputUserInfo.value = savedUsername;
    inputPassword.value = savedPassword;
    rememberMe.checked = true;
  }
});

// End Remember me
