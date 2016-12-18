//npm install readline-sync
//npm init
//npm install -g browserify
//npm install --save babelify
//npm install --save watchify
//npm install --save babel-preset-react
//npm install --save react
//npm install --save react-dom
var rs = require("readline-sync");

var name = rs.question("what is your name?");
console.log("Your nmae is " + name);