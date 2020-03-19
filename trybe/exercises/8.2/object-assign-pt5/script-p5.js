const saiyan = {
  name: "kakarot",
  powerLevel: "8000+",
}

const kaioshin = {
  name: "Zamasu",
  side: "Evil",
}

const gokuBlack = Object.assign(saiyan, kaioshin); // With this method, I can access and manipulate the original object "Goku" using another object "Zamasu"

console.log(saiyan);
console.log(gokuBlack);

const saiyanPrince = {
  name: "Vegeta",
  powerLevel: "7999",
}

const miracleWater = {
  name: "Commeson",
  color: "Pink",
}

const fakeVegeta = Object.assign({}, saiyanPrince, miracleWater); // Here, I've "cloned" the two objects into one, manipulating the clone "Fake Vegeta" without altering the original "Vegeta"

console.log(saiyanPrince);
console.log(fakeVegeta);
