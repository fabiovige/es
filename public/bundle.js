"use strict";

function novoNome() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Fabio";
  console.log("Olá " + name);
}
var novoNome2 = function novoNome2() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Dudi';
  return console.log("Olá " + name);
};
novoNome();
novoNome2();
