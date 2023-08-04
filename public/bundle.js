"use strict";

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
