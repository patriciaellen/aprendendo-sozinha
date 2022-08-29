// Parte 2 - Aprendendo sobre IF e ELSE

// if (significa SE) sim
// else (significa SE NÃO)

// COMANDOS CONDICIONAIS
//            EXPRESSÃO RELACIONAL
// == (significa comparação)
// != (significa diferença)
// <= (significa menor ou igual)
// >= (significa maior ou igual)
// < (significa menor)
// > (significa maior)
// {as chaves significam blocos}
// === (comando que verifica tudo, se é string ou number)
//////////// ATENÇÃO SOBRE: === //////////
// === ex: 1 = "1"
/**  1 é number, "1" é string (entao quando for verificar vai ser false pois foram declarados de modos diferentes.)
*/

let idade = 27

if(idade == 26) {
    console.log("idade igual a 26")
} else {
    console.log("idade não é igual a 26")
}

let idadeJogo = 18 

if(idadeJogo >= 18) { // supondo que é um jogo, se a idade for MAIOR OU IGUAL A 18 A PESSOA PODE JOGAR.
    console.log("Pode jogar")
} else {
    console.log("Acesso negado")
}

/** lembrando: BOOLEANS (PODEM SER TRUE OU FALSE) o valor de true é 1 e de false é 2.
true valor 1
false valor 0 
*/ 

let minhacaixa = 1 < 3 // LEMBRANDO UMA EXPRESSAO SEMPRE VAI TER UM RESULTADO
console.log(minhacaixa)

let minhacaixa1 = 1 > 3 // 1 não é maior que 3
console.log(minhacaixa1) 

let minhacaixa2 = 1 == 3 // 1 não é igual a 3
console.log(minhacaixa2)

/**
Observando de outro modo: 
 */
 let nome = "João"
 let idade1 = 10
// considerando aqui que é maior ou igual a 18 anos.
 if(idade1 <= 18) {
    console.log(nome + " pode jogar.")
} else {
    console.log("acesso negado")
}
/**   Considerando aqui que é menor ou igual a 18 anos. 
Usando TEMPLATE STRINGS
para usar precisa usar a crase `${}`
*/
if(idade1 >= 18) {
    console.log(`${nome} pode entrar na página. Você tem ${idade1} anos de idade`)
} else {
    console.log(`${nome} acesso negado.Você tem ${idade1} anos de idade`)
}