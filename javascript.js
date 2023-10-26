//computer choice 
function getComputerChoice() {
    let array = ['rock', 'paper', 'scissors']
    return array[Math.floor(Math.random() * array.length)].toString()
}

//Round
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return 'It\'s a tie. Play the next round.'
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return 'You lose this round. Paper beats rock.'
    } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')) {
        return 'You lose this round. Scissors beats paper.'
    } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')) {
        return 'You lose this round. Rock beats scissors.'
        //add a prompt? how do I get it to loop back to if else again?
    } if (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors')) {
        return 'Invalid entry: Please type "rock", "paper", or "scissors"'
    } else {
        return ('You win this round!')
    }
}

//game of 5 rounds that 
//DONE: keeps score and 
//DONE: reports a winner or loser at the end
function game() {
    let computerScore = 0
    let playerScore = 0
    
    let winnerOfRound = playRound(playerSelection, computerSelection) 
    if (winnerOfRound.includes('win')) {
        playerScore++
        return `Your score: ${playerScore}    Computer score: ${computerScore}`
    } else if (winnerOfRound.includes('lose')) {
        computerScore++
        return `Your score: ${playerScore}    Computer score: ${computerScore}`
    } else if (winnerOfRound.includes('tie')) {
        return `Your score: ${playerScore}    Computer score: ${computerScore}`
    } 
}

computerSelection = getComputerChoice()
playerSelection = prompt('Rock, Paper, Scissors: SHOOT!', 'RO')
    playerSelection = playerSelection.toLowerCase()

console.log(computerSelection)
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection))
console.log(game())

//if (playerScore === computerScore) {
    //return 'It\'s a draw. No one wins the game.'
//} else if (playerScore > computerScore) {
    //return 'YOU WIN THE GAME!'
//} else {
    //return 'You lost the game.'
//}