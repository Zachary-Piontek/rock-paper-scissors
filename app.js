// import needed modules
import { getRandomItem, score } from './utils.js';


// state

const threw = ['rock', 'paper', 'scissors'];
let computerThrew = '';
let userThrew = '';
let wins = 0;
let draws = 0;
let losses = 0;
let outcome = 0;


const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document. getElementById('scissors-button');
// components
    // component
function gameOutcome(){
    computerThrew = getRandomItem(threw);
    outcome = score(userThrew, computerThrew);

    if (outcome === -1) {
        losses += 1;
    } else if (outcome === 0) {
        draws += 1;
    } else if (outcome === 1) {
        wins += 1;
    }

    displayResults();
    displayScoreboard();
}

      
function displayScoreboard() {
    if (computerThrew === 1) {
        rockButton.classList.add(losses);
    }
    if (computerThrew === 0) {
        paperButton.classList.add(draws);
    }
    if (computerThrew === -1) {
        scissorsButton.classList.add(wins);
    }
    if (userThrew === 1) {
        rockButton.classList.add(wins);
    }
    if (userThrew === 0) {
        paperButton.classList.add(draws);
    }
    if (userThrew === -1) 
        scissorsButton.classList.add(losses);
    
}
rockButton.addEventListener('click', () => {
    userThrew = 'rock';
    gameOutcome();
});
paperButton.addEventListener('click', () => {
    userThrew = 'paper';
    gameOutcome();
});
scissorsButton.addEventListener('click', () => {
    userThrew = 'scissors';
    gameOutcome();
});
const winsDisplay = document.getElementById('user-wins');
const drawsDisplay = document.getElementById('user-draws');
const lossesDisplay = document. getElementById('user-losses');

function displayResults() {
    // add an if (outcome) with curly for interesting bug :)
    // because of 1, 0, -1 logic truthy falesy
    
    if (outcome) {
        winsDisplay.textContent = wins;
        drawsDisplay.textContent = draws;
        lossesDisplay.textContent = losses;
    }
}

displayResults();
displayScoreboard();

