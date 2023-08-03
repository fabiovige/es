"use strict";

var car = "fusca";
car = "teste";
console.log(car); // fusca

var person = {
  name: "John"
};
console.log(person.name); // John

person.name = "Mary";
console.log(person.name); // Mary

for (var _i = 0; _i < 10; _i++) {
  console.log(_i);
}
console.log(i); // ReferenceError: i is not defined
