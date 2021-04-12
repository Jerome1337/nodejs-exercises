//const fs = require("fs");

const { readFile, mkdir, copyFile, stat } = require("fs");

readFile("text.txt", (err, data) => {
  if (err !== null) {
    console.log(err);

    return;
  }

  console.log(data.toString("utf-8"));
});

mkdir("nouveauDossier", (err) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  copyFile("text.txt", "nouveauDossier/copy_text.txt", (err) => {
    if (err !== null) {
      console.error(err);
    }
  });
});

stat("text.txt", (err, stats) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  console.log(stats);
});

stat("nouveauDossier", (err, stats) => {
  if (err !== null) {
    console.error(err);

    return;
  }

  console.log(stats);
});
