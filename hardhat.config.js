require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Zq9Sf0C0TkVABV6z66OqDGuYhEQr2K8B',
      accounts: ['960c2d55dde241a5a97cc499234b4d978588134f3166fc72d72771f31aaab831'],
    },
    // other networks if needed
  },
  // other configuration settings
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};