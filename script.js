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

function getHumanChoice() {
    let input = prompt("Enter rock, paper, or scissors");
    return input.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        }
        else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        else {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } 
    }

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();