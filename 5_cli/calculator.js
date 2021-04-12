const inquirer = require("inquirer");

const triangle = require("./triangle");

const calculator = async (calculeType, shape) => {
  switch (shape) {
    case "carré":
      return inquirer
        .prompt({
          type: "input",
          name: "size",
          message: "Quelle est la longeur d'un coté ?",
          filter: Number,
          validate: (value) => {
            return !isNaN(parseFloat(value)) || "Entrez un chiffre";
          },
        })
        .then(({ size }) => {
          const sizes = { aire: null, perimetre: null };

          if (calculeType === 1 || calculeType === 3) {
            sizes.aire = size * size;
          }

          if (calculeType === 2 || calculeType === 3) {
            sizes.perimetre = 4 * size;
          }

          return sizes;
        });
    case "cercle":
    case "rectangle":
    case "triangle":
      return await triangle(calculeType);
    case "losange":
    case "trapèze":
    case "parallélogramme":
    default:
      return "Cette forme n'existe pas";
  }
};

module.exports = calculator;
