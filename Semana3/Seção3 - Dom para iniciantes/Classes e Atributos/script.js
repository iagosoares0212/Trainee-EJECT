// CLASSLIST

// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

menu.className += ' vermelho'

// ATTRIBUTES

// Retorna uma array-like com os atributos do elemento.

const animais = document.querySelector('.animais');

// console.log(animais.attributes); // retorna todos os atributos
// console.log(animais.attributes[1]); // retorna o primeiro atributo

// GETATTRIBUTE E SETATTRIBUTE

// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.hasAttributes(); // true / false se tem algum atributo

// É muito comum métodos de get e set;

// READ ONLY VS WRITABLE

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector('.animais');

animais1.className; // string com o nome das classes
animais1.className = 'azul'; // substitui completamente a string
animais1.className += ' vermelho'; // adiciona vermelho à string

animais1.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// EXERCÍCIO

// 1) Adicione a classe ativo a todos os itens do menu
const ItensMenu = document.querySelectorAll('.menu a')
ItensMenu.forEach((item) => {
    item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ItensMenu.forEach((item,i) => {
    if (i !== 0){
        item.classList.remove('ativo');
    }
});

// Verifique se as imagens possuem o atributo alt
imagens = document.querySelectorAll('img');
imagens.forEach((item) => {
    // console.log(item.hasAttribute('alt'));
})

// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https://"]');
linkExterno.setAttribute('href','https://www.youtube.com/')


