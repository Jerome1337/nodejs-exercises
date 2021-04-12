const process = require("process");

const triangles = [
  {
    base: 67,
    heigh: 14,
  },
  {
    base: 45,
    heigh: 20,
  },
  {
    base: 12,
    heigh: 5,
  },
  {
    base: 7,
    heigh: 152,
  },
];

triangles.map((triangle) => {
  console.log((triangle.base * triangle.heigh) / 2);
});

const memoryUsage = process.memoryUsage();

console.log(memoryUsage);

console.log(`Memory used: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
