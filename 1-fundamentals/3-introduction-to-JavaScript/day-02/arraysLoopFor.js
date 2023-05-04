let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato')

console.log(menu);

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
    console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const name of names) {
    console.log(name);
}

let dado1 = Math.ceil(Math.random() * 6);

console.log('resultado dado 1:', dado1);

let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
    dado2 = Math.ceil(Math.random() * 6);
    console.log('resultado dado 2:', dado2);
}

let n = 9;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);