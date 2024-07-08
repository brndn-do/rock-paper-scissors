"use strict";

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    let choice = ""

    if (rand === 0) {
        choice = "rock";
    }
    else if (rand === 1) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }

    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", event => {
            playRound(event.target.id, getComputerChoice());
        });
    });

    function playRound(humanChoice, computerChoice) {
        let message = document.querySelector("#message");
        let result = document.createElement("div");
        let score = document.createElement("div");
        let winner = document.createElement("div");

        if (humanChoice === computerChoice) {
            result.textContent = "Tie!";
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
            result.textContent = `You Lose! ${computerChoice} beats ${humanChoice}.`;
            computerScore++;
        }
        else {
            result.textContent = `You Win! ${humanChoice} beats ${computerChoice}.`;
            humanScore++;
        }

        score.textContent = `Player: ${humanScore} Computer: ${computerScore}`;

        if (humanScore == 5) {
            winner.textContent = "Player wins!";
        }
        if (computerScore == 5) {
            winner.textContent = "Computer wins!"
        }

        message.replaceChildren();
        message.appendChild(result);
        message.appendChild(score);
        message.appendChild(winner);
    }
}

playGame();