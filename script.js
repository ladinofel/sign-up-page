const form = document.getElementById("myForm");
const password = form.user_password;
const confirmPassword = form.user_password_confirmation;
const feedback = document.getElementById("confirmPassword-feedback");
const ageFeedback = document.getElementById("confirm-age-feedback");
let isPasswordMatch = false;
let isAdult = false;

confirmPassword.addEventListener("onchange", () => {
    if(password.value != confirmPassword.value) {
      feedback.textContent = "Passwords do not match";
      isPasswordMatch = false;  
    } else {
      feedback.textContent = "";
      isPasswordMatch = true;
    }
});

function validateAge() {
  let currentDate = new Date();
  let input = document.getElementById("birth_date").value;
  let birthdate = new Date(input);
  let diff = new Date(currentDate - birthdate);
  let age = Math.abs(diff.getUTCFullYear() - 1970);
  if(age < 18){
    ageFeedback.textContent = "You must be over 18 or over to sign up";
    isAdult = false;
  } else {
    ageFeedback.textContent = "";
    isAdult = true;
  }
}

form.onsubmit = function () {
    if (isPasswordMatch == true && isAdult == true) {
        alert("Your information has been submitted. We will be contacting you soon.");
        return true;
    } 
    else if (isPasswordMatch == false && isAdult == false) {
    alert("Passwords do not match and you must be 18 or over to sign up.");
    return false;
    } 
    else if(isPasswordMatch == true && isAdult == false) {
      alert("You must be 18 or over to sign up.");
      return false;
    }
    else {
      alert("Passwords do not match.");
      return false;
    }
}

