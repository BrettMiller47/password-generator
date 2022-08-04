// Global Object
var password = {
  minLen: 8,
  maxLen: 128,
  requiresLowercase: true,
  requiresUppercase: true,
  requiresNumerical: true,
  requiresSpecial: true,
};
  
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate and return a password string according to global requirements
function generatePassword() {
  // Prompt for desired password length until the length is an acceptable input value
  do {
    var desiredPassLen = prompt("How long will your password be? (min " + password.minLen + ", max " + password.maxLen + ")");
  }
  while (!isAcceptableLength(desiredPassLen));

  // Confirm boolean requirement for lowercase character(s)
  var confirmLowercase = confirm("Is it okay to include lowercase characters? (a, b, c, etc.) If not, press Cancel.");
  if (confirmLowercase) {
    password.requiresLowercase = true;
  } else {
    password.requiresLowercase = false;
  }

  // Confirm boolean requirement for uppercase character(s)
  var confirmUppercase = confirm("Is it okay to include uppercase characters? (A, B, C, etc.) If not, press Cancel.");
  if (confirmUppercase) {
    password.requiresUppercase = true;
  } else {
    password.requiresUppercase = false;
  }

  // Confirm boolean requirement for numerical character(s)
  var confirmNumerical = confirm("Is it okay to include numerical characters? (1, 2, 3, etc.) If not, press Cancel.");
  if (confirmNumerical) {
    password.requiresNumerical = true;
  } else {
    password.requiresNumerical = false;
  }
  console.log(password.requiresNumerical);

  // Confirm boolean requirement for special character(s)
  var confirmSpecial = confirm("Is it okay to include special characters? (?, $, #, etc.) If not, press Cancel.");
  if (confirmSpecial) {
    password.requiresSpecial = true;
  } else {
    password.requiresSpecial = false;
  }
  console.log(password.requiresSpecial);
  
  // Use a for loop to construct a password of length desiredPassLen while satisfying character type requirements

  // Return the password as a string
}

// Return a boolean indicating whether the parameter (number) is acceptable
function isAcceptableLength(num) {
  if ((num >= password.minLen) && (num <= password.maxLen)) {
    return true;
  } else {
    return false;
  }
}