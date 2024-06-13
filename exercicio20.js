let funcionarios = [];
for (let i = 0; i < 80; i++) {
  let salarioBruto = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
  funcionarios.push({
    matricula: i + 1,
    nome: "Rafael",
    salarioBruto: salarioBruto
  });
}

funcionarios.forEach(funcionario => {
  let deducaoINSS = funcionario.salarioBruto * 0.12;
  let salarioLiquido = funcionario.salarioBruto - deducaoINSS;

  console.log(`Matrícula: ${funcionario.matricula}`);
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
  console.log("-------------------------------");
});