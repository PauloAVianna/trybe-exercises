let chessPiece = "Queen";
let score = 100;

// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faça uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

switch (chessPiece.toLowerCase()) {
    case "bishop":
        console.log("diagonals");
        break;
    case "pawn":
        console.log("front");
        break;
    case "horse":
        console.log("L");
        break;
    case "tower":
        console.log("front, back and sides");
        break;
    case "queen":
        console.log("all directions");
        break;
    case "king":
        console.log("all directions");
        break;
    default:
        console.log("this is not a chess piece");
        break;
}

// 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

if (score < 0 || score > 100) {
    console.log("Error: Invalid score");
} else if (score >= 90) {
    console.log("your grade is A.");
} else if (score >= 80) {
    console.log("your grade is B.");
} else if (score >= 70) {
    console.log("your grade is C.");
} else if (score >= 60) {
    console.log("your grade is D.");
} else if (score >= 50) {
    console.log("your grade is E.");
} else {
    console.log("your grade is F.");
}
