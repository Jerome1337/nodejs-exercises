const crypto = require("crypto");

class Block {
  constructor(index, previousHash, data) {
    this.index = index;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = Math.floor(Date.now() / 1000);
    this.hash = this.createHash();
  }

  createHash() {
    return crypto
      .createHmac("sha256", "token")
      .update(
        JSON.stringify({
          index: this.index,
          previousHash: this.previousHash,
          data: this.data,
          timestamp: this.timestamp,
        })
      )
      .digest("hex");
  }
}

module.exports = Block;
