// FOREACH

// Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
//   console.log(item);
});

// PARÂMETROS DO FOREACH

// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(valorAtual, index, array){
//   console.log(valorAtual); // o item atual no loop
//   console.log(index); // o número do index
//   console.log(array); // a Array completa
});

// FOREACH E ARRAY

// forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

const titulos1 = document.getElementsByClassName('titulo');
const titulos1Array = Array.from(titulos1);

titulos1Array.forEach(function(item){
//   console.log(item);
});

// ARROW FUNCTION

// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item, index) => {
//   console.log(item, index);
});

// PARÂMETROS E PARÊNTESES

const imgs3 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs3.forEach(item => {
//   console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs3.forEach((item, index) => {
//   console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs3.forEach(() => {
//   console.log(i++);
});

// RETURN

// É possível omitir as chaves {} para uma função que retorna uma linha.

const imgs4 = document.querySelectorAll('img');

// imgs4.forEach(item => 
//   console.log(item)
// );

// imgs4.forEach(item => console.log(item));

// É melhor utilizar os parênteses

// Não é permitido fechar a linha com ;


// EXERCÍCIOS

// 1) Mostre no console cada parágrado do site

const paragrafos1 = document.querySelectorAll('p');
// paragrafos1.forEach((item) => console.log(item));

// 2) Mostre o texto dos parágrafos no console
// paragrafos1.forEach(item => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs5 = document.querySelectorAll('img');

// imgs5.forEach((item, index) => {
//   console.log(item, index);
// });

// let j = 0;
// imgs5.forEach(() => {
//   console.log(j++)
// });

let k = 0
// imgs5.forEach(() => console.log(k++));












