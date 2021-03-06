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
		const accessoryCount = await this.contract.accessoryCount();
		const backgroundCount = await this.contract.backgroundCount();
		const bodyCount = await this.contract.bodyCount();
		const glassesCount = await this.contract.glassesCount();
		const headCount = await this.contract.headCount();

		this.state.update((current) => ({
			...current,
			accessoryCount,
			backgroundCount,
			bodyCount,
			glassesCount,
			headCount
		}));

		return [accessoryCount, backgroundCount, bodyCount, glassesCount, headCount];
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

		return accessoryCount;
	}

	async getBackgroundCount() {
		const backgroundCount = await this.contract.backgroundCount();

		this.state.update((current) => ({
			...current,
			backgroundCount
		}));

		return backgroundCount;
	}

	async getBodyCount() {
		const bodyCount = await this.contract.bodyCount();

		this.state.update((current) => ({
			...current,
			bodyCount
		}));

		return bodyCount;
	}

	async getGlassesCount() {
		const glassesCount = await this.contract.glassesCount();

		this.state.update((current) => ({
			...current,
			glassesCount
		}));

		return glassesCount;
	}

	async getHeadCount() {
		const headCount = await this.contract.headCount();

		this.state.update((current) => ({
			...current,
			headCount
		}));

		return headCount;
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
nounsDescriptorInstance.load();

export default nounsDescriptorInstance;
