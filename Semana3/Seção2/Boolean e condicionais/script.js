// BOOLEAN
// Existem dois valores booleanos false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;


// CONDICIONAIS IF E ELSE
// Verificar se uma expressão é verdadeira com if, caso contrário o else será ativado.

var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação e não executa o else


// CONDICIONAIS ELSE IF
// Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado


// TRUTHY E FALSY
// Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
    if(0) // ou -0
    if(NaN)
    if(null)
    if(undefined)
    if('') // ou "" ou ``

// Todo o resto é truthy

// TRUTHY
// Truthy
if(true)
    if(1)
    if(' ')
    if('andre')
    if(-5)
    if({});

// OPERADOR LÓGICO DE NEGAÇÃO !
// O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false

var possuiGraduacao = false
if(!possuiGraduacao) {
    console.log('And wee')
}
    
    