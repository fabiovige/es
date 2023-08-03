let car = "fusca";
car = "teste";

console.log(car); // fusca

const person = {
	name: "John",
};

console.log(person.name); // John

person.name = "Mary";

console.log(person.name); // Mary

for (let i = 0; i < 10; i++) {
	console.log(i);
}
console.log(i); // ReferenceError: i is not defined
