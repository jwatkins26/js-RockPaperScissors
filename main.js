
let playerScore = 0;
let cpuScore = 0;
let winner = '';

function getComputerChoice() {
    const hand = ['rock', 'paper', 'scissors']
    choice = Math.floor(Math.random() * hand.length);
    return hand[choice];

}


function playRound(playerSelection, cpuSelection) {
   
   
    if (playerSelection === cpuSelection ) {
        return "draw"
    } else if(
        (playerSelection === 'rock' && cpuSelection === 'scissors') ||
        (playerSelection === 'paper' && cpuSelection === 'rock') ||
        (playerSelection === 'scissors' && cpuSelection === 'paper')
        )
     {
        playerScore += 1;
        return "Player wins"

    }else if (
        (cpuSelection === 'rock' && playerSelection === 'scissors') ||
        (cpuSelection === 'paper' && playerSelection === 'rock') ||
        (cpuSelection === 'scissors' && playerSelection === 'paper')
    ) {
        cpuScore += 1;
        return "CPU wins";

    }
}


// Buttons



const buttons = document.querySelectorAll("button");
buttons.forEach((button) => { 
    button.addEventListener('click', () => {
        const playerSelection = button.className; 
        const cpuSelection = getComputerChoice();
        roundWinner.textContent = playRound(playerSelection, cpuSelection);
        pScore.textContent = `Player Score >>> ${playerScore}`;
        cScore.textContent = `CPU Score >>> ${cpuScore}`;
        
        })
    })

const roundWinner = document.createElement('h1');
roundWinner.textContent = `Winner: `;
document.body.appendChild(roundWinner);

const pScore = document.createElement('h1');
pScore.setAttribute('style', "font: arial; color: blue;")
pScore.textContent = `Player Score >>> ${playerScore} `;
document.body.appendChild(pScore);

const cScore = document.createElement('h1');
cScore.setAttribute('style', "color: red;");
cScore.textContent = `CPU Score >>> ${cpuScore}`;
document.body.appendChild(cScore);

