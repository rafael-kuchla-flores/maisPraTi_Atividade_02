const prompt = require('prompt-sync')()


let soma = 0;
let menorValor = Infinity;
let quantidadePares = 0;
let valores = [];

do {
  let numero = parseFloat(prompt("Digite um número: "));
  

  if (!isNaN(numero)) {

    valores.push(numero);
  
    soma += numero;

    if (numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        quantidadePares++;
    }

  
    const continuar = prompt("Deseja continuar? (S/N)").toUpperCase();
    if (continuar !== "S") {
        break;
    }
} else {
    console.log("Número inválido. Digite um valor numérico.");
}
} while (true);

let media = soma / valores.length;

console.log(`Somatório: ${soma}`);
console.log(`Menor valor: ${menorValor}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de pares: ${quantidadePares}`);
