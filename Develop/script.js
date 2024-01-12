// Assignment code here
// function to generate password
function generatePassword() {
  // prompt to determine length of password (Between 8 and 128)
  var length = prompt("Enter your preferred password length (Between 8 and 128)");
  // while loop to check for right password length
  while(length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a valid number (Between 8 and 128)");
    length = prompt("Enter your preferred password length (Between 8 and 128)");
  }
  //prompt to determine character values (uppercase, lowercase, numeric, special characters)
  includeUppercase = confirm("Do you want to include lowercase characters? (Ok for Yes, Cancel for No");
  includeLowercase = confirm("Do you want to include upercase characters? (Ok for Yes, Cancel for No");
  includeNumeric = confirm("Do you want to include numeric characters? (Ok for Yes, Cancel for No");
  includeSpecChar = confirm("Do you want to include special characters? (Ok for Yes, Cancel for No");

  // while loop to check at least one character value is selected
  while(!(includeUppercase || includeLowercase || includeNumeric || includeSpecChar)) {
    alert("Please select a at least one character value")
    includeUppercase = confirm("Do you want to include lowercase characters? (Ok for Yes, Cancel for No");
    includeLowercase = confirm("Do you want to include upercase characters? (Ok for Yes, Cancel for No");
    includeNumeric = confirm("Do you want to include numeric characters? (Ok for Yes, Cancel for No");
    includeSpecChar = confirm("Do you want to include special characters? (Ok for Yes, Cancel for No");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
