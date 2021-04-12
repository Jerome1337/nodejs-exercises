const Square = require("./square");
const Triangle = require("./triangle");

const square = new Square("Carré", 4, 6);
const triangle = new Triangle("Triangle", 3, 7, 9);

console.log(square.print(square.area()));

console.log(triangle.print(triangle.area()));
