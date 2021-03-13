var Web3 = require('web3');
var web3 = new Web3();

function encodeFunctionSignature(functionName) {
  var sig = web3.eth.abi.encodeFunctionSignature(functionName);
  return sig;
}

function encodeFuncSignaturesFromABI(abiText) {
  var abi = JSON.parse(abiText);
  var funcSigns = '';
  for (let i = 0; i < abi.length; ++i) {
    let sig;
    try {
      sig = encodeFunctionSignature(abi[i]);
    } catch (e) {
      continue;
    }

    let func = abi[i].name + '(';
    for (let j = 0; j < abi[i]['inputs'].length; ++j) {
      if (j === abi[i]['inputs'].length - 1) {
        func = func + abi[i]['inputs'][j].type;
      } else {
        func = func + abi[i]['inputs'][j].type + ',';
      }
    }
    func = func + ')';
    let funcSig = sig + ':  ' + func;
    funcSigns = funcSigns + funcSig.toString() + '\n';
    console.log(funcSig);
  }

  return funcSigns;

  // var sig = web3.eth.abi.encodeFunctionSignature(functionName);
  // return sig;
}

export { encodeFunctionSignature, encodeFuncSignaturesFromABI };
