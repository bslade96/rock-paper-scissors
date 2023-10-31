//INITIALIZE computer choice
    //CREATE an array containing the following choices: "rock", "paper", and "scissors"
    //INITIALIZE a new variable containing the previous array to GET a random choice.
    //RETURN result
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"]
    let result = choices[Math.floor(Math.random() * choices.length)]
    return result
}

//INITIALIZE player choice
    //prompt an INPUT from the user to make a choice and STORE in a variable. Case insensitive.
    // IF choice STRICTLY EQUALS "rock", "paper", "scissors"
        //RETURN choice
    //ELSE
        //alert invalid
        //prompt function again
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

//INITIALIZE a single round with 2 parameters for the comp and player
    //INITIALIZE a variable containing the comp choice function.
    //INITIALIZE a variable containing the player choice
    //IF player's choice EQUALS 'rock' AND comp choice EQUALS 'paper'
        //PRINT the player lost.
    //IF player choice EQUALS 'paper' AND comp choice EQUALS 'scissors'
        //PRINT the player lost.
    //IF player choice EQUALS 'scissors' AND comp choice EQUALS 'rock'
        //PRINT the player lost.
    //ELSE
        //PRINT player win.
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

    for(let i = 0; i < 5; i++) {
        let roundResult = playRound()
        if (roundResult === "lose") {
            compScore++
            console.log(`COMP SCORE: ${compScore}  YOUR SCORE: ${playerScore}`)
        } else if (roundResult === "win") {
            playerScore++
            console.log(`COMP SCORE: ${compScore}  YOUR SCORE: ${playerScore}`)
        } else {
            console.log(`COMP SCORE: ${compScore}  YOUR SCORE: ${playerScore}`)
        }
    } 
}

game()
    
