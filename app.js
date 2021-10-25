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


const computerSelection = computerPlay();
const input = prompt('Please choose rock, paper or scissors.');
const playerSelection = input.toUpperCase();

const playRound = function (playerSelection, computerSelection) {
    console.log(playerSelection)
    console.log(computerSelection)
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

// const singleRound = function(playerSelection, computerSelection){
//     console.log(playerSelection)
//     console.log(computerSelection)
//     if(playerSelection == 'ROCK' && computerSelection == 'PAPER'){
//         console.log('You lose!');
//     } else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
//         console.log('You win!');
//     } else {
//         console.log('Draw!');
//     }
// }


const game = function () {
    for (let i = 0; i < 5; i++) {
        let pScore = 0;
        let cScore = 0;
        let win = 'You win!';
        let loss = 'You lose!';
        let result = playRound(playerSelection, computerSelection)
        if (result === win) {
            pScore += 1;
        } else if (result === loss) {
            cScore += 1;
        }
        console.log(`pscore:${pScore} cscore:${cScore}`);
    }
}

game();