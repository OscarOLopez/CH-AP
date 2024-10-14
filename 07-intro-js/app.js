console.log("Esto sale en la consola");

const name = "Oscar";
console.log("Hola " + name);
let apellido = "Cano";
console.log("Hola " + apellido);
//string
let nombre = "Oscar";
//number
let numero = +12;
let suma = +12.5;
let infinito = Infinity;
let menosInfinito = -Infinity;
//boolean
let esVerdad = true;
let esFalso = false;
//empty
let anime = undefined; //No esta definido
let animal = null; //no  hay contenido
// alert("Hola Generation");

let animalFavorite = prompt("Ingresa tu animal favorito");
console.log(animalFavorite);

let age = prompt("ingresa tu edad");

console.log("Tu edad dentro de 5 años es " + (Number(age) + 5));

//****************Conversion de tipos**************

let textToNumber = "123";
let textToInteger = "15asasd15asd";
let textToFloat = "13.1415asd";
let textToBoolean = "Hola CH";
let booleanToString = "false";

console.log("String To Number");
console.log(Number(textToNumber));
console.log(typeof (textToNumber));

console.log("String to int");
console.log(textToInteger);
console.log(typeof (textToInteger));
console.log(parseInt(textToInteger));
console.log(typeof (textToInteger));

console.log("String to float");
console.log(textToFloat);
console.log(typeof (textToFloat));
console.log(parseFloat(textToFloat));
console.log(typeof parseFloat(textToFloat));

console.log("String to boolean");
console.log(textToBoolean);
console.log(typeof (textToBoolean));
console.log(Boolean (textToBoolean));
console.log(typeof (Boolean(textToBoolean)));

/* Para String mientras no sea una cadena vacia regresa true, 
para number mientras no sea 0 regresa true, 
undefined y null regresan false*/

console.log(Boolean(NaN));
console.log(Number(undefined));

//***************** Operadores ***************

console.log("Suma");
console.log(1 + 1);
console.log("resta");
console.log(3 - 1);
console.log("Multiplicacion");
console.log(3 * 3);
console.log("Division");
console.log(4 / 2);
console.log("Modulo");
console.log(9 % 2);
console.log("Exponente");
console.log(2 ** 3);

/*************Operadores lógicos ***************/

/*
    AND (&&) regresa true solo si los dos lados de la comparación 
    son true si no, es false
    OR (||) regresa true si uno de los dos lados es true,
    si los dos lados son false regresa false
    NOT (!) niega lo que tengamos

    falsy values
    0
    -0
    0.0
    undefined
    null
    NaN

    truthy values son valores evaluados como true en una condicion
    booleana
    string que no sean vacios
    number que no sean 0
    objetos
    
    
*/
console.log("Pruebas AND");
console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log(false && false);
console.log(true && true && false);
console.log(0 && 1);
console.log(true && 1);
console.log(undefined  && 1);


console.log("Pruebas OR");
console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log(2 || 0);
console.log(4 || 2);
console.log("" || "Jorge");
console.log("Martha"  || "Carlos");
console.log(undefined || "Jorge");
console.log(null  || "Muriel");
console.log(NaN || 0);
console.log(null  || undefined);

console.log("Pruebas NOT");
console.log(!"Teresa");
console.log(!true);
console.log(!false);
console.log(!0);
console.log(!1);
console.log(!undefined);
console.log(!null);
console.log(!NaN);

console.log("Prueba nullish");
console.log(0  ?? "Jorge");





