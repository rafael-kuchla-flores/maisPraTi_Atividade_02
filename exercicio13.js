let fibonacci = [];

for (let i = 0; i < 15; i++) {
  if (i <= 1) {
    fibonacci.push(i);
  } else {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
}

console.log(fibonacci);