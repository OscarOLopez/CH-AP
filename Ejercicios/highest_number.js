/*
    Highest number
    Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
    1. 10 numeros
        1.a asegurarnos que sean numeros
    2. compararlos
        2.1 usar un if
        2.2 hacer un bucle
        2.3 almacenar el mayor en una variable
    3. determinar el mas grande
    4. mostrar el numero mas grande
*/
function findHighestNumber(){
    let numbers =  [];
    for (let i = 0;  i < 10; i++) {
        let numberInput =  Number(prompt("Ingresa el valor a comparar "));
        if(!isNaN(numberInput)){
            numbers.push(numberInput);
        }else{
            console.log("Ingrese un número válido");
            i--;
        }

    }
    let highest = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    console.log("El número más grande es: " + highest);

    

}
findHighestNumber();