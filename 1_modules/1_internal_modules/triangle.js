const Shape = require("./shape");

class Triangle extends Shape {
  constructor(name, sideNumber, baseSize, height) {
    super(name, sideNumber);
    this.baseSize = baseSize;
    this.height = height;
  }

  area() {
    return (this.baseSize * this.height) / 2;
  }
}

module.exports = Triangle;
