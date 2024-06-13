const prompt = require('prompt-sync')()


function getRandomInt() {
  return Math.floor(Math.random() * 3);
}


function getChoice(num) {
  switch (num) {
    case 0:
      return "pedra";
    case 1:
      return "papel";
    case 2:
      return "tesoura";
  }
}


function playGame() {
 
  const computerChoice = getChoice(getRandomInt());

  const userChoice = prompt("Escolha Pedra, Papel ou Tesoura: ").toLowerCase();

  if (userChoice!== "pedra" && userChoice!== "papel" && userChoice!== "tesoura") {
    console.log("Escolha inválida. Tente novamente!");
    return;
  }

  console.log(`Você escolheu: ${userChoice}`);
  console.log(`Computador escolheu: ${computerChoice}`);

  if (userChoice === computerChoice) {
    console.log("Empate!");
  } else if (
    (userChoice === "pedra" && computerChoice === "tesoura") ||
    (userChoice === "papel" && computerChoice === "pedra") ||
    (userChoice === "tesoura" && computerChoice === "papel")
  ) {
    console.log("Você ganhou!");
  } else {
    console.log("Computador ganhou!");
  }
}

playGame();
