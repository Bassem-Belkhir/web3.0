//https://eth-ropsten.alchemyapi.io/v2/5cPUV1h0WXkdA4_rVn1tDQJiqZcFsRsG

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.11",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5cPUV1h0WXkdA4_rVn1tDQJiqZcFsRsG",
      accounts: [
        "9be47809d8c0751c4988e01c8d55a30c4eb0a6ead39cab6efee60e5d68c498af",
      ],
    },
  },
};
