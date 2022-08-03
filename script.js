// Global Variables
  const minLen = 8;
  const maxLen = 128;

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
  // Prompt for desired password length
  do {
    var desiredPassLen = prompt("How long will your password be? (min " + minLen + ", max " + maxLen + ")");
  }
  while (!isAcceptableLength(desiredPassLen));
}

// Return a boolean indicating whether the parameter (number) is acceptable
function isAcceptableLength(num) {
  if ((num >= minLen) && (num <= maxLen)) {
    return true;
  } else {
    console.log("false");
    return false;
  }
}