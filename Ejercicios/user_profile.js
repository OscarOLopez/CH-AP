/*
    Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
    Store the information and then showcase it in the console. 
    Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
    1. Entrada del programa: username, age, list movies.
    2. Prompt username, age, movies
    3. Hacer consts username, age, movies
    4. Pedirle al usuario que ingrese las peliculas separadas por comas
    5. Peliculas ingresan como String
    6. Con for y push seria con varios prompts
        6a. split()
    N. Salida: La pelicula es  uno de mis favoritos

*/

const userName = prompt("Ingresa tu nombre");
const age =  prompt("Ingresa tu edad");
const movies = prompt("Ingresa tus películas favoritas separadas por comas");
// const arrayMoviesReplace = movies.replaceAll(" ", "").split(",")
// una opción para convertir a array limpiar espacios en cada peli o puede ser un foreach
const arrayMovies = movies.split(",").map(movie => movie.trim);
console.log(arrayMovies);
console.log(userName);
console.log(age);

