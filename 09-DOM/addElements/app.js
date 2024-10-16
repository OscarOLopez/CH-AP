const mainContainer = document.querySelector("main");
const btnAdd = document.querySelector("button");




btnAdd.addEventListener("click", () =>{
    const cardElement = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `;
    /* agregar elementos con innerHTML
    mainContainer.innerHTML += cardElement;*/

    mainContainer.insertAdjacentHTML("beforebegin", cardElement);
    //Solo puedes pasarle un elemento de html
    mainContainer = insertAdjacentElement("beforebegin",  cardElement);

})