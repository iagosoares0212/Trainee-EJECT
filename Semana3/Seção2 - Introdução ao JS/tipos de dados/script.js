// 7 tipos de dados

var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

var nome = 'André';
console.log(typeof nome);
// retorna string

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log(frase);
console.log(typeof frase);

var frase1 = 'JavaScript é "super" fácil'; //valido
var frase2 = "JavaScript é 'super' fácil"; //valido
var frase3 = "JavaScript é \"super\" fácil";  //valido
var frase4 = `JavaScript é "super" fácil"`;  //valido
// var frase5 = "JavaScript é "super" fácil" - Inválido
console.log(frase1 + '\n' + frase2 + '\n' + frase3 + '\n' + frase4);

console.log('isso mesmo')

//Template String
var g = 1000;
var f1 = 'Romário fez ' + g*2 + ' gols';
var f2 = `Romário fez ${g/2} gols`;
console.log(f1 + '\n' + f2);

// para fazer o simbolo da crase basta apertar (shift + crase + espaço)



/*
Exercício

1)Declare uma variável contendo uma string

2)Declare uma variável contendo um número dentro de uma string

3_Declare uma variável com a sua idade

4)Declare duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas

5)Coloque a seguinte frase em uma variável: It's time

6)Verifique o tipo da variável que contém o seu nome

*/

var s = 'olá';
var s1 = '19';
var i = 23;
var n = 'Iago';
var surname = 'Alexandre';
var nameSurname = n + ' '+ surname;
console.log(s + '\n' + s1 + '\n' + i + '\n' + n + '\n' + surname + '\n' + nameSurname)
s = "It's time"
console.log(s)
console.log(typeof n)











