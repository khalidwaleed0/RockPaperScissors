const actions = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices img");
buttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		game(btn.getAttribute("alt").toLowerCase());
		checkWinningState();
	});
});
let playerWins = (computerWins = 0);

function checkWinningState() {
	let commentary = "";
	if (playerWins === 5) {
		commentary = "Game Over. You win!";
		document.querySelector(".commentary").textContent = commentary;
	} else if (computerWins === 5) {
		commentary = "Game Over. You lose!";
		document.querySelector(".commentary").textContent = commentary;
	}
}

function game(playerSelection) {
	if (playerWins !== 5 && computerWins !== 5) {
		let commentary = playRound(playerSelection);
		document.querySelector(".commentary").textContent = commentary;
		document.querySelector(".player-score").textContent = playerWins;
		document.querySelector(".computer-score").textContent = computerWins;
	}
}

function logRound(playerSelection, computerSelection) {
	document.querySelector(".player-log").innerHTML += `<li>${playerSelection}</li>`;
	document.querySelector(".computer-log").innerHTML += `<li>${computerSelection}</li>`;
}

function playRound(playerSelection) {
	let computerSelection = getComputerChoice();
	logRound(playerSelection, computerSelection);
	if (
		(playerSelection === "rock" && computerSelection === "scissors") ||
		(playerSelection === "paper" && computerSelection === "rock") ||
		(playerSelection === "scissors" && computerSelection === "paper")
	) {
		playerWins++;
		return `You Win! ${playerSelection} beats ${computerSelection}`;
	} else if (playerSelection === computerSelection) {
		return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
	} else {
		computerWins++;
		return `You Lose! ${computerSelection} beats ${playerSelection}`;
	}
}

function getComputerChoice() {
	return actions[Math.floor(Math.random() * 3)];
}
