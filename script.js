let emailValid = false;
let passwordValid = false;

function validateEmail() {
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  if (email.length > 3 && email.includes('@') && email.includes('.')) {
    emailError.textContent = '';
    emailValid = true;
  } else {
    emailError.textContent = 'Make sure email is more than 3 characters and has @ and .';
    emailValid = false;
  }
  checkValidationStatus();
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');
  if (password.length > 8) {
    passwordError.textContent = '';
    passwordValid = true;
  } else {
    passwordError.textContent = 'Make sure password is more than 8 characters.';
    passwordValid = false;
  }
  checkValidationStatus();
}

function checkValidationStatus() {
  const validationMessage = document.getElementById('validationMessage');
  if (emailValid && passwordValid) {
    validationMessage.style.display = 'block';
  } else {
    validationMessage.style.display = 'none';
  }
}

function submitForm() {
  if (emailValid && passwordValid) {
    const confirmation = confirm("Are you sure you want to submit?");
    if (confirmation) {
      alert("Successful signup!");
    } else {
      // Clear inputs if user cancels
      document.getElementById('email').value = '';
      document.getElementById('password').value = '';
      document.getElementById('validationMessage').style.display = 'none';
      document.getElementById('emailError').textContent = '';
      document.getElementById('passwordError').textContent = '';
      emailValid = false;
      passwordValid = false;
    }
  }
}
