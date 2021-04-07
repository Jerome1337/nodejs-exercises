const Shape = require('./shape.js');

class Square extends Shape {
  constructor(name, sideNumber, sideSize) {
    super(name, sideNumber);
    this.sideSize = sideSize;
  }

  area() {
    return this.sideSize * this.sideSize;
  }
}

module.exports = Square;
