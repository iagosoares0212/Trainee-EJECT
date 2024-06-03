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

// GETBOUNDINGCLIENTRECT()

const section2 = document.querySelector('.animais');

const rect = section2.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento 
rect.top; // distância entre o topo do elemento e o scroll

// WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

// MATCHMEDIA();

// Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

// if(small.matches) {
//   console.log('Tela menor que 600px')
// } else {
//   console.log('Tela maior que 600px')
// }

// DICA
// Selecione o elemento no inspetor (dom)

// Abra o console e digite $0 para selecionar o mesmo

// Os elementos selecionados anteriormente são $1, $2 ...


// EXERCÍCIO

// 1) Verifique a distância da primeira imagem
// em relação ao topo da página
    const primeiraImg = document.querySelector('img')
    const rect1 = primeiraImg.getBoundingClientRect()
    const dTop = rect1.top
// Retorne a soma da largura de todas as imagens
    const imagens = document.querySelectorAll('img')
    let soma = 0;
    imagens.forEach((item) => {
        soma += item.getBoundingClientRect().width;
    });
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
    const links = document.querySelectorAll('a')
    links.forEach((item) => {
        if(item.getBoundingClientRect().width <= 48 && item.getBoundingClientRect().height <= 48){
            // console.log('está dentro do recomendado')
        } else {
            // console.log('Não está dentro do recomendado')
        }
    });

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
    const tela = window.matchMedia('(max-width: 720px)');
    const menu = document.querySelector('.menu');
    if(tela.matches){
        menu.classList.add('menu-mobile')
    } else {

    }






