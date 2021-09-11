// #prompt user for citeria
//  -upper
//  -lower
//  -number
//  -special
//  -length
//  #take user criteria and generate a password from that
// #display the password to the user


// Assignment code here

//Blank conditions for password.
var pLength;
var pLower;
var pUpper;
var pNumbers;
var pSpecial;

//take user conditions for password.

function settings() {

  //pass length
  var pLength = parseInt(prompt("How long would you like your password to be? (Please choose a number between 8 and 128)"))
  
  if (isNaN(pLength) === true || pLength < 8 || pLength > 128) {
    alert("You have entered an ivalid input. Please choose a number betwee 8 and 128.");
    return;
  }


  pNumbers = confirm("Do you want to use numbers?");
  pUpper = confirm("Do you want to use upper case letters?");
  pLower = confirm("Do you want to use lower case letters?");
  pSpecial = confirm("Do you want to use special characters?");

  if (!pNumbers && !pUpper && !pLower && !pSpecial) {
    alert("You must choose at least one option for password characters.");
    return;
  }

  var userChoices = {

    pLength:pLength, pUpper:pUpper, pLower:pLower, pNumbers:pNumbers, pSpecial:pSpecial,

  }
  return userChoices;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  settings();
  passwordText.value = password;
  console.log(pLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
