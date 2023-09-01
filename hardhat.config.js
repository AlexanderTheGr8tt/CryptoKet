/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

// const fs = require("fs");

// require("@nomicfoundation/hardhat-toolbox");

// const privateKey = fs.readFileSync(".secret").toString().trim();

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   },
//   solidity: "0.8.4",
// };
