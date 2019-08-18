(function () {
  'use strict';

  function DOM(elements) {
    this.element = this.getDOMElements(elements);
  }

  DOM.prototype.getDOMElements = function getDOMElements(elements) {
    return document.querySelectorAll(elements);
  };

  DOM.prototype.on = function (eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.addEventListener(eventType, callback)
    });
  };

  DOM.prototype.off = function (eventType, callback) {
    Array.prototype.forEach.call(this.element, function (element) {
      element.removeEventListener(eventType, callback)
    });
  };

  DOM.prototype.get = function () {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  // Métodos isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
  DOM.prototype.isArray = function (args) {
    return Object.prototype.toString.call(args) === '[object Array]';
  }

  DOM.prototype.isFunction = function (args) {
    return Object.prototype.toString.call(args) === '[object Function]';
  };

  DOM.prototype.isNumber = function (args) {
    return Object.prototype.toString.call(args) === '[object Number]';
  };

  DOM.prototype.isString = function (args) {
    return Object.prototype.toString.call(args) === '[object String]';
  };

  DOM.prototype.isBoolean = function (args) {
    return Object.prototype.toString.call(args) === '[object Boolean]';
  };

  DOM.prototype.isNull = function (args) {
    return Object.prototype.toString.call(args) === '[object Null]' ||
      Object.prototype.toString.call(args) === '[object Undefined]';
  };

  window.DOM = DOM;
})();
