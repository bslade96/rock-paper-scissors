//Comp choice
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let result = choices[Math.floor(Math.random() * choices.length)]
    return result
}

//Player choice
function getPlayerChoice() {
    let input = prompt("Rock, Paper, Scissors, SHOOT!: ")
    let choice = input.toLowerCase()

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice
    } else if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
        alert("Please enter 'rock', 'paper', or 'scissors'.")
        return getPlayerChoice()
    }
}

//Single round
function playRound() {
    let compChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()

    if (compChoice === playerChoice) {
        console.log(`Comp choice: ${compChoice}`)
        console.log(`Your choice: ${playerChoice}`)
        console.log("It's a tie for this round.")
        return "tie"
    } else if (compChoice === "rock" && playerChoice === "scissors") {
        console.log(`Comp choice: ${compChoice}`)
        console.log(`Your choice: ${playerChoice}`)
        console.log("You lose this round. Rock beats scissors.")
        return "lose"
    } else if (compChoice === "paper" && playerChoice === "rock") {
        console.log(`Comp choice: ${compChoice}`)
        console.log(`Your choice: ${playerChoice}`)
        console.log("You lose this round. Paper beats rock.")
        return "lose"
    } else if (compChoice === "scissors" && playerChoice === "paper") {
        console.log(`Comp choice: ${compChoice}`)
        console.log(`Your choice: ${playerChoice}`)
        console.log("You lose this round. Scissors beats paper.")
        return "lose"
    } else {
        console.log(`Comp choice: ${compChoice}`)
        console.log(`Your choice: ${playerChoice}`)
        console.log("You win this round!")
        return "win"
    } 
}

//INITIALIZE a game function
    //USE previous function inside the game
    //CREATE a FOR loop to loop the playRound function 5 times.
    //
function game() {
    let compScore = 0
    let playerScore = 0
    let round = 1

    for(let i = 0; i < 5; i++) {
        console.log(`    ---------- ROUND ${round++} ----------    `)
        let roundResult = playRound()
        if (roundResult === "lose") {
            compScore++
            console.log(`Comp score - ${compScore}       Your score - ${playerScore}`)
        } else if (roundResult === "win") {
            playerScore++
            console.log(`Comp score - ${compScore}       Your score - ${playerScore}`)
        } else {
            console.log(`Comp score - ${compScore}       Your score - ${playerScore}`)
        }
        console.log("")
    } 

    console.log("")

    if (compScore === playerScore) {
        console.log(`    FINAL SCORE:   COMP - ${compScore}    YOU - ${playerScore}`    )
        console.log("  **** IT'S A TIME GAME. NOBODY WINS! ****  ")
    } else if (compScore > playerScore) {
        console.log(`    FINAL SCORE:   COMP - ${compScore}    YOU - ${playerScore}`    )
        console.log("  **** YOU LOSE THE GAME. COMPUTER WINS! ****  ")
    } else {
        console.log(`    FINAL SCORE:   COMP - ${compScore}    YOU - ${playerScore}`    )
        console.log("  **** YOU WIN THE GAME! COMPUTER LOSES! ****  ")
    }
}

game()
    
