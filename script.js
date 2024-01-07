// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  let passwordLength = parseInt(prompt("How many charaters do you want? 8 - 124")) || 0;
  if (passwordLength == 0) {
    alert("Password length can not be left empty, please select a value");
    return
  }
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry Password must be greater than 8 and less than 128 charaters.");
    return
  }
  

  let passwordUpper = confirm("Would you like uppercase? - (Okay = Yes, Cancel = No)");
  let passwordLower = confirm("Would you like lowercase? - (Okay = Yes, Cancel = No)");
  let passwordNum = confirm("Would you like numbers? - (Okay = Yes, Cancel = No)");
  let passwordSpec = confirm("Would you like special characters? - (Okay = Yes, Cancel = No)");
  return {
    Length: passwordLength,
    Upper: passwordUpper,
    Lower: passwordLower,
    Num: passwordNum,
    Spec: passwordSpec,
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions ();
  var charactersPoss = [];

  if (options.Upper) {
    charactersPoss = charactersPoss.concat(upperCasedCharacters);
  }

  if (options.Lower) {
    charactersPoss = charactersPoss.concat(lowerCasedCharacters);
  }

  if (options.Num) {
    charactersPoss = charactersPoss.concat(numericCharacters);
  }

  if (options.Spec) {
    charactersPoss = charactersPoss.concat(specialCharacters);
  }

  if (charactersPoss.length === 0) {
    alert("Please select at least one character type");
    return "";
  }

  var generatePassword = "";
  for (var i = 0; i < options.Length; i++) {
    generatePassword += getRandom(charactersPoss);
  }

  return generatePassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);