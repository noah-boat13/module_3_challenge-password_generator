// Assignment code here

// function to generate password criteria
function generatePassword() {
    // prompt to determine length of password (Between 8 and 128)
    var passLength = prompt("Enter your preferred password length (Between 8 and 128)");
    // while loop to check for right password length
    while(passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Please enter a valid number (Between 8 and 128)");
      passLength = prompt("Enter your preferred password length (Between 8 and 128)");
    }
  
    // prompt to determine character values (uppercase, lowercase, numeric, special characters)
    var includeUppercase = confirm("Do you want to include uppercase characters? (Ok for Yes, Cancel for No");
    var includeLowercase = confirm("Do you want to include lowercase characters? (Ok for Yes, Cancel for No");
    var includeNumeric = confirm("Do you want to include numeric characters? (Ok for Yes, Cancel for No");
    var includeSpecChar = confirm("Do you want to include special characters? (Ok for Yes, Cancel for No");
  
    // while loop to check at least one character value is selected
    while(!(includeUppercase || includeLowercase || includeNumeric || includeSpecChar)) {
      alert("Please select a at least one character value")
      includeUppercase = confirm("Do you want to include uppercase characters? (Ok for Yes, Cancel for No");
      includeLowercase = confirm("Do you want to include lowercase characters? (Ok for Yes, Cancel for No");
      includeNumeric = confirm("Do you want to include numeric characters? (Ok for Yes, Cancel for No");
      includeSpecChar = confirm("Do you want to include special characters? (Ok for Yes, Cancel for No");
    }
  
    // generate password using criteria
    var password = generatePasswordWithCriteria(passLength, includeUppercase, includeLowercase, includeNumeric, includeSpecChar);
  
    // display generated password to page
    alert("Your randomly generated password is " + password);

    return password;
  
  }
  
  // function to generate password based on criteria (using previous prompts as arguments for function)
  function generatePasswordWithCriteria(passLength, includeUppercase, includeLowercase, includeNumeric, includeSpecChar) {
    var charset = "";
    var uppercaseCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseCharset = "abcdefghijklmnopqrstuvwxyz";
    var numericCharset = "0123456789";
    var specialCharset = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?";
  
    // if statement to build character set based on criteria
    if (includeUppercase) {
      charset += uppercaseCharset;
    } if (includeLowercase) {
      charset += lowercaseCharset;
    } if (includeNumeric) {
      charset += numericCharset;
    } if (includeSpecChar) {
      charset += specialCharset;
    }
  
    // for loop to generate random password using character set created above
    var password = "";
    for (var i =0; i < passLength; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  // call the function to generate password
  // generatePassword();
  
  
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