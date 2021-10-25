// random move generator
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

const playRound = function (playerSelection, computerSelection) {
    let loss = 'You Lose!'
    let win = 'You win!'
    let draw = 'Draw!'
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

const game = function () {
    let computerSelection = computerPlay();
    let input = prompt('Please choose rock, paper or scissors.');
    let playerSelection = input.toUpperCase();
    console.log(playerSelection);
    console.log(computerSelection);
    let result = playRound(playerSelection, computerSelection)
    return result;
}

for(let i = 0; i <5; i++){
    game();
}