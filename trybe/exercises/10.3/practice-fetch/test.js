// http://viacep.com.br/ws//json

const element = document.getElementById('element')
const cep = 88030460;

fetch(`http://viacep.com.br/ws/${cep}/json`)
  .then((data) => data.json())
  .then(({ bairro }) => element.innerHTML = bairro)