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

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var specialCharacters = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '>', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~']; //characters are taken from OWASP link in instructions.
// Added backslash to ' and \ characters to disable them from functioning as part of the code
var result = [];  

// // Assignment Code
var generateBtn = document.querySelector("#generate"); //starter code

function getOptions() {

var passwordLength = prompt("How many characters would you like your password to contain?");

if (passwordLength < 8 || passwordLength > 128) { //Making sure password length meets critera in instructions provided by challenge readme file: "at least 8 characters and no more than 128 characters"
  alert('Password length must be at least 8 characters and no more than 128 characters');
  return {
    error: true,
    message:"Password length must be at least 8 characters and no more than 128 characters"
  };
}

var hasNumeric = confirm("Click OK to confirm including numeric characters.");
var hasLower = confirm("Click OK to confirm including Lower characters.");
var hasUpper = confirm("Click OK to confirm including Upper characters.");
var hasSpecial = confirm("Click OK to confirm including Special characters.");
// var possibleChars = [];
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
}

function generatePassword(){
var options = getOptions();
if(options.error) {
  return options.message;
}
var possibleChars = [];
var guaranteedChars = [];
var finalPass = [];
if (options.hasNumeric === true) {
  possibleChars = possibleChars.concat(numericCharacters);
  guaranteedChars.push(getRandomEl(numericCharacters));
}
if (options.hasUpper === true) {
  possibleChars = possibleChars.concat(upperCharacters);
  guaranteedChars.push(getRandomEl(upperCharacters));
}
if (options.hasLower === true) {
  possibleChars = possibleChars.concat(lowerCharacters);
  guaranteedChars.push(getRandomEl(lowerCharacters));
}
if (options.hasSpecial === true) {
  possibleChars = possibleChars.concat(specialCharacters);
  guaranteedChars.push(getRandomEl(specialCharacters));
}

//loop over password length from options, select random elements to add 
for(var i = 0; i < options.length-guaranteedChars.length; i++) {

  //grab random element out of possibleChars
  //push random element into final pass
  var possible = getRandomEl(possibleChars);
  finalPass.push(possible);
}

finalPass = finalPass.concat(guaranteedChars);

return finalPass.join("");
}

// // Write password to the #password input
function writePassword() { //starter code
var password = generatePassword(); //starter code
var passwordText = document.querySelector("#password"); //starter code
passwordText.value = password; //starter code

}         

function getRandomEl(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomEl = array[randomIndex];
  return randomEl;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //starter code