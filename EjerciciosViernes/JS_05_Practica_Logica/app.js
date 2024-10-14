let option = prompt("Escribe que  opción deseas: (Perfil de Usuario, Numero mas alto, Palindromo)");
switch  (option) {
    case "Perfil de Usuario":
        /*
            Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
            Store the information and then showcase it in the console. 
            Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
        */
        let username = prompt("Ingresa tu nombre:");
        let age = prompt("Ingresa tu edad:");
        let movies = [];
        let i = 0;
        while (i < 3) {
            let movie = prompt("Escribe una de tus películas favoritas");
            movies.push(movie);
            i++;
        }
        console.log(`Hola ${username}` + `\nIncreíble tienes ${age} años` + `\n` + `También ${movies} son de mis peliculas favoritas\n`);
    break;
    case "Numero mas alto":
        /*
            Write a program that asks for 10 numbers. 
            Using logical operators and any other javascript functions/structures you've seen before, 
            determine and output the highest of those numbers.
        */
        let numbers = [];
        let a = 0;
        while (a < 10) {
            let number = prompt("Ingresa un número");
            numbers.push(number);
            a++;
        }
        let max = Math.max(...numbers);
        console.log(`El número más alto es: ${max}`);
    break;
    case "Palindromo":
        /*
            Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
            Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
        */
        let word = prompt("Escribe una palabra o frase");
        let wordClean = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        let wordReverse = wordClean.split('').reverse().join('');
        if (wordClean === wordReverse) {
            console.log(`La palabra o frase ${word} es un palindromo`);
        } else {
            console.log(`La palabra o frase ${word} no es un palindromo`);
        }
    break;

                
    
}