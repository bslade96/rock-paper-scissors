const gameOptions = ['rock', 'paper', 'scissors']    
    
function getComputerChoice() {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

console.log(getComputerChoice('rock'))

