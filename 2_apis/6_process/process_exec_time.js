const process = require("process");

const usage1 = process.cpuUsage();

console.log(usage1);

// On fait tourner le processus pendant 2 secondes
const now = Date.now();
while (Date.now() - now < 5000);

const usage2 = process.cpuUsage();

console.log(usage2);

console.log(
  `Le processus à utilisé ${(usage2.user - usage1.user) / 1_000_000} secondes.`
);
