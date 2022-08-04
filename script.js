// Global object for password
var PASSWORD = {
  minLen: 8,
  maxLen: 128,
  requiresLowercase: true,
  requiresUppercase: true,
  requiresNumerical: true,
  requiresSpecial: true
}; 
// Global object for ranges in Unicode dec system
var dictUnicodeDec = {
  lowercaseStart: 97,
  lowercaseEnd: 122,
  uppercaseStart: 65,
  uppercaseEnd: 90,
  numericalStart: 48,
  numericalEnd: 57,
  specialStart: 33,
  specialEnd: 42
}

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
  // Confirm boolean requirement for lowercase character(s)
  var confirmLowercase = confirm("Is it okay to include lowercase characters? (a, b, c, etc.) If not, press Cancel.");
  if (confirmLowercase) {
    PASSWORD.requiresLowercase = true;
  } else {
    PASSWORD.requiresLowercase = false;
  }
  // Confirm boolean requirement for uppercase character(s)
  var confirmUppercase = confirm("Is it okay to include uppercase characters? (A, B, C, etc.) If not, press Cancel.");
  if (confirmUppercase) {
    PASSWORD.requiresUppercase = true;
  } else {
    PASSWORD.requiresUppercase = false;
  }
  // Confirm boolean requirement for numerical character(s)
  var confirmNumerical = confirm("Is it okay to include numerical characters? (1, 2, 3, etc.) If not, press Cancel.");
  if (confirmNumerical) {
    PASSWORD.requiresNumerical = true;
  } else {
    PASSWORD.requiresNumerical = false;
  }
  // Confirm boolean requirement for special character(s)
  var confirmSpecial = confirm("Is it okay to include special characters? (?, $, #, etc.) If not, press Cancel.");
  if (confirmSpecial) {
    PASSWORD.requiresSpecial = true;
  } else {
    PASSWORD.requiresSpecial = false;
  }
  // Prompt for desired password length until the length is an acceptable input value
  do {
    var desiredPassLen = prompt("How long will your password be? (min " + PASSWORD.minLen + ", max " + PASSWORD.maxLen + ")");
  }
  while (!isAcceptableLength(desiredPassLen));
  // Construct a password of length desiredPassLen while satisfying character type requirements
  var constructedPassword = "";
  for (i = 0; i < desiredPassLen; i++) {
    
    // Determine the character type and 

    // startUniRange & endUniRange must be changed to a variable value determined by character type
    // Get the random character and store in local variable newChar
    var startUniRange = 97;
    var endUniRange = 122;
    var randInt = getRandInteger(startUniRange, endUniRange);
    var newChar = String.fromCharCode(randInt);
    
    constructedPassword += newChar;
  }

  // Return the password as a string
  return constructedPassword;
}

// Return a boolean indicating whether the parameter (number) is acceptable
function isAcceptableLength(num) {
  if ((num >= PASSWORD.minLen) && (num <= PASSWORD.maxLen)) {
    return true;
  } else {
    return false;
  }
}

// Return a random integer between the min and max parameters
function getRandInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}