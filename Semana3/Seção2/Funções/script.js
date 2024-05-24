// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser 
//passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parênteses () executam uma função

// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

// PARÊNTESES EXECUTA A FUNÇÃO

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

// addEventListener('click', function() {
//   console.log('Clicou');
// });

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

function mostraConsole () {
  console.log('Oi')
};

// addEventListener('click', mostraConsole) 

// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// imc2(80, 1.80); retorna o imc
// console.log(imc2(80, 1.80));  retorna o imc e undefined

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

// console.log(terceiraIdade('2'))

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
// console.log(totalPaises);  erro, totalPaises não definido

// console.log(precisoVisitar(50))

// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

// console.log(dados());  Retorna 'André, 29, Rio de Janeiro, Designer'
// outrosDados(); // retorna um erro

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

// imc3(80, 1.80);  imc aparece no console

function imc3(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

/* 

~EXERCÍCIO~

// Crie uma função para verificar se um valor é Truthy

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

// Crie uma função que verifica se um número é par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);

*/

//Questão 1)
function verificaTruthy(x) {
  if (!!x === true){
    return `${x} é um valor Truthy`;
  }
  else{
    return `${x} não é um valor Truthy`;
  }
}

//Questão 2)
function retornaPerimetro(lado) {
  return (lado+lado+lado+lado)
  //return (lado*4)
}

//Questão 3) ???
function retornaNomecompleto(nome, sobrenome) {
  return  `${nome} ${sobrenome}`;  
}

//Questão 4)
function ehPar(x){
  if (x % 2 === 0){
    return 'Eh par';
  } else{
    return 'Não eh par';
  }
}

//Questão 5)
function retornatipo(x){
  return typeof x
}

//questão 6)
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

 addEventListener('scroll', function retornaNomecompleto() {
   return console.log(retornaNomecompleto('iago', 'santos'))
});