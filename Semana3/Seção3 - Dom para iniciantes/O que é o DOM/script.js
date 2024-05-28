// DOCUMENT OBJECT MODEL (DOM)

// É uma interface que representa documentos HTML e XML através de objetos. Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

// Ao inspecionar elemento com o Chrome, você está vendo a representação oficial do DOM.

const href = window.location.href

console.log(href)

if (href === "http://127.0.0.1:5500/Semana3/Se%C3%A7%C3%A3o3%20-%20Dom%20para%20iniciantes/O%20que%20%C3%A9%20o%20DOM/index.html"){
    console.log('isso mesmo')
}

// WINDOW E DOCUMENT

// São os objetos principais do DOM, boa parte da manipulação é feita através dos seus métodos e propriedades.

// window.alert('Isso é um alerta');
// alert('Isso é um alerta'); Funciona

const h1Selecionado = document.querySelector('h1');  //Seleciona o primeiro h1
const h1Classes = h1Selecionado.classList
document.body;  //Retorna o body

// window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.

// NODE

// Toda tag html é representada pelo objeto Element e por isso herda os seus métodos e propriedades. Element é um tipo de objeto Node.

const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto;
titulo.classList; // retorna as classes;
titulo.id; // retorna o id;
titulo.offsetHeight; // retorna a altura do elemento;

// titulo.addEventListener('click', callback);
// ativa a função callback ao click no titulo

function callbackh1() {
    console.log('Clicou em: ', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1)

// EXERCÍCIO

// 1) Retorne o url da página atual utilizando o objeto window
console.log(location.href)

// 2) Seleciona o primeiro elemento da página que
// possua a classe ativo
console.log(document.querySelector('.ativo'))

// 3) Retorne a linguagem do navegador
console.log(navigator.language)
// Retorne a largura da janela 
console.log(innerWidth)








