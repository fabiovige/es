"use strict";

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
