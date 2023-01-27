//user clicks a button
  //event listener, calling a function to write password
  //inside our function we prompt for password length
    //var passwordLength = prompt("How many characters would you like your password to contain?"); //what does prompt return??
      //we need to validate the prompt so that it meets criteria, must be a number, gt 8 lt 129
    //then user is prompted password length 

    //if(passwordLength < 8){
      //alert('Password length must be at least 8 characters');
    //}
    
//then user confirms for password criteria
  //var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  //var hasLower = confirm("Click OK to confirm including Lower characters.");
  //var hasUpper = confirm("Click OK to confirm including Upper characters.");
  //var hasSpecial = confirm("Click OK to confirm including Special characters.");

  //if(hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false){
      //alert('Must select at least one character type');
  //}

  //object to store user input
  //var userPassword = {
      //length: passwordLength,
      //hasNumeric: hasNumeric,
      //hasLower: hasLower,
      //hasUpper: hasUpper,
      //hasSpecial: hasSpecial,
  //}
  // return userPassword;

  //create another function to generate the password
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}
  
//the password is displayed to the screen



// // Assignment Code
var generateBtn = document.querySelector("#generate"); //starter code

// // Write password to the #password input
function writePassword() { //starter code
  var password = generatePassword(); //starter code
  var passwordText = document.querySelector("#password"); //starter code
  var passwordLength = prompt("How many characters would you like your password to contain?");
  passwordText.value = password; //starter code

  if (passwordLength < 8 || passwordLength > 128) { //Making sure password length meets critera in instructions provided by challenge readme file: "at least 8 characters and no more than 128 characters"
    alert('Password length must be at least 8 characters');
  }

  var hasNumeric = confirm("Click OK to confirm including numeric characters.");
  var hasLower = confirm("Click OK to confirm including Lower characters.");
  var hasUpper = confirm("Click OK to confirm including Upper characters.");
  var hasSpecial = confirm("Click OK to confirm including Special characters.");

  if (hasNumeric === false && hasLower === false && hasUpper === false && hasSpecial === false) {
    alert('Must select at least one character type');
  }

   var userPassword = {
      length: passwordLength,
      hasNumeric: hasNumeric,
      hasLower: hasLower,
      hasUpper: hasUpper,
      hasSpecial: hasSpecial,
  }
  return userPassword;

   //create another function to generate the password
   function generatePassword() {
  }
  //var userOptions = getOptions();
  //we have an array to store each criteria
  //var possibleChars = [];
  //var result = [];
  //var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  //if(userOptions.hasNumeric === true){
    //possibleChars = possibleChars.concat(numericCharacters);
  //}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //starter code