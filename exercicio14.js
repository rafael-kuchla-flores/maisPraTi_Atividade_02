const prompt = require('prompt-sync')()


let nomes = [];

for (let i = 0; i < 7; i++) {
  nomes.push(prompt(`Informe o nome ${i + 1}:`));
}
console.log("|")
console.log("Nomes informados na ordem inversa:");
console.log("|")
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}