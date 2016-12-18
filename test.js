//npm install readline-sync
var rs = require("readline-sync");

var name = rs.question("what is your name?");
console.log("Your nmae is " + name);