const crypto = require("crypto");
const fs = require("fs");

const generateSSHKey = () => {
  crypto.generateKeyPair(
    "rsa",
    {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: "spki",
        format: "pem",
      },
      privateKeyEncoding: {
        type: "pkcs8",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: "top secret",
      },
    },
    (err, publicKey, privateKey) => {
      if (err !== null) {
        console.error(err);

        return;
      }

      fs.appendFile("rsa_id.pub", publicKey, (err) => {
        if (err !== null) throw err;
      });

      fs.appendFile("rsa_id", privateKey, (err) => {
        if (err !== null) throw err;
      });
    }
  );
};

generateSSHKey();

const encodeSha1 = (value) => {
  return crypto.createHash("sha1").update(value).digest("hex");
};

console.log(encodeSha1("test"));
