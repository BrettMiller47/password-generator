// Global object for password
var PASSWORD = {
  minLen: 8,
  maxLen: 128,
  requiresLowercase: true,
  requiresUppercase: true,
  requiresNumerical: true,
  requiresSpecial: true
}; 

// Global objects for character types
var ALL_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
var ALL_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var ALL_NUMERICAL = "0123456789";
var ALL_SPECIAL = "~:+[@^{%(-}._=]!";

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
  var confirmLowercase = confirm("Allow lowercase characters? (a, b, c, etc.) If not, press Cancel.");
  if (confirmLowercase) {
    PASSWORD.requiresLowercase = true;
  } else {
    PASSWORD.requiresLowercase = false;
  }
  // Confirm boolean requirement for uppercase character(s)
  var confirmUppercase = confirm("Allow uppercase characters? (A, B, C, etc.) If not, press Cancel.");
  if (confirmUppercase) {
    PASSWORD.requiresUppercase = true;
  } else {
    PASSWORD.requiresUppercase = false;
  }
  // Confirm boolean requirement for numerical character(s)
  var confirmNumerical = confirm("Allow numerical characters? (1, 2, 3, etc.) If not, press Cancel.");
  if (confirmNumerical) {
    PASSWORD.requiresNumerical = true;
  } else {
    PASSWORD.requiresNumerical = false;
  }
  // Confirm boolean requirement for special character(s)
  var confirmSpecial = confirm("Allow special characters? (?, $, #, etc.) If not, press Cancel.");
  if (confirmSpecial) {
    PASSWORD.requiresSpecial = true;
  } else {
    PASSWORD.requiresSpecial = false;
  }
  // If the user declined all character types...
  if ((confirmLowercase + confirmUppercase + confirmNumerical + confirmSpecial) == 0) {
    return alert("Unable to generate password.  You must allow at least 1 character type.");
  }

  // Prompt for desired password length until the length is an acceptable input value
  var desiredPassLen = prompt("How long will your password be? (min " + PASSWORD.minLen + ", max " + PASSWORD.maxLen + ")");
  if (!isAcceptableLength(desiredPassLen)) {
    return alert("Password length must be between " + PASSWORD.minLen + " - " + PASSWORD.maxLen + " characters");
  }

  // Construct a password of length desiredPassLen while satisfying character type requirements
  var allAcceptChar = "";
  var constructedPassword = "";
  for (i = 0; i < desiredPassLen; i++) {  
    // If there is a _charType_ required but not in the constructedPassword...
    if (confirmLowercase && PASSWORD.requiresLowercase) {
      // Get a new character of this type
      var randInt = getRandInteger(0, ALL_LOWERCASE.length - 1);
      var newChar = ALL_LOWERCASE.charAt(randInt);
      // Add the character type's entire list to a combined list with other acceptable characters of different type
      console.log(allAcceptChar.length);
      allAcceptChar.concat(ALL_LOWERCASE);
      console.log(allAcceptChar.length);
      // Indicate that it is no longer required
      PASSWORD.requiresLowercase = false;
    } else if (confirmUppercase && PASSWORD.requiresUppercase) {
      // Get a new character of this type
      var randInt = getRandInteger(0, ALL_UPPERCASE - 1);
      var newChar = ALL_UPPERCASE.charAt(randInt);
      // Add the character type's entire list to a combined list with other acceptable characters of different type
      allAcceptChar.concat(ALL_UPPERCASE);
      // Indicate that it is no longer required
      PASSWORD.requiresUppercase = false;
    } else if (confirmNumerical && PASSWORD.requiresNumerical) {
      // Get a new character of this type
      var randInt = getRandInteger(0, ALL_NUMERICAL.length - 1);
      var newChar = ALL_NUMERICAL.charAt(randInt);
      // Add the character type's entire list to a combined list with other acceptable characters of different type
      allAcceptChar.concat(ALL_NUMERICAL);
      // Indicate that it is no longer required
      PASSWORD.requiresNumerical = false;
    } else if (confirmSpecial && PASSWORD.requiresSpecial) {
      // Get a new character of this type
      var randInt = getRandInteger(0, ALL_SPECIAL.length - 1);
      var newChar = ALL_SPECIAL.charAt(randInt);
      // Add the character type's entire list to a combined list with other acceptable characters of different type
      allAcceptChar.concat(ALL_SPECIAL);
      // Indicate that it is no longer required
      PASSWORD.requiresSpecial = false; 
    } else {
      // No unnaddressed type requirement, so any acceptable character is chosen as newChar
      var randInt = getRandInteger(0, allAcceptChar.length - 1);
      var newChar = allAcceptChar.charAt(randInt);
    }
    // Add the randomly selected character (of specified character type) to the constructedPassword
    constructedPassword += newChar;
  }
  // Return the randomly constructed password as a string
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
