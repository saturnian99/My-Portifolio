const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

/* 
1) Crie uma função para adicionar o turno da manhã na lesson2. 
Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
*/

const addShift = (object, key, value) => {
  object[key] = value;
  console.log(object); 
}

console.log("========== Exercise 1 - Add a value (manhã) ==========\n ");
addShift(lesson2, "turno", "manhã");

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {console.log(Object.keys(object));}

console.log("\n========== Exercise 2 - List object's keys ==========\n");
listKeys(lesson2);

// 3) Crie uma função para mostrar o tamanho de um objeto.

const objLength = (object) => {console.log(`Object lenght: ${Object.keys(object).length}`);}

console.log("\n========== Exercise 3 - Return object's lenght ==========\n");
objLength(lesson2);

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => {console.log(Object.values(object));}

console.log("\n========== Exercise 4 - List object's values ==========\n");
listValues(lesson2);

/*
5) Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

console.log("\n========== Exercise 5 - Assign all objects inside a new object ==========\n");
console.log(allLessons);


// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumValues = () => {
  let sum = 0;
  for (i in allLessons) {
    sum += allLessons[i]["numeroEstudantes"];
  }
  console.log(`The sum of all students: ${sum}`);
}

console.log("\n========== Exercise 6 - Sum objects's values (student numbers) ==========\n");
sumValues();

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByIndex = (object, index) => {
  console.log(`Value of index ${index}: ${Object.values(object)[index]}`);
}

console.log("\n========== Exercise 7 - Get object's values by their index ==========\n");
getValueByIndex(lesson2, 0);

/*
8) Crie uma função que verifique se o par (chave / valor) existem na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
*/

const verifyPair = (object, key, value) => {  
  const pair = [ key, value ];

  for (i in Object.entries(object)) {
    console.log(Object.entries(object)[i]);
    if (Object.entries(object)[i] == pair) {
      console.log("Existe!");
    }
  }
}

console.log("\n========== Exercise 8 - Verify pair key-value existence in object ==========\n");
verifyPair(lesson1, "materia", "Matemática");