// 1. Copy the code below into the JavaScript file. (Completed)
// 3. The text input should only accept letters. No numbers. (set input type as "text")
var testString = "";

function myUserInput() {
	testString = document.getElementById("userInput").value;
}


// 4. Implement the logic in the reversal function that reverses the order of the characters in the 
// string, and outputs the result in the DOM, below the text input.
function reversal() {
	document.getElementById("results").innerHTML = "<h1>" + convertedTemp + "</h1>";

}

// 5. Implement the logic in the alphabits function that return the characters in alphabetical order, 
// and outputs the result in the DOM, below the text input.
function alphabits() {

}

// 6. Implement the logic in the palindrome function that determine whether the string is a palindrome. 
// If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
function palindrome() {

}


// 7. When the user presses the enter key in the text input, or clicks the button, set the value of the 
// testString variable (see above) to the value of the input.

var buttonActionElement = document.getElementById("buttonAction");
buttonActionElement.addEventListener("click", stringItUp);

function stringItUp(){
	myUserInput();
	reversal(testString);
	alphabits(testString);
	palindrome(testString);
}