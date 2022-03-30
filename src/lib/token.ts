import Contract from '$lib/contract';
import { getContractAddressesForChainOrThrow } from '@nouns/sdk';

import { NounsTokenABI } from '@nouns/sdk';
import type { NounsToken } from '@nouns/contracts/dist/typechain/NounsToken';
import type { NounSeed } from '@nouns/assets/dist/types';

import { get } from 'svelte/store';

const chainId = <string>import.meta.env.VITE_NOUNS_CHAINID;
const { nounsToken } = getContractAddressesForChainOrThrow(parseInt(chainId, 16));

import { ethers, BigNumber, type BigNumberish } from 'ethers';

interface INounsTokenState {
	totalSupply: BigNumberish;
	seeds: Record<number, NounSeed>;
}

function deNumberish(n: BigNumberish): number {
	if (typeof n === 'string') return parseInt(n);
	if (n instanceof BigNumber) return n.toNumber();
	if (typeof n === 'number') return n;
	return Number(n);
}

class NounsTokenContract extends Contract<NounsToken, INounsTokenState> {
	constructor(network: string, address: string, abi: ethers.ContractInterface) {
		super(network, address, abi, { totalSupply: null, seeds: {} }, { forceRPCProvider: true });

		this.contract.on('NounCreated', (tokenId: BigNumberish, seed: NounSeed) => {
			const id = deNumberish(tokenId);
			this.state.update((current) => {
				current.seeds[id] = seed;
				return {
					...current,
					totalSupply: <number>current.totalSupply + 1
				};
			});
		});

		this.load();
	}

	async load() {
		await this.totalSupply();
	}

	async getSeed(tokenId: BigNumberish, useCache = true): Promise<NounSeed> {
		const id = deNumberish(tokenId);
		// Is id cached?
		if (useCache && get(this.state).seeds[id]) {
			return get(this.state).seeds[id];
		}
		try {
			const seed = <NounSeed>await this.contract.seeds(id);
			// Cache seed
			if (useCache)
				this.state.update((current) => {
					current.seeds[id] = seed;
					return current;
				});
			return seed;
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

export default nounsTokenInstance;
