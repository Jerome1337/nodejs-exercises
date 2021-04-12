const inquirer = require("inquirer");

const isNumber = (value) => {
  return !isNaN(parseFloat(value));
};

const triangle = (calculeType) => {
  return inquirer
    .prompt([
      {
        type: "confirm",
        default: false,
        name: "isRectangle",
        message: "Est-il rectangle ?",
      },
      {
        type: "input",
        name: "baseSize",
        message: "Quelle est la taille de la base ?",
        filter: Number,
        validate: (value) => isNumber(value) || "Entrez un chiffre",
        when: (answers) => !answers.isRectangle,
      },
      {
        type: "input",
        name: "heightSize",
        message: "Quelle est la hauteur du triangle ?",
        filter: Number,
        validate: (value) => isNumber(value) || "Entrez un chiffre",
        when: (answers) => !answers.isRectangle,
      },
      {
        type: "input",
        name: "firstLength",
        message: "Quelle est la taille du premier coté ?",
        filter: Number,
        validate: (value) => isNumber(value) || "Entrez un chiffre",
      },
      {
        type: "input",
        name: "secondLength",
        message: "Quelle est la taille du deuxième coté ?",
        filter: Number,
        validate: (value) => isNumber(value) || "Entrez un chiffre",
      },
      {
        type: "input",
        name: "thirdLength",
        message: "Quelle est la taille du troisième coté ?",
        filter: Number,
        validate: (value) => isNumber(value) || "Entrez un chiffre",
      },
    ])
    .then((answers) => {
      const sizes = { aire: null, perimetre: null };

      if (answers.isRectangle && (calculeType === 1 || calculeType === 3)) {
        sizes.aire = (answers.firstLength * answers.secondLength) / 2;
      } else if (calculeType === 1 || calculeType === 3) {
        sizes.aire = (answers.baseSize * answers.heightSize) / 2;
      }

      if (calculeType === 2 || calculeType === 3) {
        sizes.perimetre =
          answers.firstLength + answers.secondLength + answers.thirdLength;
      }

      return sizes;
    });
};

module.exports = triangle;
