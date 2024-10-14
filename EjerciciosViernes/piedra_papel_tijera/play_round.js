//let playerSelection =prompt("rock, paper, scissor");
//let computerSelection =prompt("rock, paper,  scissor");

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Empate";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return "Gana el jugador";
        } else {
        return "Gana la computadora";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "Gana el jugador";
        } else {
            return "Gana la computadora";
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            return "Gana el jugador";
        } else {
            return "Gana la computadora";
        }
    }
}

module.export =  playRound;


//console.log(playRound(playerSelection,  computerSelection));
