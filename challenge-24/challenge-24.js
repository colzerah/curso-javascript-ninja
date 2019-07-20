/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/


var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');


Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', function(handleClickNumber){
    handleClickNumber.preventDefault();
    $visor.value += this.value;
  })});

Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', function(handleClickOperation){
    handleClickOperation.preventDefault();
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;

})});

$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickCE() {
  $visor.value = 0;
}


function removeLastItemIfItIsAnOperator(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  if(operations.some(function(operator) {
    return operator === lastItem;
  })) {
    return number.slice(0, -1);
  }
    return number;
}

function handleClickEqual(){
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.replace(/÷/g, '/');
      allValues = allValues.replace(/x/g, '*');
      $visor.value = eval(allValues).toString();
  }


