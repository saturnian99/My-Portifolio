const jokeContainer = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => jokeContainer.innerHTML = data.joke);

const isOverEightThousand = () => {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (i = 0; i < 10; i++) {
      sum += Math.random() * 2500;
    }

    if (sum < 80000) {
      resolve(
        [sum / 2, sum / 3, sum / 5, sum / 10]
      );
    }
    reject('É mais de oito mil! Essa promise deve estar quebrada!')
  });
};

isOverEightThousand()
  .then((result) => result)
  .then((arr) => console.log(arr.reduce((acc, num) => acc + num, 0)))
  .catch((message) => console.log(`Error: ${message}`));

window.onload = () => fetchJoke();
