// Agora, para praticar, crie uma função que receba três parâmetros. 
// Sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const assignKey = (object, key, value) => {
  object[key] = value;
  console.log(object);
}

const user = {};
const keyName = "name"
const name = "Jorge"

assignKey(user, keyName, name);