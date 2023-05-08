let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: '34',
    medals: {
        golden: 2,
        silver: 3,
    }
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

let student = {};

function addProperty(object, key, value) {
    object[key] = value;
};

addProperty(student, 'name', 'Paulo');
addProperty(student, 'email', 'p.avianna@hotmail.com');
addProperty(student, 'telefone', 7599548470);
addProperty(student, 'GitHub', 'PauloAVianna');
addProperty(student, 'LinkedIn', 'Paulo André Vianna');
console.log(student);

let countries = {
    franca: 'Paris',
    brasil: 'Brasília',
    espanha: 'Madrid',
    portugal: 'Lisboa',
  };

let pairKeyValue = Object.entries(countries);

console.log(pairKeyValue);

for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
};
