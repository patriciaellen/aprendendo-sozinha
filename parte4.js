/** ESTRUTURA DE REPETIÇÃO 
Aprendendo a Iterar: Iterar é repetir um conjunto de comandos de um código.

Exemplos: 
JOGO DE LUTA: *ENQUANTO* o adversario estiver "vivo", vou bater nele 

FAZENDO UM OVO MEXIDO : *ENQUANTO* o ovo não estiver misturado e pronto, vou mexer ele. 

UM CAVALO COMENDO: *ENQUANTO* ainda estiver com fome, vou continuar comendo.

*Enquanto* (condição) se for verdade repete o comando, não é verdade pula esses comandos.. 

Para essa repetição usamos o comando WHILE
*/

let numeroInicial = 1 // declara a variavel e o valor 
let numeroFinal = 15

while(numeroInicial <= numeroFinal){
    console.log(numeroInicial)
    numeroInicial = numeroInicial + 1 // aqui trocamos o valor da variavel por: VALOR DA VARIAVEL + 1 
}
    console.log("Acabou!")

/** 
ENQUANTO 1 FOR MENOR OU IGUAL A 15
o comando ira funcionar enquanto for 1 ou igual a 15. 

mostra na tela 1
1 = 1 + 1 (vai resolver) da seguinte forma: 1 = 2 (retorna)

enquanto 2 for menor  ou igual a 15
mostra na tela 2
2 = 2 + 1  (o valor do numero inicial vai ser agora 3 e assim sucessivamente até  chegar no 16.) Como nosso numeroFinal é 15, o looping termina e o codigo continua a ser executado. Mostrando em tela ACABOU!

Tudo que estiver dentro das chaves, ENQUANTO for verdade vai repetir.
*/

// Exibindo numero de 1 a 10

let contador = 1

while (contador <= 10){
    console.log(contador) 
    contador = contador + 1
}

/* NOVAMENTE: CONTADOR TEM VALOR 1 
ENQUANTO 1 FOR MENOR OU IGUAL A 10 O COMPUTADOR VAI IMPRIMIR 1 
1 É IGUAL A 1+1 

CONTADOR AGORA TEM O VALOR 2
ENQUANTO 2 FOR MENOR OU IGUAL A 10 O COMPUTADOR VAI IMPRIMIR 2 
2 É IGUAL A 2+1 = 3 E ASSIM SUCESSIVAMENTE */

let i = 1 // o I é usado como contador
let n = 5

while (i <= n){
    console.log(i) 
    i++ // ++ equivale a fazer i = i + i ou seja somando uma uniade ao valor de i. (igual no exemplo anterior)
}