const process = require("process");

const args = process.argv;

// process.exit(1);

console.log(`Current directory: ${process.cwd()}`);

console.log("ARGs", args);

process.chdir("/home");
console.log(`New directory: ${process.cwd()}`);

process.stdin.resume();

process.on("SIGINT", () => {
  // arreté ici

  console.log("Received SIGINT. Press Control-D to exit.");
});
