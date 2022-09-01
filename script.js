"use strict";

// Establish secret number, score, and high score.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function for conditional messaging.
const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	// console.log(guess, typeof guess);
	// Storing the player's guess input as a number.
	//
	if (!guess || guess < 0) {
		displayMessage("Invalid!");
		document.querySelector(".message").style.color = "var(--gray)";
		// First Scenario: An invalid answer is entered.
		// Non-numbers, negative numbers, or no answers are invalid.
		//
	} else if (guess === secretNumber) {
		displayMessage("Congratulations!");
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector(".message").style.color = "var(--white)";
		document.querySelector(".score").textContent = score;
		document.querySelector("body").style.backgroundColor = "var(--purple)";
		document.querySelector(".number").style.color = "var(--purple)";
		document.querySelector("#reset").style.color = "var(--purple)";
		document.querySelector("#check").style.color = "var(--purple)";
		document.querySelector("h1").textContent = "You Guessed It!";
		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}
		// Second Scenario: The Player WINS - the guess matches the secret number.
		// Color scheme updated for winning state. High Score is set.
		// Refactor needed: Look into why querySelectorAll() was not working.
		//
	} else if (guess !== secretNumber) {
		// Third Scenario: Wrong guess (too high or too low). Decrease score by 1.
		// If score is 0, player loses game and will have to try again.
		if (score > 0) {
			// Conditional operator for display message.
			displayMessage(guess > secretNumber ? "Too High!" : "Too Low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("Please Try Again!");
			score;
		}
	}
});

// "Again!" Button - Resetting the app state.
document.querySelector(".again").addEventListener("click", function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	displayMessage("Guess between 1 and 20.");
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	document.querySelector("h1").textContent = "Take A Guess!";
	document.querySelector("body").style.backgroundColor = "var(--blue)";
	document.querySelector(".number").style.color = "var(--blue)";
	document.querySelector("#reset").style.color = "var(--blue)";
	document.querySelector("#check").style.color = "var(--blue)";
	// Refactor needed: Look into why querySelectorAll() was not working.
});
