/*
const cpuSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
*/


function getComputerChoice() {
    const hand = ['rock', 'paper', 'scissors']
    choice = Math.floor(Math.random() * hand.length);
    return hand[choice];

}
function playRound(playerSelection, cpuSelection) {
    let playerScore = 0;
    let cpuScore = 0;
    
   
   
    if (playerSelection === cpuSelection ) {
        return "draw"
    } 
    if (
        (playerSelection === 'rock' && cpuSelection === 'scissors') ||
        (playerSelection === 'paper' && cpuSelection === 'rock') ||
        (playerSelection === 'scissors' && cpuSelection === 'paper')
        )
     {
        playerScore++;
        return "Player wins"

    }
    if (
        (cpuSelection === 'rock' && playerSelection === 'scissors') ||
        (cpuSelection === 'paper' && playerSelection === 'rock') ||
        (cpuSelection === 'scissors' && playerSelection === 'paper')
    ) {
        cpuScore++;
        return "CPU wins";

    }

    
}

// Buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => { 
    button.addEventListener('click', () => {
       const playerSelection = button.className; 
        const cpuSelection = getComputerChoice();
        console.log(playRound(playerSelection, cpuSelection));

    })
    

})



    


