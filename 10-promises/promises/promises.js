console.log("Voy antes de la funcion wait");
const waitNSeconds = (miliseconds) =>{
    console.log("Esperando" +  miliseconds + " milisegundos");

    return new Promise((resolve, reject) => {
        //inicializamos el timeout
        setTimeout(()  => {
            const success =  true;
            if(success){
                resolve("La petición fue exitosa");
            }else{
                reject("La petición falló");
            }

        },miliseconds)
    })

}

//esperamos 2 segundos
waitNSeconds(2000).then(function(response){
    console.log(response);
}).catch((error)=>{
    console.log(error);
});

console.log("Voy despues de la función wait");