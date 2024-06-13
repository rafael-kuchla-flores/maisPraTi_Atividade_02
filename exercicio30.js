function criarMatriz(tamanho) {
    const matriz = Array(tamanho).fill(0).map(() => Array(tamanho).fill(0));
  
    for (let i = 0; i < tamanho; i++) {
      for (let j = 0; j < tamanho; j++) {
        matriz[i][j] = (i + 1) * (j + 1);
      }
    }
  
    console.log(`\nMatriz ${tamanho}x${tamanho}: \n`);
    matriz.forEach(row => console.log(row.join(' ')));
  
    const somaLinhas = matriz.map(row => row.reduce((a, b) => a + b, 0));
    const somaColunas = matriz[0].map((_, i) => matriz.reduce((a, row) => a + row[i], 0));
  
    console.log(`Soma de linhas: ${somaLinhas}`);
    console.log(`Soma de colunas: ${somaColunas}`);
  }
  
  criarMatriz(5);