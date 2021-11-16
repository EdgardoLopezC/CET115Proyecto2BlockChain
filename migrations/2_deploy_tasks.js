const ProcessesContract = artifacts.require("ProcessesContract.sol");

module.exports = function (deployer) {
  deployer.deploy(ProcessesContract);
};
