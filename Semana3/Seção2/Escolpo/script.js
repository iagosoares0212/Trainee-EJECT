// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro);  Erro, carro is not defined

// Escopo evita o conflito entre nomes.

// VARIÁVEL GLOBAL (ERRO)

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

function mostrarCarro() {
  carro = 'Fusca'; //não fazer isso
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca

// 'use strict' impede isso.

// ESCOPO DE FUNÇÃO (PAI)

// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca

// ESCOPO DE BLOCO

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro
