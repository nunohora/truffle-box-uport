import React, { Component } from 'react'
import { web3, provider } from '../../util/web3';
import { autobind } from 'core-decorators'
import Coin from '../../util/Coin';

const mainAddress = '0x25de7021b3569efc05439bc96830e35237081fbc'

export default class Home extends Component {

	constructor(props) {
		super(props)

		this.state = {
			coin: null,
			amount: 0,
			sendTo: '',
		}
	}

	componentWillMount() {
		Coin.deployed().then(instance => this.setState({ coin: instance }))
	}

	render() {
		const { coin, amount, sendTo } = this.state

		return (
		    <main className="container">
		    { coin ? 
		    	<div>
			    	<input
			    		type="text"
			    		name="amount"
			    		value={amount}
			    		onChange={this.onAmountChange}
		    		/>
			    	<input 
			    		type="text"
			    		name="address"
			    		value={sendTo}
			    		onChange={this.onAddressChange}
		    		/>
			    	<input 
			    		type="submit"
			    		name="send"
			    		onClick={this.onClick}
			    	/>
			    	<input
			    		type="button"
			    		name="balance"
			    		value="Check balance"
			    		onClick={this.onCheckBalanceClick}
		    		/>		    		
		    	</div>
		    	:
		    	null
		    }
		      Hello
		    </main>
	  	);
	}

	@autobind
	onAddressChange({ target }) {
		this.setState({ sendTo: target.value })
	}

	@autobind
	onAmountChange({ target }) {
		this.setState({ amount: target.value })
	}

	@autobind
	onCheckBalanceClick() {
		const { coin } = this.state

		const web3 = new Web3(provider);

		web3.eth.getCoinbase((err, addr) => console.log(addr));

		coin.balances.call('0xe227b145eb39c1b003fc1e3671d5e0503c2c3da6')
			.then(balance => console.log('balance: ', balance.toString()));
	}

	@autobind
	onClick(e) {
		const { coin, amount, sendTo } = this.state

		if (coin) {
			coin.sendCoins(sendTo, amount, { from: mainAddress }).then(result =>
				console.log(result)
			)
		}
	}
}