/**
APRENDENDO SOBRE IMPAR OU PAR.
operador: % 
(para saber se é impar ou par)
faz o resto por 2. Se o resto for 0, é par. Se for 0 é impar.
*/

let numero = 25

if(numero % 2 == 0) {
    console.log(`${numero} é par.`)
} else {
    console.log(`${numero} é ímpar.`)
}


/**
COMANDO TYPEOF
(serve para mostrar se o tipo do valor é number ou string.)
 */
let valor = "1" // ESTA ENTRE ASPAS

let tipoDoValor = typeof(valor)

console.log(`${valor} é do tipo ${tipoDoValor}.`)

let valor1 = 1 == 1 // true ou false 

let tipoDoValor1 = typeof(valor1)

console.log(`${valor1} é do tipo ${tipoDoValor1}.`)

let valor2 = 1 // Sem aspas, é um number

let tipoDoValor2 = typeof(valor2) // tipo da variavel valor2

console.log(`${valor2} é do tipo ${tipoDoValor2}.`)