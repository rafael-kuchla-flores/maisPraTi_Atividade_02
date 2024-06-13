const prompt = require('prompt-sync')()


const tipoCarro = prompt("Digite o tipo de carro (popular ou luxo): ");
const diasAluguel = parseInt(prompt("Digite o número de dias de aluguel: "));
const kmPercorridos = parseInt(prompt("Digite o número de Km percorridos: "));

let precoAluguel = 0;
if (tipoCarro === "popular") {
  precoAluguel = diasAluguel * 90;
  if (kmPercorridos <= 100) {
    precoAluguel += kmPercorridos * 0.20;
  } else {
    precoAluguel += 100 * 0.20 + (kmPercorridos - 100) * 0.10;
  }
} else if (tipoCarro === "luxo") {
  precoAluguel = diasAluguel * 150;
  if (kmPercorridos <= 200) {
    precoAluguel += kmPercorridos * 0.30;
  } else {
    precoAluguel += 200 * 0.30 + (kmPercorridos - 200) * 0.25;
  }
}

console.log(`O preço a ser pago é de R$ ${precoAluguel.toFixed(2)}`);