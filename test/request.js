const safeGet = require("@fengqiaogang/safe-get");
const safeSet = require("@fengqiaogang/safe-set");
const DB = require("@fengqiaogang/dblist");
const bigNumber = require("bignumber.js");

const MultiCall = require("./multicall");

class Header {
  constructor(name, address, abi) {
    this.reference = name;
    this.contractAddress = address;
    this.abi = abi;
    this.calls = [];
  }

  add(method, query) {
    const data = {
      reference: method,
      methodName: method,
    };
    if (query && typeof query === "string") {
      data["methodParameters"] = [query];
    }
    if (query && typeof Array.isArray(query)) {
      data["methodParameters"] = query;
    }
    this.calls.push(data);
  }

  getValue() {
    return {
      reference: this.reference,
      contractAddress: this.contractAddress,
      abi: this.abi,
      calls: this.calls
    }
  }
}

const transformValue = function (type, value) {
  if (/^uint\d+$/i.test(type)) {
    const number = new bigNumber(typeof value === "object" ? safeGet(value, "hex") : value);
    return number.toNumber();
  }
  console.log(type, value);
  return value;
}

const toValue = function (abiDb, dataDB, method) {
  const data = dataDB.selectOne({reference: method});
  if (data) {
    const value = [].concat(safeGet(data, "returnValues"));
    const outputs = safeGet(abiDb.selectOne({name: method}), "outputs");
    let index = 0;
    const list = [];
    for (const item of outputs) {
      const type = item.type;
      const temp = transformValue(type, value[index]);
      list.push(temp);
      index++;
    }
    if (list.length > 1) {
      return list;
    }
    return list[0];
  }
}

const request = async function (headers) {
  const list = Array.isArray(headers) ? headers : [].concat(headers);
  const multiCall = new MultiCall();

  const data = {};
  const keys = list.map(function (item) {
    const name = safeGet(item, "reference");
    const methods = item.calls.map(function (data) {
      return data.reference;
    });
    safeSet(data, name, {});
    return {name, methods};
  });

  try {
    const {results} = await multiCall.call(list);
    for (const item of keys) {
      const arr = safeGet(results, `${item.name}.callsReturnContext`);
      const abi = safeGet(results, `${item.name}.originalContractCallContext.abi`);
      const abiDb = new DB([], "name");
      abiDb.insert(abi);
      const db = new DB([], "reference");
      db.insert(arr);
      for (const method of item.methods) {
        const value = toValue(abiDb, db, method);
        safeSet(data, `${item.name}.${method}`, value);
      }
    }
  } catch (e) {
    console.log(e);
  }
  return data;
};


module.exports = {Header, request};
