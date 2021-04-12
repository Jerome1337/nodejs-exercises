const fs = require("fs");

console.log(fs.Dir);

const axios = require("axios").default;

//axios.get("https://google.com").then((response) => console.log(response));

const module1 = require("./module1");

console.log(module1);

const module2 = require("./folder_1/module2");

console.log(module2);

const folder2 = require("./folder_2");

folder2.myFunc("jerome");

folder2.myFunc2();

console.log(folder2.constante);
