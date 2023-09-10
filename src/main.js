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

console.log("teste II");

// Object short syntax
const name = "camisa";
const price = 15;

const product = {
  name,
  price,
  stock: 10,
};

console.log(product);

// Desestruturação de arrays

const fruits = ["banana", "maçã", "pera", "uva", "melancia"];

const [indice1, indice2, indice3, ...restante] = fruits;

console.log(indice1, indice3, restante);

// Desestruturação de objetos

const person = {
  firstName: "Fabio",
  lastName: "Dudi",
  age: 30,
  address: {
    city: "São Paulo",
    region: "SP",
  },
};

const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(firstName, lastName, city);

// Desestruturação de objetos
const showFullName = ({ firstName, lastName }) => {
  console.log(`${person.firstName} ${person.lastName}`);
};

showFullName(person);

// Operadores rest/spread
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numbers3;

console.log(primeiroNumero, segundoNumero, resto);

const { firstName: name2, ...resto2 } = person;

console.log(name2, resto2);

// rest
const sum = (...numbers) => {
  return numbers.reduce((total, next) => total + next);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 11));

// spread - unificar vetores
const numbers4 = [1, 2, 3, 4, 5];
const numbers5 = [6, 7, 8, 9, 10];
const numbers6 = [...numbers4, ...numbers5];

console.log(numbers6);

const person2 = {
  firstName: "Fabio",
  lastName: "Dudi",
  age: 30,
  company: "Vige Tec",
};

const person3 = {
  ...person2,
  firstName: "João",
  company: "Vige Tec II",
};

console.log(person3);

class Pessoa {
  constructor(name, sobrenome) {
    this.name = name;
    this.sobrenome = sobrenome;
  }
  get fullName() {
    return Pessoa.joinName(this.name, this.sobrenome);
  }

  static joinName(name, sobrenome) {
    return `${name} ${sobrenome}`;
  }
}

let fabio = new Pessoa("Fabio", "Vige");
console.log(fabio.fullName);

// Herança

class Veiculo {
  constructor(rodas) {
    this.rodas = rodas;
  }

  acelerar() {
    console.log("Acelerou com o carro");
  }
}

class Moto extends Veiculo {
  constructor(rodas, capacete) {
    super(rodas);
    this.capacete = capacete;
  }

  empinar() {
    console.log(`Empinou com ${this.rodas} rodas`);
  }

  acelerar() {
    super.acelerar();
    console.log("Acelerou muito com a moto");
  }

  possuiCapacete() {
    if (this.capacete) {
      console.log("Possui capacete");
    } else {
      console.log("Não possui capacete");
    }
  }
}

let bross = new Moto(2, false);
bross.empinar();
bross.acelerar();
bross.possuiCapacete();
