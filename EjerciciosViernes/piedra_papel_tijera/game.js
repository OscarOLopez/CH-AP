/*
    Hacer una función que se llame computerPlay esta función no recibe parametros
    dentro de esta opcion vamos a tener un array de opciones let options = ["rock", "paper", "scissor"]; de manera aleatoria seleccionar una de las 3 opciones y retornarla
    Hacer una función que se llama playRound, esta función recibe como parametros la función computerPlay y la elección del jugador en  playerSelection
    dentro de la función playRound va la lógica del juego 
    Hacer una función llamada game que no recibe argumentos 
    dentro de esta función se inicia el juego y se tiene que repetir 5 veces


    Casos del juego
    piedra vence a tijeras
    tijeras vence a papel
    Papel vence a piedra
    si las selecciones son iguales empate

*/
const computerPlay = require('./computer_play1');
const playRound = require('./play_round');


function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Ingrese su elección: ").toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(`El jugador selecciono ${playerSelection} y la computadora selecciono ${computerSelection}. El resultado es ${ result } `);
        if (result === "Gana el jugador") {
            score++;
        }
        console.log(`El jugador tiene ${ score } puntos`);
    }
game();
}