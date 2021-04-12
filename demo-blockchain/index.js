const Chain = require("./chain");

const blockChain = new Chain();

blockChain.addBlockToChain({ index: 1 });
blockChain.addBlockToChain({ index: 2 });
blockChain.addBlockToChain({ index: 3 });
blockChain.addBlockToChain({ index: 4 });
blockChain.addBlockToChain({ index: 5 });
blockChain.addBlockToChain({ index: 6 });

console.log(blockChain);

const isValid = blockChain.isChainValid();

console.log("La chaine est-elle valide : ", isValid);
