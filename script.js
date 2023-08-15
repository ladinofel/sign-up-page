const form = document.getElementById("myForm");
const password = form.user_password;
const confirmPassword = form.user_password_confirmation;
const feedback = document.getElementById("confirmPassword-feedback");
let isPasswordMatch = false;

confirmPassword.addEventListener("input", () => {
    if(password.value != confirmPassword.value) {
      feedback.textContent = "Passwords do not match";
      isPasswordMatch = false;  
    } else {
      feedback.textContent = "";
      isPasswordMatch = true;
    }
});

form.onsubmit = function () {
    if (isPasswordMatch) {
        alert("Your information has been submitted. We will be contacting you soon.");
        return true;
    } 
    alert("Passwords do not match.");
    return false;
}

//Remember to modify DOM to change confirm password css.