import { ethers, upgrades } from 'hardhat';

async function main() {
	console.log('Working on NounsbetTable');
	try {
		const nounsbetTableContractFactory = await ethers.getContractFactory('NounsbetTable');
		console.log('\tDeploying...');
		const nounsbetContract = await upgrades.deployProxy(nounsbetTableContractFactory);
		await nounsbetContract.deployed();
		console.log('\tContract deployed to:', nounsbetContract.address);
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
