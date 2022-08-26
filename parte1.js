// Comentário no código (as // significam um comentário)
// Não são executados pelo computados 
// Só os humanos veem o computador não ler.

/** esse comando serve pra escrever um texto maior precisar usar várias barrinhas. */ 

/** 

COMANDOS TERMINAL 
pwd (mostra onde está em que lugar do computador)
ls (lista tudo que tem dentro de uma pasta)
cd (localiza e vai, muda de diretorio)
cd ~ (volta pro inicio) 
mkdir (criar uma pasta/diretório)
touch (criar um arquivo)
cat (mostra todo conteudo de um arquivo)
head (mostra o que está no arquivo)
grep (pesquisa conteudos no arquivo)


COMANDOS GIT
git config --global user.name "Seu nome aqui" (como mando de identificação, o nome DEVE está entre aspas.)
git config --global user.email seuemail@aqui.br (esses comandos servem para identificação.)
git config --list  (serve para ver se a identificação deu certo.)
git clone link_do_repositório_que_você_criou (para clonar o repositório)
git status (mostra as modificações, o status)
git add . (adiciona os arquivos que foram criado/modificados)
git commit -m "nome do commit" (serve para commitar a modificação)
git log (mostra todos os commits que foram feitos) (para sair do git log precione a tecla q)
git push (salva do computador pro site)
git pull (salva do site pro computador)


DECLARAÇÃO DE VARIAVEL E VALOR
let é usado para abrir a caixinha, criar a variavel 
valor vem depois da variavel ex: let nomedavariavel = valordavariavel 
- o valor da variavel pode ser um texto e/ou um numero. 
lembre que todo TEXTO de estar entre aspas ex "aqui é um texto"

let patricia = 12 (patricia é o nome da variavel e o valor dela é 12)
let pati = 15 
*/
let patricia 
let pati  
let meuNome = "Patricia" // SE FOR TEXTO TEM QUE TER ASPAS

patricia = 12 // todo texto deve ter aspas entao se for um nome coloca aspas
pati = 15
// patricia é o valor da variavel
// console log vai executar a minha variavel
console.log(patricia) // não pode colocas aspas
console.log(pati) // em programação tudo com aspas é TEXTO
console.log("Meu nome é")
console.log(meuNome)

let testevariavel = "Ésse é um teste de variavel"
console.log(testevariavel)
let testevariavel2 = "Aqui já temos um segundo teste"
console.log(testevariavel2)
let ano = 1995 // é um numero NAO precisa de aspas
console.log("o ano que nasci é")
console.log(ano)

/**
OPERAÇÕES MATEMATICAS 
+ (soma) - (subtração) * (multiplicação) / (divisão)

*/
let numero1 = 1000
let numero2 = 500
console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1*numero2)
console.log(numero1/numero2)

let numero3 = 5 + 5 // Isso também pode ser feito
let numero4 = 2
console.log(numero3 + numero4)