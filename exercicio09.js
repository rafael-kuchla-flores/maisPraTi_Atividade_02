const prompt = require('prompt-sync')()

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

function lerDadosFuncionario() {
    const salario = parseFloat(prompt("Digite o salário do funcionário:"));
    const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino):");

    if (sexo.toUpperCase() === "M") {
        totalSalarioHomens += salario;
    } else if (sexo.toUpperCase() === "F") {
        totalSalarioMulheres += salario;
    } else {
        console.log("Sexo inválido. Digite M para masculino ou F para feminino.");
    }
}

while (true) {
    lerDadosFuncionario();
    const continuar = prompt("Deseja continuar? (S para sim, N para não):");
    if (continuar.toUpperCase() !== "S") {
        break;
    }
}


console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
