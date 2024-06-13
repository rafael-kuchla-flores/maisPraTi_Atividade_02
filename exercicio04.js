const prompt = require('prompt-sync')()

const lado1 = parseFloat(prompt("Digite o comprimento do primeiro segmento: "));
const lado2 = parseFloat(prompt("Digite o comprimento do segundo segmento: "));
const lado3 = parseFloat(prompt("Digite o comprimento do terceiro segmento: "));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  console.log("É possível formar um triângulo com esses segmentos.");
} else {
  console.log("Não é possível formar um triângulo com esses segmentos.");
}