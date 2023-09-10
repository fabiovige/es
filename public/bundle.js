"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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
  text: "lavar louça",
  done: true
}, {
  text: "lavar roupa",
  done: true
}, {
  text: "lavar carro",
  done: false
}, {
  text: "lavar cachorro",
  done: true
}, {
  text: "lavar cachorro",
  done: true
}];
console.log(todos);
var doneTodos = todos.filter(function (todo) {
  return todo.done;
});
console.log(doneTodos);
var todosSearch = todos.find(function (todo) {
  return todo.text === "lavar cachorro";
});
console.log(todosSearch);

// indexOf findIndex
console.log(todos.indexOf("lavar louça"));
console.log(todos.findIndex(function (todo) {
  return todo.text === "lavar carro";
}));

// some e every equivalente ao in_array do php
var frutas = ["banana", "maçã", "pera", "uva", "melancia"];
var hasFrutas = frutas.some(function (fruta) {
  return fruta === "bananaq";
});
console.log(hasFrutas);

// every verifica se todos os elementos do array atendem a uma condição
var pessoas = [{
  nome: "João",
  sobrenome: "Silva"
}, {
  nome: "Maria",
  sobrenome: "Ferreira"
}, {
  nome: "teste",
  sobrenome: "Gomes"
}, {
  nome: "Carlos",
  sobrenome: "Teste"
}, {
  nome: "Ana",
  sobrenome: "Pereira"
}];

// Verificando se todos os registros têm os campos "nome" e "sobrenome" preenchidos
var todosPreenchidos = pessoas.every(function (pessoa) {
  return typeof pessoa.nome === "string" && pessoa.nome.trim() !== "" && typeof pessoa.sobrenome === "string" && pessoa.sobrenome.trim() !== "";
});
console.log(todosPreenchidos);
// Output: false, porque os registros com índices 2 e 3 possuem campos vazios (nome e sobrenome)

function novoNome() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Fabio";
  console.log("Olá " + name);
}
var novoNome2 = function novoNome2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Dudi";
  return console.log("Olá " + name);
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
showProduct("camisa", 15);
console.log("teste II");

// Object short syntax
var name = "camisa";
var price = 15;
var product = {
  name: name,
  price: price,
  stock: 10
};
console.log(product);

// Desestruturação de arrays

var fruits = ["banana", "maçã", "pera", "uva", "melancia"];
var indice1 = fruits[0],
  indice2 = fruits[1],
  indice3 = fruits[2],
  restante = fruits.slice(3);
console.log(indice1, indice3, restante);

// Desestruturação de objetos

var person = {
  firstName: "Fabio",
  lastName: "Dudi",
  age: 30,
  address: {
    city: "São Paulo",
    region: "SP"
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
  firstName: "Fabio",
  lastName: "Dudi",
  age: 30,
  company: "Vige Tec"
};
var person3 = _objectSpread(_objectSpread({}, person2), {}, {
  firstName: "João",
  company: "Vige Tec II"
});
console.log(person3);
var Pessoa = /*#__PURE__*/function () {
  function Pessoa(name, sobrenome) {
    _classCallCheck(this, Pessoa);
    this.name = name;
    this.sobrenome = sobrenome;
  }
  _createClass(Pessoa, [{
    key: "fullName",
    get: function get() {
      return Pessoa.joinName(this.name, this.sobrenome);
    }
  }], [{
    key: "joinName",
    value: function joinName(name, sobrenome) {
      return "".concat(name, " ").concat(sobrenome);
    }
  }]);
  return Pessoa;
}();
var fabio = new Pessoa("Fabio", "Vige");
console.log(fabio.fullName);

// Herança
var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);
    this.rodas = rodas;
  }
  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log("Acelerou com o carro");
    }
  }]);
  return Veiculo;
}();
var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);
  var _super = _createSuper(Moto);
  function Moto(rodas, capacete) {
    var _this;
    _classCallCheck(this, Moto);
    _this = _super.call(this, rodas);
    _this.capacete = capacete;
    return _this;
  }
  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("Empinou com ".concat(this.rodas, " rodas"));
    }
  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);
      console.log("Acelerou muito com a moto");
    }
  }, {
    key: "possuiCapacete",
    value: function possuiCapacete() {
      if (this.capacete) {
        console.log("Possui capacete");
      } else {
        console.log("Não possui capacete");
      }
    }
  }]);
  return Moto;
}(Veiculo);
var bross = new Moto(2, false);
bross.empinar();
bross.acelerar();
bross.possuiCapacete();
