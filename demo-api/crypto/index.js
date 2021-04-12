const crypto = require("crypto");

const hash = crypto.createHmac("sha256", "secret").update("test");

console.log(hash);

console.log("HEX", hash.digest("hex"));

console.log("B64", hash.digest("base64"));
