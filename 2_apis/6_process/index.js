const process = require("process");

const args = process.argv;

if (args[2] === "nuit") {
  console.log("Il fait nuit");
} else if (args[2] === "jour") {
  console.log("Il fait jour");
} else {
  console.log("Vous devez passer un argument (nuit ou jour).");
}
