// OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

// pessoa.nome;  'André'
// pessoa.possuiFaculdade;  true

// Propriedades e métodos consistem em nome (chave) e valor

// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//MÉTODOS
// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
// console.log(pi);  3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// CRIAR UM OBJETO
// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

// console.log(typeof carro);  'object'

// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

// menu.backgroundColor = '#000';
// console.log(menu.backgroundColor);  '#000'

// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

//Exercícios

// 1)Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados = {
  nome: 'Iago',
  sobrenome: 'Soares',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dados.nomeCompleto = function(){
  return this.nome + " " + this.sobrenome
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorrin = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  late() {
    r = prompt('O cachorro viu o homem ?')
    if (r === 'sim'){
      return 'O cachorro late'
    } else {
      return 'O Cachorro não late'
    }
  },
}

// correção

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem'){
      return 'Latir'
    } else {
      return 'Nada'
    }
  },
}

// TUDO É OBJETO

// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

var nome = 'André';

 nome.length; // 5
 nome.charAt(1); // 'n'
 nome.replace('ré', 'rei'); // 'Andrei'
 nome; // 'André'

// Uma string herda propriedades e métodos do construtor String()

// NÚMEROS

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

// FUNÇÕES

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1 - quantidade de argumentos da função

// ELEMENTOS DO DOM

var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})

// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.

// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO

// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.

// nomeie 3 propriedades ou métodos de strings
var nome = 'Iago';
// nome.charAt
// nome.charCodeAt
// nome.codePointAt

// nomeie 5 propriedades ou métodos de elementos do DOM

var btn = document.querySelector('.btn');
// btn.addEventListener
// btn.appendChild
// btn.animate
// btn.checkVisibility
// btn.id

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


