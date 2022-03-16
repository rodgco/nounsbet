import Contract from '$lib/contract';
import { getContractAddressesForChainOrThrow } from '@nouns/sdk';

import { NounsDescriptorABI } from '@nouns/sdk';
import type { NounsDescriptor } from '@nouns/contracts/dist/typechain/NounsDescriptor';
// import type { NounSeed } from '@nouns/assets/dist/types';

const chainId = <string>import.meta.env.VITE_NETWORK_CHAINID;
const { nounsDescriptor } = getContractAddressesForChainOrThrow(parseInt(chainId, 16));

import type { BigNumberish, ethers } from 'ethers';

interface INounsDescriptorState {
	accessoryCount: BigNumberish;
	backgroundCount: BigNumberish;
	bodyCount: BigNumberish;
	glassesCount: BigNumberish;
	headCount: BigNumberish;
}

class NounsDescriptorContract extends Contract<NounsDescriptor, INounsDescriptorState> {
	constructor(network: string, address: string, abi: ethers.ContractInterface) {
		super(
			network,
			address,
			abi,
			{
				accessoryCount: null,
				backgroundCount: null,
				bodyCount: null,
				glassesCount: null,
				headCount: null
			},
			{ forceChain: true }
		);
	}

	async load() {
		await this.getAccessoryCount();
		await this.getBackgroundCount();
	}

	async getColorFromPalette(palleteIndex: BigNumberish, colorIndex: BigNumberish): Promise<string> {
		const color = await this.contract.palettes(palleteIndex, colorIndex);
		return color;
	}

	async getAccessoryCount() {
		const accessoryCount = await this.contract.accessoryCount();

		this.state.update((current) => ({
			...current,
			accessoryCount
		}));
	}

	async getBackgroundCount() {
		const backGroundNT = this.contract.backgroundCount();

		const accessoryCount = await this.contract.accessoryCount();

		this.state.update((current) => ({
			...current,
			accessoryCount
		}));
	}
	}

	async getHead(id: BigNumberish): Promise<string> {
		const part = await this.contract.heads(id);
		return part;
	}

	async getBody(id: BigNumberish): Promise<string> {
		const part = await this.contract.bodies(id);
		return part;
	}
}

const nounsDescriptorInstance = new NounsDescriptorContract(
	chainId,
	nounsDescriptor,
	NounsDescriptorABI
);

export default nounsDescriptorInstance;
