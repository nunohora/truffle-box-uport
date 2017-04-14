import Web3 from 'web3';

export const provider = new Web3.providers.HttpProvider('http://localhost:8545');

export default new Web3(provider);