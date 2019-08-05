(function(win, doc){
  'use strict';
/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

var $visor = doc.querySelector('[data-js="visor"]');

// Eventos de Mouse
var $buttonClick = doc.querySelector('[data-js="button-number-1"]');
var $buttonDoubleClick = doc.querySelector('[data-js="button-number-2"]');
var $buttonMouseDown = doc.querySelector('[data-js="button-number-3"]');
var $buttonMouseMove = doc.querySelector('[data-js="button-number-4"]');
var $buttonMouseSeout = doc.querySelector('[data-js="button-number-5"]');
var $buttonMouseSeover = doc.querySelector('[data-js="button-number-6"]');
var $buttonMouseUp = doc.querySelector('[data-js="button-number-7"]');
var $buttonMouseWheel = doc.querySelector('[data-js="button-number-8"]');

$buttonClick.addEventListener('click', function(){
  console.log($buttonClick.value);
});

$buttonDoubleClick.addEventListener('dblclick', function(){
  console.log($buttonDoubleClick.value);
});

$buttonMouseDown.addEventListener('mousedown', function(){
  console.log($buttonMouseDown.value);
});

$buttonMouseMove.addEventListener('mousemove', function(){
  console.log($buttonMouseMove.value);
});

$buttonMouseSeout.addEventListener('mouseout', function(){
  console.log($buttonMouseSeout.value);
});

$buttonMouseSeover.addEventListener('mouseover', function(){
  console.log($buttonMouseSeover.value);
});

$buttonMouseUp.addEventListener('mouseup', function(){
  console.log($buttonMouseUp.value);
});

$buttonMouseWheel.addEventListener('wheel', function(){
  console.log($buttonMouseWheel.value);
});

//Eventos de Teclado
var $inputKeyDown = doc.querySelector('[data-js="keydown"]');
var $inputKeyUp = doc.querySelector('[data-js="keydown"]');
var $inputKeyPress = doc.querySelector('[data-js="keypress"]');

$inputKeyDown.addEventListener('keydown', function(){
  doc.querySelector('[data-js="keydown"]').style.backgroundColor = "red";
});

$inputKeyUp.addEventListener('keyup', function(){
  doc.querySelector('[data-js="keydown"]').style.backgroundColor = "yellow";
} )

$inputKeyPress.addEventListener('keypress', function(){
  alert("Digite Pausadamente!");
} )

//Eventos de Formulario
var $blur = doc.querySelector('[data-js="name"]');
var $change = doc.querySelector('[data-js="change"]');

$blur.addEventListener('blur', function(){
  $blur.value = $blur.value.toUpperCase();
});

$change.addEventListener('change', function(){
  doc.querySelector('[data-js="change2"]').innerHTML = "Personagem Selecionado: " + $change.value;
});

var $focus = doc.querySelectorAll('[data-js="player"]');
function focus(element){
  element.style.background = "yellow";
}

for(var i = 0; i < $focus.length; i++){
  var x  = $focus[i];
  x.addEventListener('focus', focus.bind(this, x));
};

var $input = doc.querySelector('[data-js="entrada"]');

$input.addEventListener('input', function(){
  var x = $input.value;
  doc.querySelector('[id="saida"]').innerHTML = "Voce Digitou: " + x;
} );

var $invalid = doc.querySelector('[data-js="invalidname"]');

$invalid.addEventListener('invalid', function(event){
  event.preventDefault();
  alert('Preencha o campo!');
});

var $reseta = doc.querySelector('[data-js="reseta"]');

$reseta.addEventListener('reset', function(event){
  alert("Formulario Redefinido!")
});

var $search = doc.querySelector('[data-js="search"]');

$search.addEventListener('search', function(){
  doc.querySelector('[id="testSearch"]').innerHTML = "Voce está procurando: " + $search.value;
});

var $selectme = doc.querySelector('[data-js="selectme"]');

$selectme.addEventListener('select', function(){
  alert('texto selecionado!');
});

var $testaSubimit = doc.querySelector('[data-js="submitTest"]');

$testaSubimit.addEventListener('submit', function(event){
  alert("Texto Enviado!");
});

// Eventos de Transferencia
var $transfers = doc.querySelector('[data-js="textCopy"]');

$transfers.addEventListener('copy', function(){
  doc.querySelector('[id="textCopy2"]').innerHTML = "Voce copiou o texto!"
});

$transfers.addEventListener('cut', function(){
  doc.querySelector('[id="textCopy2"]').innerHTML = "Voce Recortou o texto!"
});

$transfers.addEventListener('paste', function(){
  doc.querySelector('[id="textCopy2"]').innerHTML = "Voce Colou o texto!"
});



})(window, document);
