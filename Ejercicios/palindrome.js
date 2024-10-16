/*
    Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). 
    Figure out if the sentence/word is a palindrome or not.  spaces and capitalized letters.
    1. Entrada un string ya sea frase o palabra
    2. Definicion Palindromo: Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda; por ejemplo, anilina; dábale arroz a la zorra el abad.
    3. Guardar la entrada en una variable
    4. normalizar la palabra o frase, haciendo todo en minis y quitando espacios
        4.1 guardar una copia de la palabra o frase original normalizada
    5. convertir la palabra o frase a un array
    6. revertir el array y guardarlo e una variable
    7. convertir el array de nuevo en frase o palabra y guardarlo en una variable
    8.  comparar la frase o palabra original con la frase o palabra revertida
    9. Salida una frase que indique si la entrada del usuario es o no es un palindromo

*/

const isPalindrome = () => {
    const str = prompt("Ingresa una palabra o frase para verificar si es palindromo");
    const strNormalized = str.toLowerCase().replaceAll(" ","");
    const strArray = strNormalized.split("");
    const strNormReversed =  strArray.reverse().join("");
    if(strNormalized  === strNormReversed){
        console.log ("La palabra o frase ingresada es un palindromo");
    }else{
        console.log("Nuez🌰");
    }



}

isPalindrome();