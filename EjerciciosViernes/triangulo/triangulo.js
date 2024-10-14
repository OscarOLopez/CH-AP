/*
    Escribe un bucle que realice siete llamadas a console.log para mostrar el siguiente triángulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
    Puede ser útil saber que puedes encontrar la longitud de una cadena escribiendo .length después de ella.
    let abc = "abc";
    console.log(abc.length);
    // → 3
    Segunda parte 
    Pasar a una función 
    Parámetro llamado size 
    Imprimir hasta el número que fue ingresado en size
    Pista: con un bucle queda
*/
let size = parseInt(prompt("Ingresa  el tamaño del triángulo"));

function  Triangle(size) {
    for (let i = +1; i <= size; i++) {
        console.log('#'.repeat(i));
    }
}

Triangle(size);

