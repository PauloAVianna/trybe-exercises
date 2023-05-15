const newBrother = document.createElement(`section`);
newBrother.id = `quintoFilho`;
let parent = document.getElementById(`pai`);
parent.appendChild(newBrother);

const newChild = document.createElement(`section`);
newChild.id = `terceiroFilhoDoFilho`;
parent = document.getElementById(`elementoOndeVoceEsta`);
parent.appendChild(newChild);

const newChild2 = document.createElement(`section`);
newChild2.id = `primeiroNeto`;
parent = document.getElementById(`primeiroFilhoDoFilho`);
parent.appendChild(newChild2);

const thirdChild = newChild2.parentElement.parentElement.nextElementSibling;

console.log(thirdChild);
