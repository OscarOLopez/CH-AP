const cardElement1 = document.getElementById("card-1");
//querySelector selecciona con base en un selector css
const btnCardElement1 = document.querySelector("#card-btn-1");
console.log(btnCardElement1);
//console.log(document.querySelector(""));
//console.log(document.querySelector(".card-title"));
//console.log(document.querySelector("#card-1 h5"));
//agrega clase
// cardElement1.classList.add("bg-primary");
// cardElement1.classList.remove("bg-danger");
// cardElement1.classList.replace("bg-primay","bg-secondary");

//classname sobreescribe todas las clases si no se hace bien
cardElement1.className += " bg-teresa";


btnCardElement1.addEventListener("click", (event) =>{
    const h5Title = document.querySelector(".card-title");
    h5Title.classList.toggle("hidden");
});

//estilos forma manual
cardElement1.style.backgroundColor = "#fff";
cardElement1.style.border = "solid 20px black";