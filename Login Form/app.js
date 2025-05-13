// let signupBtn = document.getElementById("signupBtn");
// let signinBtn = document.getElementById("signinBtn");
// let nameField = document.getElementById("nameField");
// let title = document.getElementById("title");

// signinBtn.addEventListener("click", () => {
//     nameField.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable");
//     signinBtn.classList.remove("disable");
// });

// signupBtn.addEventListener("click", () => {
//     nameField.style.maxHeight = "65px";
//     title.innerHTML = "Sign Up"
//     signinBtn.classList.add("disable");
//     signupBtn.classList.remove("disable");
// });




let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");


signinBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
});

signupBtn.addEventListener("click", () => {
    nameField.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");
})