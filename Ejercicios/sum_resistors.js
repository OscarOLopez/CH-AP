/**
 * Calculate the sum of all resistors connected in series.
    Examples:
    - `sumResitance([-1,5,6,3])` should return `"15 ohms"`. (|−1| + 5 + 6 + 3 = 15)
    - `sumResitance([14,3.5,6])` should return `'23.5 ohms'`. (14 + 3.5 + 6 = 23.5)
    - `sumResitance([8,15,100])` should return `'123 ohms'`. (8 + 15 + 100 = 123)
    Note: This approach uses the absolute value of each resistance to ensure all values are positive.
    1. Entrada array de numeros(resistencias)
    2. Salida un numero que debe ser la suma de las resistencias llamada ohms
    3. crear un loop para recorrer el array y sumar sus valores
    4. si el valor es negativo convertirlo a positivo (multiplicar por -1 o usar Math.abs())
    5. Sumar los valores e ir guardando la suma en la variable ohms
    6. Retornar la variable ohms
 */

const sumResitance = function(resistors){
    let ohms = 0;
    resistors.forEach(resistor => {
        if(resistor <  0){
            ohms = ohms + (resistor * -1);
        }else{
            ohms = ohms + resistor;
        }
    });  
    return ohms + " ohms";
}

console.log(sumResitance([-1,5,6,3]));
console.log(sumResitance([14,3.5,6]));
console.log(sumResitance([8,15,100]));

const sumResitance2 = function(resistors){
    return resistors.reduce(ohms, resistor) =>  {
        if(resistor < 0){
            return ohms + (resistor * -1);
        }else{
                return ohms + resistor;
        }
    }, 0)
}

        console.log(sumResitance([-1,5,6,3]));
        console.log(sumResitance([14,3.5,6]));
        console.log(sumResitance([8,15,100]));

}