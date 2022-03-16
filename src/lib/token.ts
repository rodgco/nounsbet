import Contract from '$lib/contract';
import { getContractAddressesForChainOrThrow } from '@nouns/sdk';

import { NounsTokenABI } from '@nouns/sdk';
import type { NounsToken } from '@nouns/contracts/dist/typechain/NounsToken';
import type { NounSeed } from '@nouns/assets/dist/types';

const chainId = <string>import.meta.env.VITE_NETWORK_CHAINID;
const { nounsToken } = getContractAddressesForChainOrThrow(parseInt(chainId, 16));

import type { ethers, BigNumberish } from 'ethers';

interface INounsTokenState {
	totalSupply: BigNumberish;
}

class NounsTokenContract extends Contract<NounsToken, INounsTokenState> {
	constructor(network: string, address: string, abi: ethers.ContractInterface) {
		super(network, address, abi, { totalSupply: null }, { forceChain: true });

		this.contract.on('NounCreated', (_tokenId: BigNumberish | null, _seed: null) =>
			this.state.update((current) => ({
				...current,
				totalSupply: <number>current.totalSupply + 1
			}))
		);

		this.load();
	}

	async load() {
		await this.totalSupply();
	}

	async getSeed(id: BigNumberish): Promise<NounSeed> {
		try {
			return <NounSeed>await this.contract.seeds(id);
		} catch {
			return { background: null, body: null, accessory: null, head: null, glasses: null };
		}
	}

	async totalSupply(): Promise<BigNumberish> {
		const totalSupply = await this.contract.totalSupply();

		this.state.update((current) => ({
			...current,
			totalSupply
		}));

		return totalSupply;
	}
}

const nounsTokenInstance = new NounsTokenContract(chainId, nounsToken, NounsTokenABI);
// nounsTokenInstance.load();

export default nounsTokenInstance;
