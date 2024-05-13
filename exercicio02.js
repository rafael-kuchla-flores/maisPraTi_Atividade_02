const prompt = require('prompt-sync')()


let velocidadeCarro = parseFloat(prompt('Qual foi a velocidade do carro? : '))

  
if ( velocidadeCarro > 80){
  excesso = velocidadeCarro - 80
  valorMulta = excesso * 5

  console.log(`Você foi multado em R$ ${valorMulta} por excesso de velocidade`)
} else{
  console.log("Você não ultrapassou a velocidade permitida")
}