let computerPlay = function(){
    let move = Math.floor((Math.random() * 3) + 1)
    if(move === 1){
        return console.log('Rock')
    } else if (move === 2) {
        return console.log('Paper')
    } else {
        return console.log('Scissors')
    }
}

computerPlay();