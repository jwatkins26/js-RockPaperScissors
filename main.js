
function getComputerChoice() {
    const hand = ['rock', 'paper', 'scissors']
    choice = Math.floor(Math.random() * hand.length);
    return hand[choice];

}


let playerScore = 0;
let cpuScore = 0;

function play(playerSelection, cpuSelection) {
    if (playerSelection === cpuSelection ) {
        return "It's a tie!"
    } 
    if (
        (playerSelection === 'rock' && cpuSelection === 'scissors') ||
        (playerSelection === 'paper' && cpuSelection === 'rock') ||
        (playerSelection === 'scissors' && cpuSelection === 'paper')
        )
     {
        playerScore++;
        return "Player wins!!!"

    }
    if (
        (cpuSelection === 'rock' && playerSelection === 'scissors') ||
        (cpuSelection === 'paper' && playerSelection === 'rock') ||
        (cpuSelection === 'scissors' && playerSelection === 'paper')
    ) {
        cpuScore++;
        return "CPU wins!!!";

    }
}

const cpuSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();


console.log(play(playerSelection, cpuSelection))