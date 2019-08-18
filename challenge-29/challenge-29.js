(function (DOM) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.


  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    var $button = new DOM('[data-js="submit"]');
    var $form = new DOM('[data-js="form"]');
    var $body = new DOM('[data-js="body"]');
    var $inputs = new DOM('[data-js="input"]');
    var $nomeCompany = new DOM(['[data-js="name"]']);
    var $telCompany = new DOM('[data-js="tel"]')
    var arr2 = [];
    var ajax = new XMLHttpRequest();

    openConnect();
    function openConnect() {
      ajax.open('GET', 'company.json');
      ajax.send(null);
      ajax.addEventListener('readystatechange', ajaxConnect);
    };

    function ajaxConnect(event) {
      event.preventDefault();
      if (ajax.readyState === 4 && ajax.status === 200)
        return responseParse();
    };

    function responseParse() {
      var response = '';
      try {
        response = JSON.parse(ajax.responseText);
      }
      catch (e) {
        response = null;
      }
      return inputCompany(response);
    };

    function inputCompany(response) {
      $nomeCompany.get()[0].textContent = response.name;
      $telCompany.get()[0].textContent = response.phone;
    };

    $button.on('click', handClick);
    function handClick(event) {
      event.preventDefault();
      arr2 = [];
      getNames();
      tableRegister();
      clearInputs();
    }

    function clearInputs() {
      for (var i = 0; i < $inputs.get().length; i++) {
        $inputs.get()[i].value = "";
      };
    };

    function getNames() {
      $form.get()[0].childNodes.forEach(function (item) {
        if (typeof item.value === 'string')
          arr2.push(item.value)
      });
    };

    function createCell(text) {
      var td = document.createElement('td');
      td.textContent = text;
      return td;
    };

    function createImg(txtImg) {
      var td = document.createElement('td');
      var img = document.createElement('img');
      img.setAttribute('src', txtImg);
      img.setAttribute('width', "110");
      img.setAttribute('height', "50");
      td.appendChild(img);
      return td;
    };

    function tableRegister() {
      var tr = document.createElement('tr');
      $body.get()[0].appendChild(tr);
      tr.appendChild(createImg(arr2[0]));
      for (var i = 1; i < arr2.length; i++) {
        tr.appendChild(createCell(arr2[i]));
      };
    };

  };

  app();

})(window.DOM);
