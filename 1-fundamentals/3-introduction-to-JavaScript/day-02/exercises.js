let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().

for (const number of numbers) {
    console.log(number);
}

// Some todos os valores contidos no array e imprima o resultado.

let sum = 0;

for (const number of numbers) {
    sum += number;
}

console.log(sum);

// Calcule e imprima a média aritmética dos valores contidos no array.

let arithmeticAverage = sum / numbers.length;

console.log(arithmeticAverage);

// Com base no código que acabou de gerar, referente ao calculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

if (arithmeticAverage > 20) {
    console.log('O valor da média aritmética é maior que 20');
} else {
    console.log('O valor da média aritmética é menor ou igual a 20');
}

// Utilizando for, descubra o maior valor contido no array e imprima-o.

let higher = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > higher) {
        higher = numbers[index];
    }
}

console.log(higher);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let countOdd = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        countOdd += 1;
    }
}

if (countOdd == 0) {
    console.log('Nenhum valor ímpar encontrado');
} else {
    console.log(countOdd);
}

// Utilizando for, descubra o menor valor contido no array e imprima-o.

let lower;

for (let index = 0; index < numbers.length; index += 1) {
    if (lower == undefined) {
        lower = numbers[index]
    } else if (numbers[index] < lower) {
        lower = numbers[index];
    }
}

console.log(lower);

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.

let array = []

for (let newNumber = 1; newNumber <= 25; newNumber += 1) {
    array.push(newNumber)
}

console.log(array);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2

for (const newArray of array) {
    console.log(newArray/2);
}

// crie um algoritmo que imprima na tela o fatorial de 10.

let factorial = 1;

for (let index = 10; index > 0; index -= 1) {
  factorial *= index;
}

console.log(factorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'trybe';
let newWord = '';

for (let index = word.length -1; index >= 0; index -= 1) {
    newWord += word[index];
}

console.log(newWord);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.

let array2 = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array2[0];
let smallestWord = array2[0];

for (let index = 1; index < array2.length; index += 1) {
  if (array2[index].length > biggestWord.length) {
    biggestWord = array2[index];
  }
}

for (let index = 1; index < array2.length; index += 1) {
  if (array2[index].length < smallestWord.length) {
    smallestWord = array2[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

// Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;

for (let currentNumber = 50; currentNumber >= 2; currentNumber -= 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
    break;
  }
}

console.log(biggestPrimeNumber);