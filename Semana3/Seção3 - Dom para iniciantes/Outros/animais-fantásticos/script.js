// ID

// getElementById seleciona e retorna elementos do DOM

// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

// CLASSE E TAG

// getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM. A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada.

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
// const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
// console.log(gridSection[0]);

// SELETOR GERAL ÚNICO

// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.

const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const primeiraLi = primeiroUl.querySelector('li');

const linkInterno = document.querySelector('[href^="#"]');

// SELETOR GERAL LISTA

// querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais img');

// Diferente do getElementsByClassName, a lista aqui é estática

// HTMLCOLLECTION VS NODELIST

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

// console.log(gridSectionHTML);  // 4 itens
// console.log(gridSectionNode);  // 3 itens

// ARRAY-LIKE

// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
//   console.log(gridItem)
//   console.log(index) // index do item na array
//   console.log(array) // a array completa
});

// É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
    // console.log(item)
});

// EXERCÍCIOS

// 1) Retorne no console todas as imagens do site
    const imagens = document.querySelectorAll('img');
    // console.log(imagens)

// 2) Retorne no console apenas as imagens que começaram com a palavra imagem
    const imagensAnimais = document.querySelectorAll('img[src^="./assets/imagem"]')
    // console.log(imagensAnimais)

// 3) Selecione todos os links internos (onde o href começa com #)
    const linksInternos = document.querySelectorAll('[href^="#"]');

// 4) Selecione o primeiro h2 dentro de .animais-descricao
    const h2Animais = document.querySelector('.animais-descricao h2');

// 5) Selecione o último p do site
    const paragrafos = document.querySelectorAll('p');
    ultimoP = paragrafos[paragrafos.length-1]

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












