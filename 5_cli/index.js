const inquirer = require("inquirer");

const calculator = require("./calculator");

inquirer
  .prompt({
    type: "list",
    name: "calculeType",
    message: "Que voulez-vous calculer ?",
    choices: [
      { name: "Aire", value: 1 },
      { name: "Périmètre", value: 2 },
      { name: "Les deux", value: 3 },
    ],
  })
  .then(async ({ calculeType }) => {
    const shape = await chooseShape();
    const sizes = await calculator(calculeType, shape);

    if (sizes.aire !== null) {
      console.log(`L'aire de la forme ${shape} est ${sizes.aire}.`);
    }

    if (sizes.perimetre !== null) {
      console.log(`Le périmètre de la forme ${shape} est ${sizes.perimetre}.`);
    }
  });

const chooseShape = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "shape",
      message: "Quelle forme voulez-vous ?",
      choices: [
        "carré",
        "cercle",
        "rectangle",
        "triangle",
        "losange",
        "trapèze",
        "parallélogramme",
      ],
    })
    .then(({ shape }) => {
      return shape;
    });
};
