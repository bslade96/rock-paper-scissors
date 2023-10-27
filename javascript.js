//computer choice 
function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors']
    let randomValue = choices[Math.floor(Math.random() * choices.length)].toString()
    return randomValue
}

//player choice
function getPlayerChoice () {
    let inputValue = prompt('Rock, Paper, Scissors, SHOOT!:')
    inputValue = inputValue.toLowerCase()
    if (!((inputValue === 'rock') || (inputValue === 'paper') || (inputValue === 'scissors'))) {
        alert('Invalid input. Please try again.')
        return getPlayerChoice()
    } else {
        return inputValue
    }
}
let playerScore = 0
let computerScore = 0
//Round
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return 'It\'s a tie. Play the next round.'
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        computerScore++
        return 'You lose this round. Paper beats rock.'
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        computerScore++
        return 'You lose this round. Scissors beats paper.'
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        computerScore++
        return 'You lose this round. Rock beats scissors.'
    } else {
        playerScore++
        return ('You win this round!')
    }
} 

function game() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
    console.log(playRound(getPlayerChoice(), getComputerChoice()))
}

computerSelection = getComputerChoice()
playerSelection = getPlayerChoice()
console.log(game())
//game of 5 rounds that 
//DONE: keeps score and 
//DONE: reports a winner or loser at the end

//if (playerScore === computerScore) {
    //return 'It\'s a draw. No one wins the game.'
//} else if (playerScore > computerScore) {
    //return 'YOU WIN THE GAME!'
//} else {
    //return 'You lost the game.'
//}

