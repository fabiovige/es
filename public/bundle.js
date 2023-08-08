"use strict";

//  array functions

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
}];
var todosSearch = todos.find(function (todo) {
  return todo.text === "lavar cachorro";
});
var todosSearch2 = todos.find(function (todo) {
  return todo.text === "lavar cachorro";
});
var todosSearch3 = todos.find(function (todo) {
  return todo.text === "lavar cachorro";
});
var todosSearch4 = todos.filter(function (item) {
  return item.done === false;
});
function bomdia() {
  console.log("bom dia");
}
var bomdia2 = function bomdia2() {
  return {
    name: "fabio"
  };
};
console.log(todosSearch);
console.log(todosSearch2);
console.log(todosSearch3);
console.log(todosSearch4);
console.log(bomdia2().name);
