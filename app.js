// import needed modules
import { getRandomItem, score } from './utils.js';


// state

const threw = ['rock', 'paper', 'scissors'];
let computerThrew = '';
let userThrew = '';
let wins = 0;
let draws = 0;
let losses = 0;


const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document. getElementById('scissors-button');
// components
    // component
function gameOutcome(){
    computerThrew = getRandomItem(threw);
    const outcome = score(userThrew, computerThrew);

    if (outcome === -1) {
        losses += 1;
    }
    else if (outcome === 0) {
        draws += 1;
    }
    else if (outcome === 1) {
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
    gameOutcome(1);
});
paperButton.addEventListener('click', () => {
    gameOutcome(0);
});
scissorsButton.addEventListener('click', () => {
    gameOutcome(-1);
});
const winsDisplay = document.getElementById('user-wins');
const drawsDisplay = document.getElementById('user-draws');
const lossesDisplay = document. getElementById('user-losses');

function displayResults() {
    if (userThrew) {
        winsDisplay.textContent = wins;
        drawsDisplay.textContent = draws;
        lossesDisplay.textContent = losses;
    }
}
displayResults();
displayScoreboard();