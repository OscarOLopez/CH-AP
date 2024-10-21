const URL_BASE = "https://fakestoreapi.com/products";
const mainContainer = document.querySelector(".container-j");

//evento de carga de la pagina
window.addEventListener("load", () => {
    //obteniendo la data desde el localStorage
    const productsArray = JSON.parse(localStorage.getItem("products"));
    showAllProducts(productsArray);
});


const showAllProducts = async function(productsArray){
    // if(productsArray.length >  0) return;
    const products = await productsArray;
    console.log(products);
    if(!products.length <  0) return; //guard clause return su objetivo
    for(let i=0;  i<products.length; i++){
        const cardProduct = `
        <div class="card" style="width: 18rem;">
          <img src="${products[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"${products[i].title}</h5>
            <p class="card-text">${products[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${products[i].price}</li>
            <li class="list-group-item">${products[i].category}</li>
          </ul>
        </div>
        `;
        mainContainer.insertAdjacentHTML("afterbegin",cardProduct);
    }

}

//function declaration async
async function  getallProducts(){
    // const  response = await fetch(URL_BASE);
    // const data =  await response.json();
    // console.log(data);
    if(localStorage.getItem("products")) return;
    try {
        const response = await fetch(URL_BASE);
        if(!response) throw new Error("Error al obtener los productos");
        const data = await response.json();
        //si retornamos algo dentro de una función async, siempre va a retornar como promesa
        localStorage.setItem("products",JSON.stringify(data));
        return data;       
    } catch (error) {
        console.log("Error",  error);
    }
}
//function expression async
const getSingleProduct = async function(id) {
    try {
        const response = await fetch(`${URL_BASE}/${id}`);
        if(!response) throw new Error("Error al obtener el producto");
        const data = await response.json();
        console.log(data);        
    } catch (error) {
        console.log("Error",  error);
    }
}

//arrow function
const addProduct = async (productObject) =>{
    const response =  await fetch(URL_BASE,{
        method: "POST",
        body:  JSON.stringify(productObject)
    });
    const data = await response.json();
    console.log(data);

}

//do a function async to delete  a product
const deleteProduct = async (id) =>{
    const response = await fetch(`${URL_BASE}/${id}`,{
        method: "DELETE"
    });
    const data = await response.json();
    console.log(data);
}

//do a function async to update a product
const updateProduct = async (id, productObject) =>{
    const response = await fetch(`${URL_BASE}/${id}`,{
        method: "PUT",
        body: JSON.stringify(productObject)
    });
    const data = await  response.json();
    console.log(data);
}


console.log(getallProducts());
getallProducts();
getSingleProduct(1);
deleteProduct(19);
addProduct( {
    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
})


updateProduct(15, {
    title: 'otro producto',
    price: 1500,
    description: 'nada de lorem',
    image: 'https://i.pravatar.cc',
    category: 'test'
})

showAllProducts(getallProducts());
console.log(mainContainer);