const prompt = require('prompt-sync')()

const distancia = parseFloat(prompt("Digite a distância que deseja percorrer em Km: "));

let preco;
if (distancia <= 200) {
  preco = distancia * 0.50;
} else {
  preco = distancia * 0.45;
}

console.log(`O preço da passagem é R$ ${preco.toFixed(2)}`);