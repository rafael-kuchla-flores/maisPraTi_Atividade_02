const prompt = require('prompt-sync')()


let vetor = [];

for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
}

let pares = [];

for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] % 2 === 0) {
    pares.push({ numero: vetor[i], posicao: i });
  }
}

if (pares.length > 0) {
  console.log("|")
  console.log("Os números pares digitados são:");
  console.log("|")
  pares.forEach((par) => {
    console.log(`Número ${par.numero} está na posição ${par.posicao}`);
  });
} else {
  console.log("Nenhum número par foi digitado.");
}