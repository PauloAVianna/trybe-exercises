let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (let name in names) {
    console.log('Olá, ' + names[name]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let key in car) {
    console.log(key, car[key]);
}

let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom',
};

function listSkills(student) {
  for (let index in student) {
    console.log(index + ' Nível: ' + student[index]);
}
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);
