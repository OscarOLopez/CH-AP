/*
    Operadores de comparación
    ==  igual a
    !=  distinto de
    >   mayor que
    <   menor que
    ===  igual a (comparación de tipos)
    !==  distinto de (comparación de tipos)
    >=  mayor o igual que
    <=  menor o igual que
*/
// Ejemplo de uso de operadores de comparación
// var a = 5;
// var b = 5;
// console.log(a == b); // true
// console.log(a != b); // false
// console.log(a > b); // false
// console.log(a < b); // false
// console.log(a === b); // true
// console.log(a !== b); // false
// console.log(1 === "1");  // false
// console.log (1 === Number("1"));  // true

// const calificacion = 5;
// if(calificacion <= 5){
//     console.log("Reprobaste F");
// }else if(calificacion > 5 &&  calificacion <= 8){
//     console.log("Aprobaste felicidades");
// }else if(calificacion  > 8 && calificacion <= 10){
//     console.log("Aprobaste con calificación más mejor");
// }else{
//     console.log("No se reconoce la calificación");
// }


// if(true){
//     console.log("me estoy ejecutando porque la condicion es verdadera");
// }else{
//     console.log("me estoy ejecutando porque la condicion es falsa");
// }

// console.log("Yo estoy fuera del If");

/*
    Pedirle con prompt al usuario que ingrese su calificacion
    Pedirle 3 calificaciones diferentes, sacar promedio
    evaluar y decirle si reprobo o aprobo
*/

// let calif = prompt("Ingresa tu calificación");
// if(calif >= 6){
//     console.log("Aprobaste");
// }else{
//     console.log("Reprobaste");
// }
// let calif1 = prompt("Ingresa tu primer calificacion");
// let calif2 = prompt("Ingresa tu segunda calificacion");
// let calif3 = prompt("Ingresa tu tercera calificacion");
// let promedio = (parseFloat(calif1)  + parseFloat(calif2) + parseFloat(calif3)) / 3;
// console.log("Tu promedio es " + promedio);
// if(promedio >= 6){
//     console.log("Aprobaste");
// }else{
//     console.log("Reprobaste");
// }

//Switch
// let numDay = parseInt(prompt("Ingresa numero del 1 al 7"));
// switch(numDay){
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
// }

/*
    Convertir el if que tenemos arriba a switch
    solo vamos a considerar del caso 5 al 10
    default tu calificacion no puede ser evaluada
*/
let califSwitch = prompt("Ingresa tu calificacion  del 5 al 10");
califSwitch =  parseFloat(califSwitch);


switch(true){
    case (califSwitch >= 5 && califSwitch < 6):
        console.log("Reprobado");
        break;
    case (califSwitch  >= 6 && califSwitch < 7):

        console.log("De panzazo");
        break;
    case (califSwitch  >= 7 && califSwitch < 8):

        console.log("Puedes mejorar");
        break;
    case (califSwitch   >= 8 && califSwitch < 9):

        console.log("Vas regular");
        break;
    case (califSwitch   >= 9 && califSwitch < 10):

        console.log("Casi  perfecto");

        break;
    case (califSwitch  == 10):

        console.log("Excelente! Felicidades!");
        break;
    default:
        console.log("No se puede evaluar");
    }