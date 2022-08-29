// CRIANDO UMA TABUADA: 

let multiplicador = 5
let numero = 10
let contador = 1

while (contador <= numero){
    let resultado = multiplicador * contador 
    let valor = `${multiplicador} X ${contador} = ${resultado}`
    console.log(valor)
    contador = contador + 1
}

/* O QUE EU FIZ AQUI?
variavel multiplicador com valor 5
variavel numero com valor 10 
variavel contador com valor 1 

enquanto 1 for menor ou igual a 10 
variavel resultado com valor 5 * 1 
variavel valor com string 5 x 1 = ao resultado da variavel resultado (5*1) 

vai imprimir na tela o resultado da variavel VALOR 
ou seja:  5 x 1 = 5

contador = contador + 1 
ou seja: 1 = 1 + 1 
variavel contador agora tem o valor 2 (PQ? foi somado 1+1)
então retornará ao começo do while (looping) 
nesse momento o valor da variavel CONTADOR é 2 

e assim acontecera até chegar ao 10. */

// AGORA SOZINHA CRIE UMA TABUADA DE DIVISÃO: 

let numeroDivisao = 10 // numero que será dividido
let numeroTabuada= 10 // numero ATÉ qual será dividido
let contador1 = 1 

while (contador1 <= numeroTabuada){
    let resposta = numeroDivisao / contador1
    let resultado1 = `${numeroDivisao} / ${contador1} = ${resposta}`
    console.log(resultado1)
    contador1 = contador1 + 1
}