function computerPlay() {
    let options = ["rock", "paper", "scissor"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

module.export =  computerPlay;

// console.log(computerPlay());