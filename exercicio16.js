let vetor = [];

for(let i = 0; i < 20; i++) {
    vetor[i] = Math.floor(Math.random() * 100);
}

console.log("Números gerados: " + vetor.join(", "));

vetor.sort((a, b) => a - b);

console.log("Valores ordenados: " + vetor.join(", "));