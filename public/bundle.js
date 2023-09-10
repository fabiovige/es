"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// forEach
var numbers = [51, 42, 33, 24, 15];
numbers.forEach(function (value, key) {
  numbers[key] = value + 1;
});
console.log(numbers);

// map
var numbers2 = [51, 42, 33, 24, 15];
var newnumbers = numbers2.map(function (value) {
  return value + 1;
});
console.log(newnumbers);

// reduce
var total = numbers.reduce(function (totalParcial, value) {
  return totalParcial + value;
});
console.log(total);

// filter e find
var todos = [{
  text: 'lavar louça',
  done: true
}, {
  text: 'lavar roupa',
  done: true
}, {
  text: 'lavar carro',
  done: false
}, {
  text: 'lavar cachorro',
  done: true
}, {
  text: 'lavar cachorro',
  done: true
}];
console.log(todos);
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos);
var todosSearch = todos.find(function (todo) {
  return todo.text === 'lavar cachorro';
});
console.log(todosSearch);

// indexOf findIndex
console.log(todos.indexOf('lavar louça'));
console.log(todos.findIndex(function (todo) {
  return todo.text === 'lavar carro';
}));

// some e every equivalente ao in_array do php
var frutas = ['banana', 'maçã', 'pera', 'uva', 'melancia'];
var hasFrutas = frutas.some(function (fruta) {
  return fruta === 'bananaq';
});
console.log(hasFrutas);

// every verifica se todos os elementos do array atendem a uma condição
var pessoas = [{
  nome: 'João',
  sobrenome: 'Silva'
}, {
  nome: 'Maria',
  sobrenome: 'Ferreira'
}, {
  nome: 'teste',
  sobrenome: 'Gomes'
}, {
  nome: 'Carlos',
  sobrenome: 'Teste'
}, {
  nome: 'Ana',
  sobrenome: 'Pereira'
}];

// Verificando se todos os registros têm os campos "nome" e "sobrenome" preenchidos
var todosPreenchidos = pessoas.every(function (pessoa) {
  return typeof pessoa.nome === 'string' && pessoa.nome.trim() !== '' && typeof pessoa.sobrenome === 'string' && pessoa.sobrenome.trim() !== '';
});
console.log(todosPreenchidos);
// Output: false, porque os registros com índices 2 e 3 possuem campos vazios (nome e sobrenome)

function novoNome() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Fabio';
  console.log('Olá ' + name);
}
var novoNome2 = function novoNome2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Dudi';
  return console.log('Olá ' + name);
};
novoNome();
novoNome2();

// O valor da camisa é R$ 15 reais, pode comprar!

var showProduct = function showProduct(product, price) {
  // console.log(
  // 	"O valor da " + product + " é R$ " + price + " reais, pode comprar!"
  // );

  console.log("O valor da ".concat(product, " \xE9 R$ ").concat(price, " reais, pode comprar!"));
};
showProduct('camisa', 15);
console.log('teste II');

// Object short syntax
var name = 'camisa';
var price = 15;
var product = {
  name: name,
  price: price,
  stock: 10
};
console.log(product);

// Desestruturação de arrays

var fruits = ['banana', 'maçã', 'pera', 'uva', 'melancia'];
var indice1 = fruits[0],
  indice2 = fruits[1],
  indice3 = fruits[2],
  restante = fruits.slice(3);
console.log(indice1, indice3, restante);

// Desestruturação de objetos

var person = {
  firstName: 'Fabio',
  lastName: 'Dudi',
  age: 30,
  address: {
    city: 'São Paulo',
    region: 'SP'
  }
};
var firstName = person.firstName,
  lastName = person.lastName,
  city = person.address.city;
console.log(firstName, lastName, city);

// Desestruturação de objetos
var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
    lastName = _ref.lastName;
  console.log("".concat(person.firstName, " ").concat(person.lastName));
};
showFullName(person);

// Operadores rest/spread
var numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var primeiroNumero = numbers3[0],
  segundoNumero = numbers3[1],
  resto = numbers3.slice(2);
console.log(primeiroNumero, segundoNumero, resto);
var name2 = person.firstName,
  resto2 = _objectWithoutProperties(person, ["firstName"]);
console.log(name2, resto2);

// rest
var sum = function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (total, next) {
    return total + next;
  });
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 11));

// spread - unificar vetores
var numbers4 = [1, 2, 3, 4, 5];
var numbers5 = [6, 7, 8, 9, 10];
var numbers6 = [].concat(numbers4, numbers5);
console.log(numbers6);
var person2 = {
  firstName: 'Fabio',
  lastName: 'Dudi',
  age: 30,
  company: 'Vige Tec'
};
var person3 = _objectSpread(_objectSpread({}, person2), {}, {
  firstName: 'João',
  company: 'Vige Tec II'
});
console.log(person3);

// Funções construtoras
function Car(brand, price) {
  this.brand = brand;
  this.price = price;
  console.log(this);
}
var civc = new Car('Honda', 10000);
var hb20 = new Car('Hyundai', 20000);

// Classes
var Car2 = /*#__PURE__*/function () {
  function Car2(brand) {
    var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 23;
    _classCallCheck(this, Car2);
    this.brand = brand;
    this.price = price;
  }
  _createClass(Car2, [{
    key: "run",
    value: function run() {
      console.log('correndo...');
    }
  }]);
  return Car2;
}();
var civic = new Car2('Honda');
civic.run();
console.log(civic.price);

// Person
var Person = /*#__PURE__*/function () {
  function Person(firstName, lastName) {
    _classCallCheck(this, Person);
    this._firstName = firstName;
    this._lastName = lastName;
  }
  _createClass(Person, [{
    key: "fullName",
    get: function get() {
      return "".concat(this._firstName, " ").concat(this._lastName);
    },
    set: function set(value) {
      var parts = value.split(' ');
      this._firstName = parts[0];
      this._lastName = parts[1];
    }
  }]);
  return Person;
}();
var fabio = new Person('Fabio', 'Vige');
console.log(fabio.fullName);

// Métodos estáticos
var Calculadora = /*#__PURE__*/function () {
  function Calculadora() {
    _classCallCheck(this, Calculadora);
  }
  _createClass(Calculadora, null, [{
    key: "sum",
    value: function sum(a, b) {
      return a + b;
    }
  }]);
  return Calculadora;
}();
console.log(Calculadora.sum(2, 2));
var Animal = /*#__PURE__*/function () {
  function Animal(name) {
    _classCallCheck(this, Animal);
    this.name = name;
    this.age = 8;
  }
  _createClass(Animal, [{
    key: "fullName",
    get: function get() {
      return Animal.joinName(this.name, this.age);
    }
  }], [{
    key: "joinName",
    value: function joinName(name, age) {
      return "".concat(name, " ").concat(age);
    }
  }]);
  return Animal;
}();
var gato = new Animal('gato');
console.log(gato.fullName);
