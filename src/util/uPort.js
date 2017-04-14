import { Connect } from 'uport-connect'

export const uPort = new Connect('myDapp')

export const web3 = uPort.getWeb3()

export const provider = uPort.getProvider()
