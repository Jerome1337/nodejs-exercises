const fs = require("fs");

fs.unlink("./test.txt", () => {
  console.log("CORRECTLY DELETE");
});

fs.rmdir("./test", () => {
  console.log("FOLDER DELETED");
});
