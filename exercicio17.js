const prompt = require('prompt-sync')()


let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
  nomes[i] = prompt(`Digite o nome da pessoa ${i + 1}:`);
  idades[i] = parseInt(prompt(`Digite a idade da pessoa ${i + 1}:`));
}
console.log("|")
console.log("Pessoas menores de idade:");
console.log("|")
for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
  }
}