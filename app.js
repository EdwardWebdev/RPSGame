let computerPlay = function(){
    let move = Math.floor((Math.random() * 3) + 1)
    if(move === 1){
        return 'Rock'
    } else if (move === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}