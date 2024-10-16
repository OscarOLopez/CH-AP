const bodyHTML = document.getElementById("bodychido");
console.log(bodyHTML);

const root = document.createElement("html");
root.lang = "es";
console.log(root);
const head = document.createElement("head");
const title = document.createElement("title");
const titleText = document.createTextNode("HTML con JS");
title.appendChild(titleText);
head.appendChild(title);
root.appendChild(head);
console.log(root);
const body = document.createElement("body");
root.appendChild(body);
console.log(root);
const h1 = document.createElement("h1");
const h1Text = document.createTextNode("Soy un H! en una prueba tree");
h1.appendChild(h1Text);
body.appendChild(h1);
const img = document.createElement("img");
img.setAttribute("src",  "https://picsum.photos/200/300");
body.appendChild(img);
console.log(root);
bodyHTML.appendChild(root);
