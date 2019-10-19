// TODO: Get password button to create prompt <Check!>
// Get prompt that asks for (as well as validates): length of password, Confirm use of special characters, numbers, upper, lowercase <Check!>
// Create function that generates password according to specifications...
// Have the generated password replace the p tag in the center of the box
// Get Copy to Clipboard button working

var userInput

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
    var isUpper = confirm("Do you want your password to have uppercase letters?")
    var isLower = confirm("Do you want your password to have lowercase letters?")
    var isNumber = confirm("Do you want your password to have numeric characters?")
    var isSpecial = confirm("Do you want your password to have special characters?")

    if (isUpper || isLower || isNumber || isSpecial) {
        console.log("Function will run Here!")

    }
    else {
        alert("Error: You need to accept at least one specification!")
        return;

    }
}