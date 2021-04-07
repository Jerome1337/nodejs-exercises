const Square = require('./square.js');
const Triangle = require('./triangle.js');

const square = new Square('carré', 4, 5);
const triangle = new Triangle('triangle', 3, 12, 4);

console.log(square.print(square.area()));
console.log(triangle.print(triangle.area()));
