const formEl = document.querySelector("form");
console.log(formEl);

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);
    const email = event.target.elements["email"].value;
    const password = event.target.elements["password"].value;
    const check = event.target.elements["check"].value;
    //para el formdata es importante tener el atributo name puesto
    const formData = [...new FormData(formEl)];
    const dataObject = Object.fromEntries(formData);
    if(validateUserEmail(dataObject) &&  validateUserPassword(dataObject)){
        showUserInfo(dataObject);
    }else{
        showErrorAlert();
        return;
    }
    console.log(dataObject);
    
});

function showUserInfo(dataObject){
    const alert = `
        <div class="alert alert-primary" role="alert">
           Este es el email del usuario: ${dataObject.email}
           Este es el password del usuario:  ${dataObject.password}

        </div>
    `;
    formEl.insertAdjacentHTML("afterend", alert)
}

function showErrorAlert(){
    const alert = `
        <div class="alert alert-danger" role="alert">
           <p>"Algo salio mal"<p>
        </div>
    `;
    formEl.insertAdjacentHTML("afterend", alert);
}

function validateUserEmail(dataObject){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail =  regexEmail.test(dataObject.email);
    return isValidEmail;
}

function validateUserPassword(dataObject){
        const regexPassword = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}|:<>?[\]\/.,])(?!.*\s).{10,10}$/
        const isValidPassword = regexPassword.test(dataObject.password);
        return isValidPassword;
    
}