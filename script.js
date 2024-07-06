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