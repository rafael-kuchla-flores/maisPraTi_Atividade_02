function criarMatriz(tamanho) {
  const matriz = new Array(tamanho);

  for (let i = 0; i < tamanho; i++) {
    matriz[i] = new Array(tamanho);
    for (let j = 0; j < tamanho; j++) {
      matriz[i][j] = (i + 1) * (j + 1);
    }
  }

  return matriz;
}

function imprimirMatriz(matriz) {
  console.log("\nMatriz:");
  for (let i = 0; i < matriz.length; i++) {
    let linha = "";
    for (let j = 0; j < matriz.length; j++) {
      linha += matriz[i][j] + " ";
    }
    console.log(linha);
  }
}

function calcularSomaLinha(matriz, linha) {
  let soma = 0;
  for (let j = 0; j < matriz.length; j++) {
    soma += matriz[linha][j];
  }
  return soma;
}

function calcularSomaColuna(matriz, coluna) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][coluna];
  }
  return soma;
}

function calcularSomaDiagonalPrincipal(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

function calcularSomaMatriz(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

const tamanhoMatriz = 5;
const matriz = criarMatriz(tamanhoMatriz);

imprimirMatriz(matriz);

console.log(`\nSoma da linha 4: ${calcularSomaLinha(matriz, 3)}`);
console.log(`\nSoma da coluna 2: ${calcularSomaColuna(matriz, 1)}`);
console.log(`\nSoma da diagonal principal: ${calcularSomaDiagonalPrincipal(matriz)}`);
console.log(`\nSoma da matriz: ${calcularSomaMatriz(matriz)}`);