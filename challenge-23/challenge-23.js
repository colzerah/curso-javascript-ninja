(function(win, doc){
  'use strict'
/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

var $inputSum = doc.querySelector('[data-js="sum"]');
var $inputSubtraction = doc.querySelector('[data-js="subtration"]');
var $inputMultiplication = doc.querySelector('[data-js="multiplication"]');
var $inputDivision = doc.querySelector('[data-js="division"]');

var $inputCE = doc.querySelector('[data-js="ce"]');
var $inputResult = doc.querySelector('[data-js="result"]');
var $inputVisor = doc.querySelector('[data-js="tela"]');

var $input0 = doc.querySelector('[data-js="00"]');
var $input01 = doc.querySelector('[data-js="01"]');
var $input02 = doc.querySelector('[data-js="02"]');
var $input03 = doc.querySelector('[data-js="03"]');
var $input04 = doc.querySelector('[data-js="04"]');
var $input05 = doc.querySelector('[data-js="05"]');
var $input06 = doc.querySelector('[data-js="06"]');
var $input07 = doc.querySelector('[data-js="07"]');
var $input08 = doc.querySelector('[data-js="08"]');
var $input09 = doc.querySelector('[data-js="09"]');


var visor = "";
var arrOperator = ['+', '-', 'x', '÷'];


function screenViewOperador(operator){
    if(arrOperator.some(function(item){
       return item === (visor.slice(-1));
    })){
      visor = visor.slice(0,-1);
    }
     visor += operator;
     screenView();
}

function screenView(){
   $inputVisor.value = visor;

}

$inputCE.addEventListener('click', function(event){
  event.preventDefault();
  visor = '';
  $inputVisor.value = 0;
});

$inputResult.addEventListener('click', function(event){
  event.preventDefault();
  visor = visor.replace(/÷/g, '/');
  visor = visor.replace(/x/g, '*');
  if(visor.match(/[+*/-]$/g) !== null)
    visor = visor.slice(0, -1);
  visor =  eval(visor).toString();
  screenView();
});


$inputSum.addEventListener('click', function(event){
  event.preventDefault();
  screenViewOperador(arrOperator[0]);

});

$inputSubtraction.addEventListener('click', function(event){
  event.preventDefault();
  screenViewOperador(arrOperator[1]);
});

$inputMultiplication.addEventListener('click', function(event){
  event.preventDefault();
  screenViewOperador(arrOperator[2]);
});

$inputDivision.addEventListener('click', function(event){
  event.preventDefault();
  screenViewOperador(arrOperator[3]);
})



$input0.addEventListener('click', function(event){
  event.preventDefault();
  visor += '0';
  screenView();
});

$input01.addEventListener('click', function(event){
  event.preventDefault();
  visor += '1';
  screenView();
});

$input02.addEventListener('click', function(event){
  event.preventDefault();
  visor += '2';
  screenView();

});

$input03.addEventListener('click', function(event){
  event.preventDefault();
  visor += '3';
  screenView();
});

$input04.addEventListener('click', function(event){
  event.preventDefault();
  visor += '4'
  screenView();
});

$input05.addEventListener('click', function(event){
  event.preventDefault();
  visor += '5';
  screenView();
});

$input06.addEventListener('click', function(event){
  event.preventDefault();
  visor += '6';
  screenView();
});

$input07.addEventListener('click', function(event){
  event.preventDefault();
  visor += '7';
  screenView();
});

$input08.addEventListener('click', function(event){
  event.preventDefault();
  visor += '8';
  screenView();
});

$input09.addEventListener('click', function(event){
  event.preventDefault();
  visor += '9';
  screenView();
});

})(window, document);
