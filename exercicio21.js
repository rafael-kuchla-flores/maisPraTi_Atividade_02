const prompt = require('prompt-sync')()


function calcularPesoIdeal() {
  var altura = parseFloat(prompt("Digite a altura (em metros): "));
  var sexo = prompt("Digite o sexo (M para masculino ou F para feminino): ").toUpperCase();

  if (sexo === "M") {
    var pesoIdeal = 72.7 * altura - 58;
  } else if (sexo === "F") {
    var pesoIdeal = 62.1 * altura - 44.7;
  } else {
    console.log("Sexo inválido. Por favor, digite M para masculino ou F para feminino.");
    return;
  }

  console.log("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
}

calcularPesoIdeal();