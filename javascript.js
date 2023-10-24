'use strict'

function getComputerChoice() {
    let randomChoice = (arr[Math.floor(Math.random() * arr.length)])
    return randomChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!'
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return 'You Lose! Scissors beats Paper'
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'You Lose! Paper beats Rock'
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        return 'You Lose! Rock beats Scissors'
    } else if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        return 'Error: Please enter either "rock", "paper", or "scissors"'
    } else {
        return 'YOU WIN!!!'
    }
}

const arr = ['rock', 'paper', 'scissors']
const playerSelection = 'papeR'
const computerSelection = getComputerChoice()

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
