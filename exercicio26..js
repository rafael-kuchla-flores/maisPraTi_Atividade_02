function produtoMatrizes() {
  const tamanhoMatrizA = { linhas: 3, colunas: 5 };
  const tamanhoMatrizB = { linhas: 3, colunas: 5 };

  let matrizA = criarMatriz(tamanhoMatrizA);
  let matrizB = criarMatriz(tamanhoMatrizB);

  function criarMatriz(tamanho) {
    let matriz = [];
    for (let i = 0; i < tamanho.linhas; i++) {
      matriz[i] = [];
      for (let j = 0; j < tamanho.colunas; j++) {
        matriz[i][j] = (i + 1) * (j + 1);
      }
    }
    return matriz;
  }

  for (let i = 0; i < tamanhoMatrizA.linhas; i++) {
    let produtoLinha = "";
    for (let j = 0; j < tamanhoMatrizA.colunas; j++) {
      produtoLinha += matrizA[i][j] * matrizB[i][j] + " ";
    }
    console.log(produtoLinha);
  }
}

produtoMatrizes();
