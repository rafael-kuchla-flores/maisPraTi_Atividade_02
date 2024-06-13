const prompt = require('prompt-sync')()


function pesquisaPrefeitura() {
  let pessoas = [];
  let continuar = true;

  while (continuar) {
    let salario = parseFloat(prompt("Informe o salário da pessoa (R$): "));
    let filhos = parseInt(prompt("Informe o número de filhos da pessoa: "));

    pessoas.push({ salario, filhos });

    continuar = confirm("Deseja adicionar outra pessoa?");
  }

  let somaSalarios = pessoas.reduce((acc, pessoa) => acc + pessoa.salario, 0);
  let mediaSalarios = somaSalarios / pessoas.length;

  let somaFilhos = pessoas.reduce((acc, pessoa) => acc + pessoa.filhos, 0);
  let mediaFilhos = somaFilhos / pessoas.length;

  let maiorSalario = Math.max(...pessoas.map(pessoa => pessoa.salario));

  let pessoasBaixoSalario = pessoas.filter(pessoa => pessoa.salario <= 350);
  let percentualBaixoSalario = (pessoasBaixoSalario.length / pessoas.length) * 100;

  console.log(`Média de salário da população: R$ ${mediaSalarios.toFixed(2)}`);
  console.log(`Média do número de filhos: ${mediaFilhos.toFixed(2)}`);
  console.log(`Maior salário: R$ ${maiorSalario.toFixed(2)}`);
  console.log(`Percentual de pessoas com salário até R$ 350,00: ${percentualBaixoSalario.toFixed(2)}%`);
}

pesquisaPrefeitura();