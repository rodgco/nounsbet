import Contract from '$lib/contract';

const network = <string>import.meta.env.VITE_NETWORK_CHAINID;
const contractAddress = <string>import.meta.env.VITE_DESCRIPTOR_ADDRESS;
import { NounsDescriptorABI } from '@nouns/contracts';
import type { NounsDescriptor as INounsDescriptor } from '@nouns/contracts/dist/typechain/NounsDescriptor';

import type { BigNumberish, ethers } from 'ethers';

class NounsDescriptor extends Contract<INounsDescriptor, null> {
	constructor(network: string, address: string, abi: ethers.ContractInterface) {
		super(network, address, abi, null, { forceChain: true });
	}

	async getColorFromPalette(palleteIndex: BigNumberish, colorIndex: BigNumberish): Promise<string> {
		const color = await this.contract.palettes(palleteIndex, colorIndex);
		return color;
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

const nounsDescriptor = new NounsDescriptor(network, contractAddress, NounsDescriptorABI);

export default nounsDescriptor;
