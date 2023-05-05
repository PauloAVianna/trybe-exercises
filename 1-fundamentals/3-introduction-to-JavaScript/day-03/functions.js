// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let balance = 100;

function addBalance(value) {
    return balance + value;
}

function subtractBalance(value) {
    return balance - value;
}

function multipliesBalance(value) {
    return balance * value;
}

function splitBalance(value) {
    return balance / value;
}

console.log(addBalance(300));
console.log(subtractBalance(50));
console.log(multipliesBalance(2));
console.log(splitBalance(5));

// Faça um programa para adicionar clientes ao array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro caso o parâmetro não seja do tipo string.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function validateClient(name) {
    if (typeof name !== `string`) {
        return 'O parâmetro passado deve ser do tipo "string"!';
    } else {
        return true;
    }
}

function newClient(name) {
    let validate = validateClient(name);
    if (validate === true) {
        clientesTrybeBank.push(name);
        return 'Cliente adcionada(o) com sucesso.';
    } else {
        return validate;
    }
}

console.log(newClient(true));
console.log(newClient('Joaquim'));
console.log(clientesTrybeBank);

// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.


function indexClient(client) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (client === clientesTrybeBank[index]) {
            return index;
        }
    }
    return false;
}

function deleteClient(name) {
    let validate = validateClient(name);
    if (validate !== true) {
        return validate;
    }

    let index = indexClient(name);
    if (index === false) {
        return 'Cliente não encontrada(o).';
    }

    clientesTrybeBank.splice(index, 1);
    return 'Cliente excluída(o) com sucesso.';
}

console.log(deleteClient(true));
console.log(deleteClient('Gilberto'));
console.log(deleteClient('Ada'));
console.log(clientesTrybeBank);
