//  array functions

const todos = [
	{ text: "lavar louça", done: true },
	{ text: "lavar roupa", done: true },
	{ text: "lavar carro", done: false },
	{ text: "lavar cachorro", done: true },
];

const todosSearch = todos.find(function (todo) {
	return todo.text === "lavar cachorro";
});

const todosSearch2 = todos.find((todo) => {
	return todo.text === "lavar cachorro";
});

const todosSearch3 = todos.find((todo) => todo.text === "lavar cachorro");
const todosSearch4 = todos.filter((item) => item.done === false);

function bomdia() {
	console.log("bom dia");
}

const bomdia2 = () => ({ name: "fabio" });

console.log(todosSearch);
console.log(todosSearch2);
console.log(todosSearch3);
console.log(todosSearch4);
console.log(bomdia2().name);
