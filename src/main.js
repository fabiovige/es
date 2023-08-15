// forEach
const numbers = [51, 42, 33, 24, 15];
numbers.forEach((value, key) => {
	numbers[key] = value + 1;
});
console.log(numbers);

// map
const numbers2 = [51, 42, 33, 24, 15];
const newnumbers = numbers2.map(function (value) {
	return value + 1;
});
console.log(newnumbers);

// reduce
const total = numbers.reduce((totalParcial, value) => {
	return totalParcial + value;
});
console.log(total);

// filter e find
const todos = [
	{ text: "lavar louça", done: true },
	{ text: "lavar roupa", done: true },
	{ text: "lavar carro", done: false },
	{ text: "lavar cachorro", done: true },
	{ text: "lavar cachorro", done: true },
];
console.log(todos);

const doneTodos = todos.filter((todo) => {
	return todo.done;
});
console.log(doneTodos);

const todosSearch = todos.find((todo) => {
	return todo.text === "lavar cachorro";
});
console.log(todosSearch);

// indexOf findIndex
console.log(todos.indexOf("lavar louça"));
console.log(todos.findIndex((todo) => todo.text === "lavar carro"));

// some e every equivalente ao in_array do php
const frutas = ["banana", "maçã", "pera", "uva", "melancia"];
const hasFrutas = frutas.some((fruta) => {
	return fruta === "bananaq";
});
console.log(hasFrutas);

// every verifica se todos os elementos do array atendem a uma condição
const pessoas = [
	{ nome: "João", sobrenome: "Silva" },
	{ nome: "Maria", sobrenome: "Ferreira" },
	{ nome: "teste", sobrenome: "Gomes" },
	{ nome: "Carlos", sobrenome: "Teste" },
	{ nome: "Ana", sobrenome: "Pereira" },
];

// Verificando se todos os registros têm os campos "nome" e "sobrenome" preenchidos
const todosPreenchidos = pessoas.every(
	(pessoa) =>
		typeof pessoa.nome === "string" &&
		pessoa.nome.trim() !== "" &&
		typeof pessoa.sobrenome === "string" &&
		pessoa.sobrenome.trim() !== ""
);

console.log(todosPreenchidos);
// Output: false, porque os registros com índices 2 e 3 possuem campos vazios (nome e sobrenome)

function novoNome(name = "Fabio") {
	console.log("Olá " + name);
}

const novoNome2 = (name = "Dudi") => console.log("Olá " + name);

novoNome();
novoNome2();

// O valor da camisa é R$ 15 reais, pode comprar!

const showProduct = (product, price) => {
	// console.log(
	// 	"O valor da " + product + " é R$ " + price + " reais, pode comprar!"
	// );

	console.log(`O valor da ${product} é R$ ${price} reais, pode comprar!`);
};

showProduct("camisa", 15);
