const prompt = require('prompt-sync')()

var numeroSorteado = Math.floor(Math.random() * 5) + 1;

var palpite;

var jogarNovamente = true;

while (jogarNovamente) {
  palpite = parseInt(prompt("Tente adivinhar o número sorteado (entre 1 e 5): "));

  if (palpite === numeroSorteado) {
    console.log("Parabéns! Você acertou o número sorteado.");
    var resposta = prompt("Deseja jogar novamente? (s/n)");
    if (resposta.toLowerCase() === 's') {
      numeroSorteado = Math.floor(Math.random() * 5) + 1;
    } else {
      jogarNovamente = false;
    }
  } else {
    console.log("Erro! O número sorteado era " + numeroSorteado + ". Tente novamente.");
  }
}