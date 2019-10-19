var userInput

var isUpper
var isLower
var isNumber
var isSpecial

var arrayUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrayLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arraySpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var userPass = []

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
        alert("We will generate your pass in a second")
        genPass();

    }
    else {
        alert("Error: You need to accept at least one specification!")
        return;

    }
}

function genPass() {
    while (userPass.length < userInput) {
        if (isUpper) {
            userPass.push(arrayUpper[Math.floor(Math.random()*26)]);
        }
        if (userPass.length === userInput) {
            showPass();
            return;
        }
        if (isLower) {
            userPass.push(arrayLower[Math.floor(Math.random()*26)]);
        }
        if (userPass.length === userInput) {
            showPass();
            return;
        }
        if (isNumber) {
            userPass.push(arrayNumber[Math.floor(Math.random()*10)]);
        }
        if (userPass.length === userInput) {
            showPass();
            return;
        }
        if (isSpecial) {
            userPass.push(arraySpecial[Math.floor(Math.random()*10)]);
        }
    }
    showPass()
}

function showPass() {
    var userPass2 = userPass.join("")
    document.getElementById("passArea").textContent= userPass2
    userPass.length = 0
    userPass2.length = 0
}