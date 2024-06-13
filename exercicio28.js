function criarMatriz() {
  const tamanhoLinha = 10;
  const tamanhoColuna = 10;

  let matrizResultante = new Array(tamanhoLinha);

  for (let linha = 0; linha < tamanhoLinha; linha++) {
      matrizResultante[linha] = new Array(tamanhoColuna);
      for (let coluna = 0; coluna < tamanhoColuna; coluna++) {
          matrizResultante[linha][coluna] = (linha + 1) * (coluna + 1);
      }
  }

  console.log(`\nMatriz criada:`);
  matrizResultante.forEach((linha) => {
      console.log(linha.join(' '));
  });

  let somaSuperior = 0;
  let somaInferior = 0;

  for (let linha = 0; linha < tamanhoLinha; linha++) {
      for (let coluna = 0; coluna < tamanhoColuna; coluna++) {
          if (coluna > linha) {
              somaSuperior += matrizResultante[linha][coluna];
          } else if (coluna < linha) {
              somaInferior += matrizResultante[linha][coluna];
          }
      }
  }

  console.log(`Soma dos elementos acima da diagonal principal: ${somaSuperior}`);
  console.log(`Soma dos elementos abaixo da diagonal principal: ${somaInferior}`);
}

criarMatriz();