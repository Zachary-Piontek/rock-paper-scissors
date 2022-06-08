// import needed modules
import { getRandomItem, score } from './utils.js';


// state

const threw = ['rock', 'paper', 'scissors'];
let computerThrew = '';
let userThrew = '';


const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document. getElementById('scissor-button');
// components
    // component
function gameOutcome(){
    computerThrew = getRandomItem(threw);
    const result = score(userThrew, computerThrew);

    if (result === -1) {
        losses += 1;
    }
    else if (result === 0) {
        draws += 1;
    }
    else if (result === 1) {
        wins += 1;
    }
}
    // define and grab DOM elements
    // display functions
    // optional: subscribe to events
        // event handlers - what needs to happen?
        // logic and calculations
        // state update



        // re-display components (which ones?)
rockButton.addEventListener('click', () => {
    gameOutcome('rock');
});
paperButton.addEventListener('click', () => {
    gameOutcome('paper');
});
scissorsButton.addEventListener('click', () => {
    gameOutcome('scissors');
});



    // optional: handle functions for shared event handler logic

// page load actions


