// TODO: Get password button to create prompt <Check!>
// Get prompt that asks for (as well as validates): length of password, Confirm use of special characters, numbers
// Create function that generates password according to specifications...
// Have the generated password replace the p tag in the center of the box
// Get Copy to Clipboard button working

function initParams() {
 var userInput = parseInt(prompt("Enter desired password length (it must be 8-128 characters)"))

if (isNaN(userInput)) {
    alert("Error: Not a Number!")
    return;
 }
else if (userInput > 128 || userInput < 8) {
     alert("Error: Invalid Number of Characters!")
     return;
 }
else {
    firmParams();
 }  
}