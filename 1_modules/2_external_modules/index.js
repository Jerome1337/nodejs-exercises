const lodash = require("lodash");

const m = require("./module");

console.log(lodash.chunk(m.array_1, 2));

console.log(lodash.last(m.array_2));

console.log(lodash.nth(m.array_2, 2));
