// Get the password field and copy button elements
let passwordField = document.querySelector("#Password");
let copyButton = document.querySelector(".btn2");
let resetButton = document.querySelector(".btn3");

// Disable the copyand reset button and change its cursor style to a "not allowed" pointer
copyButton.disabled = true;
copyButton.style.cursor = "not-allowed";
resetButton.disabled = true;
resetButton.style.cursor = "not-allowed";

/**
 * Generates a random password of a given length
 * @param {int} passLength - The length of the password to generate
 // This function generates a random password of a given length
// passLength is the length of the password to generate
// Returns the generated password as a string
 */
function passGen() {
  let str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passLength = 10;
  let password = "";
  for (let i = 0; i < passLength; i++) {
    // Get a random number between 0 and the length of the string
    let randNumber = Math.floor(Math.random() * str.length);
    // Add the character at the random index to the password
    password += str.substring(randNumber, randNumber + 1);
  }
  // Set the value of the password field to the generated password
  passwordField.value = password;
  // Enable the copy button and change its cursor style to a pointer
  copyButton.disabled = false;
  copyButton.style.cursor = "pointer";
  resetButton.disabled = false;
  resetButton.style.cursor = "pointer";
}

/**
 * Copies the current password to the clipboard
 */
function copyPass() {
  // Get the password field element
  let copyPassword = document.querySelector("#Password");
  // Select the password field
  copyPassword.select();
  // Copy the selected text to the clipboard
  document.execCommand("copy");
  // Alert the user that the password has been copied
  alert("Password has been copied");
}

function resetPass() {
  passwordField.value = "";
  copyButton.disabled = true;
  copyButton.style.cursor = "not-allowed";
  resetButton.disabled = true;
  resetButton.style.cursor = "not-allowed";
}
