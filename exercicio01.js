const prompt = require('prompt-sync')()

//10 minutos de vida por cigarro
function calculoExpectativaDeVida(){
let cigarrosPorDia = parseFloat(prompt('Quantos cigarros você fuma por dia? '))
let anosFumando = parseFloat(prompt('Há quantos anos você fuma? '))

if(cigarrosPorDia == 0 && anosFumando >= 0){
  console.log("Parabéns, seu pulmão está saudável")
} else if(!isNaN(cigarrosPorDia) && !isNaN(anosFumando)){
  let totalDeCigarros = cigarrosPorDia * 365 * anosFumando;
  let minutosPorDia = totalDeCigarros * 10;
  let diasPerdidos = minutosPorDia / 1440;
  
  let resultado = diasPerdidos.toFixed(2);
  console.log(`Você perdeu aproximandamente ${resultado} dias de vida, devido a ser fumante`)
  } else{
    console.log("Você pode ter digitado errado")
  }
}

calculoExpectativaDeVida();
