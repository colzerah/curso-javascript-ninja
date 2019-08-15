(function(){
/*
No HTML:
- Crie um formulário com um input de texto que receberá um CEP e um botão
de submit;
- Crie uma estrutura HTML para receber informações de endereço:
"Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
preenchidas com os dados da requisição feita no JS.
- Crie uma área que receberá mensagens com o status da requisição:
"Carregando, sucesso ou erro."

No JS:
- O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
deve ser limpo e enviado somente os números para a requisição abaixo;
- Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
"https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
no input criado no HTML;
- Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
com os dados recebidos.
- Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
a mensagem: "Buscando informações para o CEP [CEP]..."
- Se não houver dados para o CEP entrado, mostrar a mensagem:
"Não encontramos o endereço para o CEP [CEP]."
- Se houver endereço para o CEP digitado, mostre a mensagem:
"Endereço referente ao CEP [CEP]:"
- Utilize a lib DOM criada anteriormente para facilitar a manipulação e
adicionar  as informações em tela.
*/
function DOM(elements){
  this.element = this.getDOMElements(elements);
}

DOM.prototype.getDOMElements = function getDOMElements(elements){
  return document.querySelectorAll(elements);
};

DOM.prototype.on = function(eventType, callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.addEventListener(eventType, callback)
  });
};

DOM.prototype.off = function(eventType, callback){
  Array.prototype.forEach.call(this.element, function(element){
    element.removeEventListener(eventType, callback)
  });
};

DOM.prototype.get = function(){
  return this.element;
};

// Métodos  - forEach, map, filter, reduce, reduceRight, every e some.
DOM.prototype.forEach = function forEach(){
  return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map(){
  return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter(){
  return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce = function reduce(){
  return Array.prototype.reduce.apply(this.element, arguments);
};

DOM.prototype.reduceRight = function reduceRight(){
  return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every(){
  return Array.prototype.every.apply(this.element, arguments);
};

DOM.prototype.some = function some(){
  return Array.prototype.some.apply(this.element, arguments);
};

// Métodos isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
DOM.prototype.isArray = function(args){
  return Object.prototype.toString.call(args) === '[object Array]';
}

DOM.prototype.isFunction = function(args){
  return Object.prototype.toString.call(args) === '[object Function]';
};

DOM.prototype.isNumber = function(args){
  return Object.prototype.toString.call(args) === '[object Number]';
};

DOM.prototype.isString = function(args){
  return Object.prototype.toString.call(args) === '[object String]';
};

DOM.prototype.isBoolean = function(args){
  return Object.prototype.toString.call(args) === '[object Boolean]';
};

DOM.prototype.isNull = function(args){
  return Object.prototype.toString.call(args) === '[object Null]' ||
         Object.prototype.toString.call(args) === '[object Undefined]';
};

  $inputCep = new DOM('[data-js="input-cep"]');
  $status = new DOM('[data-js="status"]');
  $submit = new DOM('[data-js="submit"]');

  $logradouro = new DOM('[data-js="logradouro"]');
  $bairro = new DOM('[data-js="bairro"]');
  $estado = new DOM('[data-js="estado"]');
  $cidade = new DOM('[data-js="cidade"]');
  $cep = new DOM('[data-js="cep"]');

  var ajax = new XMLHttpRequest();

  function cleanCEP(){
   return $inputCep.get()[0].value.replace(/\D/g, '');
  };

  function url(){
    return 'https://viacep.com.br/ws/' + cleanCEP() + '/json/'
  };

  $submit.on('click', openConnect);
  function openConnect(event){
    event.preventDefault();
    ajax.open('GET', url());
    ajax.send(null);
    $status.get()[0].textContent = message()['load'];
    ajax.addEventListener('readystatechange', statusConnect);
  };

  function statusConnect(event){
    event.preventDefault();
    if(ajax.status === 200)
      return connectionOK();
    return connectionErro();
  };

  function connectionOK(){
    var objJSON = erroTratament();
    $logradouro.get()[0].textContent = objJSON.logradouro;
    $bairro.get()[0].textContent = objJSON.bairro;
    $estado.get()[0].textContent = objJSON.uf;
    $cidade.get()[0].textContent = objJSON.localidade;
    $cep.get()[0].textContent = objJSON.cep;
    $status.get()[0].textContent = message()['itsOK'];

  };

  function connectionErro(){
    $logradouro.get()[0].textContent = '-';
    $bairro.get()[0].textContent = '-';
    $estado.get()[0].textContent = '-';
    $cidade.get()[0].textContent = '-';
    $cep.get()[0].textContent = '-';
    $status.get()[0].textContent = message()['error'];
  };

  function erroTratament(){
    var response = '';
    try{
      response = JSON.parse(ajax.responseText);
    }
    catch(e){
      response = null;
    };
    return response;
  }

  function message(){
    return {
      load: "Buscando informações para o CEP... [CEP]".replace('[CEP]', cleanCEP()),
      error:  "Não encontramos o endereço para o CEP: [CEP]".replace('[CEP]', cleanCEP()),
      itsOK: "Endereço referente ao CEP: [CEP]".replace('[CEP]', cleanCEP()),
    }
  }

})()
