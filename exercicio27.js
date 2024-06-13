const prompt = require('prompt-sync')();

function criarMatriz() { 
  const tamanho = 6; let matriz = Array(tamanho).fill(0).map(() => Array(tamanho).fill(0));

  for(let i = 0; i < tamanho; i++){
    for(let j = 0; j < tamanho; j++){
        matriz[i][j] = (i + 1) * (j + 1);
    }
}
console.log(`Matriz original:`);
console.log(matriz.map(row => row.join(' ')).join('\n'));

const fatorMultiplicacao = parseFloat(prompt("\nInsira o valor para multiplicar a matriz: "));
const matrizModificada = matriz.flat().map(x => x * fatorMultiplicacao);

console.log(`Matriz modificada:`);
console.log(matrizModificada);  

}

criarMatriz();