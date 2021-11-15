

//Random move generator
const computerPlay = function () {
    let move = Math.floor((Math.random() * 3) + 1)
    if (move === 1) {
        return 'ROCK'
    } else if (move === 2) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}

// String comparison to decide a winner
const playRound = function (playerSelection, computerSelection) {
    let loss = 1;
    let win = 2;
    let draw = 3;
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        return loss
    } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
        return win
    } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        return loss
    } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
        return win
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        return loss
    } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        return win
    } else {
        return draw
    }
}

// Score keeping function
let pScore = 0;
let cScore = 0;
const keepScore = function (game) {
    if(game === 1){
        pScore = pScore + 1;
    } else if (game === 2){
        cScore = cScore + 1;
    }
    const resultDiv = document.querySelector('#results');
    const score = document.createElement('p');
    score.textContent = `Player: ${pScore} Computer: ${cScore}`;
    resultDiv.appendChild(score);
    function checkScore() {
        if(pScore === 5 || cScore === 5){
            const buttons = document.querySelectorAll('button');
            buttons.forEach(button => button.remove());
            score.textContent = `Player: ${pScore} Computer: ${cScore}. We have a winner!`
        }
    }
    checkScore();
}

// Function that asks the player for input and gets the computer's input
const game = function (selection) {
    let computerSelection = computerPlay();
    let input = selection;
    let playerSelection = input.toUpperCase();
    let result = playRound(playerSelection, computerSelection);
    return result;
}



const rockButton = document.querySelector('#rock');
const playRock = rockButton.addEventListener('click', (e) => {
    keepScore(game('rock'));
});

const paperButton = document.querySelector('#paper');
const playPaper = paperButton.addEventListener('click', (e) => {
    keepScore(game('paper'));
});

const scissorsButton = document.querySelector('#scissors');
const playScissors = scissorsButton.addEventListener('click', (e) => {
    keepScore(game('scissors'));
});