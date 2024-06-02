// ALTURA E LARGURA

// Estas são propriedades e métodos dos objetos Elemente HTMLElement, a maioria delas são Read Only

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

// Mesma coisa para o Width, clientWidth...

listaAnimais = document.querySelector('.animais-lista');

height = listaAnimais.scrollHeight

// OFFSETTOP E OFFSETLEFT

const section1 = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section1.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section1.offsetLeft;

const animaisTop = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector('h2');
const h2left = primeiroh2.offsetLeft

GETBOUNDINGCLIENTRECT()





