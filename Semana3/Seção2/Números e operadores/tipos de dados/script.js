// Numeros

var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
console.log(idade)

// Operadores Aritméticos

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// OPERADORES ARITMÉTICOS (STRINGS)

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// NAN = NOT A NUMBER

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)

// A ORDEM IMPORTA

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// (Parênteses para priorizar uma expressão)

// OPERADORES ARITMÉTICOS UNÁRIOS

var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// Mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS

// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

/* EXERCÍCIO

// 1) Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// 2) Crie duas expressões que retornem NaN

// 3) Somar a string '200' com o número 50 e retornar 250

// 4) Incremente o número 5 e retorne o seu valor incrementado

// 5) Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
*/

// 1) Resposta:
var total = 35;

// 2) Resposta:
var p = +'Meu35';
var b = -'20g' + 2;
console.log(p, b);

// 3) Resposta:
var s = '200';
var a = 50;
console.log(+s + a);

// 4) Resposta:
var n = 5;
console.log(++n)

// 5) Resposta:
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; 
console.log(peso);

