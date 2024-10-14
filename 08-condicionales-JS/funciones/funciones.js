// //declaracion de funcion
// function greeting(nombre){
//     return  "Hola, " + nombre;

     // return  `Hola  ${nombre} mucho gusto`;
// }

//Variable global
// let nombre = "Flor";
// console.log(nombre);

// console.log(greeting("Oscar")); 

//expresion de función

// const esMayorDeEdad = function (edad){
//     if(edad  >= 18){
//         return "Ya eres mayor de edad";
//     }else if(edad > 0 &&  edad < 18){

//         return "Aun no eres mayor de edad";
//     }
//     return "No has nacido";
// }

// console.log(esMayorDeEdad(18));
// console.log(esMayorDeEdad(17));
// console.log(esMayorDeEdad(2));
// console.log(esMayorDeEdad(0));

//Arrow function
// const hola =()  => "Hola"

// console.log(hola());

// const isEven = (number) => number%2 === 0?"Es par":"no es par";

// console.log(isEven(2));
// console.log(isEven(5));

/*
    1. Function celciusToFarenheit
    2. Parametros solo uno celcius
    3. Retornar el valor en farenheit
*/

// function  celciusToFarenheit(celcius){
//     return "Los grados Farenheit son : " + ((celcius * 9/5) + 32);

// }
// let celcius = parseFloat(prompt("Ingresa los grados celsius"));
// let fahrenheit = celciusToFarenheit(celcius);
// console.log(fahrenheit);


/*
    1. Function descuento
    2. parametro tipo number dineroPagado
    3. Gasto menos de $200 no se aplica descuento
    4. 201 a 500 descuento del 10%
    5. 501 - 100 descuento del 20%
    6. 1001 - infinito descuento del 30%
    7. valor de retorno cuanto va a pagar el usuario con el descuento  aplicado

*/

function descuento(){
    let dineroPagado = Number(prompt("¿Cuánto gastó?"))
    if (dineroPagado > 0 && dineroPagado <= 200){
        return "Paga " + dineroPagado
    }else if(dineroPagado > 200 && dineroPagado  <= 500){
        return "Paga " + (dineroPagado - (dineroPagado * 0.1))
    }else if(  dineroPagado > 500 && dineroPagado <= 1000){
        return "Paga " + (dineroPagado -  (dineroPagado * 0.2))

    }else if (dineroPagado > 1000){
        return "Paga " + (dineroPagado -  (dineroPagado * 0.3))
    }else{
        return "Error"
    }
}
console.log(descuento());