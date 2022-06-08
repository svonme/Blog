const Data = require("./address");

const { Header, request } = require("./request");
// const Web3 = require("./web3");

const main = async function () {
  const data = Data.farmVaults[0].farm;

  // const web3 = new Web3();
  // const contract = new web3.eth.Contract(Data.abis.erc20, data.token);
  // const m = contract.methods.totalSupply()
  // const list = [
  //   [data.token, m.encodeABI()]
  // ];

  const header = new Header(data.tokenSymbol, data.token, Data.abis.erc20);

  header.add("totalSupply");
  header.add("getReserves");

  const list = [
    header.getValue()
  ];

  const res = await request(list);
  console.log(res);

}

setTimeout(main);
