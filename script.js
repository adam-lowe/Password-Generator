// TODO: Get password button to create prompt <Check!>
// Get prompt that asks for (as well as validates): length of password, Confirm use of special characters, numbers, upper, lowercase <Check!>
// Create function that generates password according to specifications...
// Have the generated password replace the p tag in the center of the box
// Get Copy to Clipboard button working

var userInput

var isUpper
var isLower
var isNumber
var isSpecial

var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arraySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function initParams() {
    userInput = parseInt(prompt("Enter desired password length (it must be 8-128 characters)"))

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

function firmParams() {
    isUpper = confirm("Do you want your password to have uppercase letters?")
    isLower = confirm("Do you want your password to have lowercase letters?")
    isNumber = confirm("Do you want your password to have numeric characters?")
    isSpecial = confirm("Do you want your password to have special characters?")

    if (isUpper || isLower || isNumber || isSpecial) {
        genPass();

    }
    else {
        alert("Error: You need to accept at least one specification!")
        return;

    }
}

function genPass() {
    
}