const Web3 = require("./web3");
const {Multicall} = require("ethereum-multicall");

module.exports = class extends Multicall{
  constructor() {
    const value = {
      web3Instance: new Web3()
    };
    super(value);
  }
};
