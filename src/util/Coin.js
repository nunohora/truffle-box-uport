import contract from 'truffle-contract'
import { provider } from './web3'
import CoinArtifacts from '../../build/contracts/Coin'

const Coin = contract(CoinArtifacts)
Coin.setProvider(provider)

export default Coin