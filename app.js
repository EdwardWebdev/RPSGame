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

// const rockPaperScissors = function (playerSelection, computerSelection) {
//     if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
//         return 'You Lose!'
//     } else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
//         return 'You win!'
//     } else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
//         return 'You lose!'
//     } else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
//         return 'You win!'
//     } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
//         return 'You lose!'
//     } else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
//         return 'You win!'
//     } else {
//         return 'A draw!'
//     }
// }

const computerSelection = computerPlay();
const input = prompt('Please choose rock, paper or scissors.')
const playerSelection = input.toUpperCase();

const game = function () {
    rockPaperScissors();
    rockPaperScissors();
    rockPaperScissors();
    rockPaperScissors();
    rockPaperScissors();
}

game();