/* eslint-disable @typescript-eslint/no-non-null-assertion */
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';
import type { HardhatUserConfig } from 'hardhat/config';
import * as dotenv from 'dotenv';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task(
//   'accounts',
//   'Prints the list of accounts',
//   async (_taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment, HardhatEthersHelpers) => {
//     const accounts = await hre.ethers.getSigners();

//     for (const account of accounts) {
//       console.log(account.address);
//     }
//   }
// );

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.6',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	paths: {
		artifacts: '../src/artifacts'
	},
	typechain: {
		outDir: '../src/types/contracts',
		target: 'ethers-v5',
		alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
		externalArtifacts: ['externalArtifacts/*.json'] // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
	},
	networks: {
		localhost: {
			url: 'http://127.0.0.1:8545'
		},
		hardhat: {},
		remote: {
			url: process.env.STAGING_URL || '',
			accounts: [process.env.PRIVATE_KEY || ''],
			gas: 6000000, // Gas sent with each transaction (default: ~6700000)
			gasPrice: 3000000000 // 3 gwei (in wei) (default: 100 gwei)
		}
	}
};

export default config;
