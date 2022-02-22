var haveAnAccountBtn = document.querySelector(".form-input-label.have-acc");
var createAnAccountBtn = document.querySelector(".form-input-label.create-acc");
var loginBox = document.querySelector(".auth-box-login");
var signUpBox = document.querySelector(".auth-box-signup");
var hideLoginBtn = document.querySelector(".hide-login");

signUpBox.style.display = "none";

haveAnAccountBtn.addEventListener("click", () => {
    signUpBox.style.display = "none";
    loginBox.style.display = "block";
    hideLoginBtn.style.display = "block";
});

createAnAccountBtn.addEventListener("click", () => {
    signUpBox.style.display = "block";
    loginBox.style.display = "none";
    hideLoginBtn.style.display = "none";
});

hideLoginBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});