let a = 100;
let b = 40;
let c = 40;
let even = false;
let odd = false;

// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    even = true;
}
console.log(even);

// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

// Bônus: use somente um if.

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    odd = true;
}
console.log(odd);
