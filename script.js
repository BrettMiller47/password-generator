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
  // Prompt for desired password length until the length is an acceptable input value
  do {
    var desiredPassLen = prompt("How long will your password be? (min " + minLen + ", max " + maxLen + ")");
  }
  while (!isAcceptableLength(desiredPassLen));

  // Prompt for boolean requirement for lowercase character(s)
  var requiresLowercaase = confirm("Is it okay to include lowercase characters? (a, b, c, etc.)");
  console.log(requiresLowercaase);
  // Prompt for boolean requirement for Uppercase character(s)
  // Prompt for boolean requirement for Numberical character(s)
  // Prompt for boolean requirement for Special character(s)
  
  // Use a for loop to construct a password of length desiredPassLen while satisfying character type requirements

  // Return the password as a string
}

// Return a boolean indicating whether the parameter (number) is acceptable
function isAcceptableLength(num) {
  if ((num >= minLen) && (num <= maxLen)) {
    return true;
  } else {
    return false;
  }
}