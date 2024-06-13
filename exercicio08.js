const prompt = require('prompt-sync')()

function calcularPontos(horas) {
  if (horas <= 10) {
      return horas * 2;
  } else if (horas <= 20) {
      return horas * 5;
  } else {
      return horas * 10;
  }
}

function calcularDinheiro(pontos) {
  const valorPorPonto = 0.05; 
  return pontos * valorPorPonto;
}

const horasAtividade = 20

const pontos = calcularPontos(horasAtividade);
const dinheiro = calcularDinheiro(pontos);

console.log(`Horas de atividade: ${horasAtividade}`);
console.log(`Pontos ganhos: ${pontos}`);
console.log(`Dinheiro ganho: R$ ${dinheiro.toFixed(2)}`);
