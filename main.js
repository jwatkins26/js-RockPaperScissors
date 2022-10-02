
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

function score (playerScore, cpuScore) {
    console.log(`Player > ${playerScore} | CPU > ${cpuScore}`);
}

function game () {
    for (let playRound = 1; playRound <= 5; playRound++){
        let playerScore = 0;
        let cpuScore = 0;
        const cpuSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();
        console.log(play(playerSelection, cpuSelection));
    }

    score(playerScore, cpuScore);
}



game();


/*console.log(play(playerSelection, cpuSelection))*/ 