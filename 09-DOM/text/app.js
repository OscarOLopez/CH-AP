const pElement = document.querySelector("p");
console.log(pElement); // Output: <p>Paragraph 1</p>
pElement.innerText += "Hola pipol";
console.log(pElement.textContent);
pElement.textContent += "Hola Pipol 2";