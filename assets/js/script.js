// #prompt user for citeria
//  -upper
//  -lower
//  -number
//  -special
//  -length
//  #take user criteria and generate a password from that
//  -from settings() create a function to add the options to the char string
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
  pLength = parseInt(prompt("How long would you like your password to be? (Please choose a number between 8 and 128)"))
  
  //is it a number?

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

//adds choosen character options to string used for generation

function pConditions() {

  pChar = "";

  if (pUpper) {
    pChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };

  if (pLower) {
    pChar += "abcdefghijklmnopqrstuvwxyz"
  };

  if (pNumbers) {
    pChar += "1234567890"
  };

  if (pSpecial) {
    pChar += "!@#$%^&*()_+-=,./<>?;':[]{}|"
  };

  return pChar;
}

//actually generates the password
function pGen() {

  pResult = "";

  for(i = 0; i < pLength; i++) {
    //password input
    var pIn = Math.floor(Math.random() * pChar.length);

    pResult += pChar[pIn];
    
  }

  return pResult;

}

//runs password creating functions and then return result allo
function pCreate() {
  settings();
  pConditions();
  pGen();
  return pResult;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = pCreate();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
