var haveAnAccountBtn = document.querySelector(".form-input-label.have-acc");
var createAnAccountBtn = document.querySelector(".form-input-label.create-acc");
var loginBox = document.querySelector(".auth-box-login");
var signUpBox = document.querySelector(".auth-box-signup");

signUpBox.style.display = "none";

haveAnAccountBtn.addEventListener("click", () => {
    signUpBox.style.display = "none";
    loginBox.style.display = "block";
});

createAnAccountBtn.addEventListener("click", () => {
    signUpBox.style.display = "block";
    loginBox.style.display = "none";
});