const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "fruit",
      message: "Quel est le fruit ?",
      choices: ["banane", "poirot"],
    },
    {
      type: "input",
      name: "nombre",
      message: "Combien en voulez-vous ?",
      validate: (value) => {
        return !isNaN(parseFloat(value)) || "Entrer un chiffre valide";
      },
      filter: Number,
    },
  ])
  .then((answers) => {
    console.log(answers);

    if (answers.fruit === "banane") {
      inquirer
        .prompt({
          type: "input",
          name: "prenom",
          message: "comment appellez-vous ?",
          filter: (value) => {
            return value.toLowerCase();
          },
        })
        .then((answers) => {
          console.log(answers);
        });
    }
  });
