// Tente criar uma função que exiba as habilidades do objeto student. Cada, habilidade deve ser exibida no formato:
// “Nome da habilidade, Nível: valor da chave referente à habilidade”.
// Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const getKeys= (student) => {
  let keys = Object.keys(student);
  for (i in keys) {
    console.log(`${keys[i]}, Nível: ${student[keys[i]]}`);
  }
  console.log("\n");
}

console.log("Student #1:");
getKeys(student1);
console.log("Student #2");
getKeys(student2);