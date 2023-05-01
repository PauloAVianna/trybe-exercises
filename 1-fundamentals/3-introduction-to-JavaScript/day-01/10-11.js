// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

// Atente para o fato de que um imposto de 20% incide sobre o custo do produto.

// Seu código deve emitir uma mensagem de erro e encerrar caso algum dos valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo e deve considerar que o imposto de 20% faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);

let productCost = 10;
let salesValue = 15;
let totalCost = productCost * 1.2;
let profit;

if (productCost < 0 || salesValue < 0) {
    console.log("error: invalid value")
} else {
    profit = (salesValue - totalCost) * 1000;
}
console.log(profit);

// 11 - Utilize if/else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1.500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto

let grossWage = 3000.00;
let baseWage;
let netWage;

if (grossWage < 1556.94) {
    baseWage = grossWage - (grossWage * 0.08);   
} else if (grossWage >= 1556.95 && grossWage <= 2594.92) {
    baseWage = grossWage - (grossWage * 0.09);
} else if (grossWage >= 2594.93 && grossWage <= 5189.82) {
    baseWage = grossWage - (grossWage * 0.11);
} else {
    baseWage = grossWage - 570.88;
}

if (baseWage > 1903.99 && baseWage <= 2826.65) {
    netWage = baseWage - (baseWage * 0.075 - 142.80);
} else if (baseWage > 2826.65 && baseWage <= 3751.05) {
    netWage = baseWage - (baseWage * 0.15 - 354.80);
} else if (baseWage > 3751.05 && baseWage <= 4664.68) {
    netWage = baseWage - (baseWage * 0.225 - 636.13);
} else if (baseWage > 4664.68) {
    netWage = baseWage - (baseWage * 0.275 - 869.36);
} else {
    netWage = baseWage;
}

console.log(baseWage);
console.log(netWage);
