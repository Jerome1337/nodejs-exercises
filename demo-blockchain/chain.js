const Block = require("./block");

class Chain {
  constructor() {
    this.chain = [];
  }

  addBlockToChain(data) {
    const chainLength = this.chain.length;

    const newBlock = new Block(
      chainLength,
      chainLength === 0 ? null : this.chain[chainLength - 1].hash,
      data
    );

    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 0; i <= this.chain.length; ++i) {
      if (this.chain[i].hash === this.chain[i].createHash()) {
        return true;
      }

      if (i !== 0 && this.chain[i].previousHash === this.chain[i - 1].hash) {
        return true;
      }

      return false;
    }
  }
}

module.exports = Chain;
