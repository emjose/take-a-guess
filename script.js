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

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/sw.js")
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3q1QiQf", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
