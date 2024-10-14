/*
    1. Preguntarle al usuario su nombre con apellido
    2. Preguntar su comida favorita
    3. Su edad
    4. Sumarle 10 años a la edad actual
    5.- Enviar los datos con console.log
*/

let nombre1 = prompt("¿Cuá es tu nombre?");
let apellido1 = prompt("¿Cuál es tu apellido?");
let edad1 = prompt("¿Cuál es tu edad");
let favoriteFood = prompt("¿Cuál es tu comida favorita");

console.log("Es un gusto conocerte " + nombre1 + " " + apellido1 + " " + "a mí también me gusta " + " " + favoriteFood + " " + "En diez años tu tendras la edad de " + (Number(edad1) + 10)) + "años";