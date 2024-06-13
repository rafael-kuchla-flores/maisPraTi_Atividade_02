const prompt = require('prompt-sync')()

function progressaoAritmetica() {
  let primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA: "));
  let razao = parseInt(prompt("Digite a razão da PA: "));

  let pa = [];
  let soma = 0;

  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razao;
    pa.push(termo);
    soma += termo;
  }

  console.log("Os 10 primeiros elementos da PA são: " + pa);
  console.log("A soma entre todos os valores da sequência é: " + soma);
}

progressaoAritmetica();