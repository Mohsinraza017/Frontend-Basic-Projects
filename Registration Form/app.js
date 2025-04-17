let signUpBtn = document.querySelector(".signUpBtn");
let signInBtn = document.querySelector(".signInBtn");
let nameField = document.querySelector(".nameField");
let title = document.querySelector(".title");
let underline = document.querySelector(".underline");
let text = document.querySelector(".text");


signInBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0";
    title.innerText = "Sign In";
    text.innerText = "Lost Password"
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
    underline.style.transform = "translateX(35px)";
});




signUpBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "60px";
    title.innerText = "Sign Up";
    text.innerText = "Password Suggestions";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
    underline.style.transform = "translateX(0)";
});