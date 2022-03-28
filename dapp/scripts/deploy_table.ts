// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';
import { Interface } from 'ethers/lib/utils';
import { default as NounsbetTableABI } from '../../src/artifacts/contracts/NounsbetTable.sol/NounsbetTable.json';

async function main() {
	console.log('Working on NounsbetTable');
	try {
		const nounsbetTableContractFactory = await ethers.getContractFactory('NounsbetTable');
		console.log('\tDeploying...');
		const nounsbetContract = await nounsbetTableContractFactory.deploy();
		await nounsbetContract.deployed();
		console.log('\tContract deployed to:', nounsbetContract.address);

		const nounsbetTableProxyAdminContractFactory = await ethers.getContractFactory(
			'NounsbetTableProxyAdmin'
		);
		console.log('\tDeploying...');
		const nounsbetProxyAdminContract = await nounsbetTableProxyAdminContractFactory.deploy();
		await nounsbetProxyAdminContract.deployed();
		console.log('\tContract deployed to:', nounsbetProxyAdminContract.address);

		const nounsbetTableProxyContractFactory = await ethers.getContractFactory('NounsbetTableProxy');
		console.log('\tDeploying...');
		const nounsbetProxyContract = await nounsbetTableProxyContractFactory.deploy(
			nounsbetContract.address,
			nounsbetProxyAdminContract.address,
			new Interface(NounsbetTableABI).encodeFunctionData('initialize', [])
		);
		await nounsbetProxyContract.deployed();
		console.log('\tContract deployed to:', nounsbetProxyContract.address);
	} catch (error) {
		console.log('Error ===>', error);
	}
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
