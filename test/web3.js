const Web3Js = require("web3");
const Web3HttpProvider = require("web3-providers-http");


const getOption = function () {
  return {
    keepAlive: true,
    timeout: 20000, // ms
    headers: [{
      name: 'Access-Control-Allow-Origin',
      value: '*'
    }],
    withCredentials: false,
  };
}

const bsc = "https://bsc-dataseed1.defibit.io/";

class Web3 extends Web3Js {
  constructor() {
    const provider = new Web3HttpProvider(bsc, getOption());
    super(provider);
  }
}

module.exports = Web3;
