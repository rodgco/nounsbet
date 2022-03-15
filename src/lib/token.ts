import Contract from '$lib/contract';
import { getContractAddressesForChainOrThrow } from '@nouns/sdk';

import { NounsTokenABI } from '@nouns/sdk';
import type { NounsToken as INounsToken } from '@nouns/contracts/dist/typechain/NounsToken';

const chainId = <string>import.meta.env.VITE_NETWORK_CHAINID;
const { nounsToken } = getContractAddressesForChainOrThrow(parseInt(chainId, 16));

import { BigNumber } from 'ethers';
import type { ethers, BigNumberish } from 'ethers';

type INounsSeed = [
	[number, number, number, number, number] & {
		background: number;
		body: number;
		accessory: number;
		head: number;
		glasses: number;
	}
];
interface INounsTokenState {
	currentNounID: BigNumberish;
	currentNounSeed: INounsSeed;
}

class NounsToken extends Contract<INounsToken, INounsTokenState> {
	constructor(network: string, address: string, abi: ethers.ContractInterface) {
		super(network, address, abi, { currentNounID: 0, currentNounSeed: null }, { forceChain: true });

		this.contract.on('NounCreated', (tokenId: BigNumberish | null, seed: null) =>
			this.state.update((current) => ({
				...current,
				currentNounID: tokenId,
				currentNounSeed: seed
			}))
		);
	}

	async load() {
		// @ts-ignore: Unreachable code error
		const currentNounID = BigNumber.from((await this.contract.totalSupply()) - 1);
		const currentNounSeed = <INounsSeed>(<unknown>await this.contract.seeds(currentNounID));

		this.state.update((current) => ({
			...current,
			currentNounID,
			currentNounSeed
		}));
	}
}

const nounsTokenInstance = new NounsToken(chainId, nounsToken, NounsTokenABI);
nounsTokenInstance.load();

export default nounsTokenInstance;
