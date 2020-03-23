const países = {
  França: "Paris",
  Brasil: "Brasilia",
  Espanha: "Madrid",
  Portugual: "Lisboa"
};
const pairKeyValue = Object.entries(países);

const listKeyValues = () => {
  for(i in pairKeyValue) {
    console.log("Pais:", pairKeyValue[i][0]);
    console.log("Capital:", pairKeyValue[i][1]);
    console.log("\n");
  }
}

listKeyValues();