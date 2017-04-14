pragma solidity ^0.4.2;

contract Coin {

	address minter;
	mapping (address => uint) public balances;
	
	event Sent(address from, address to, uint amount);

	function Coin() {
		minter = msg.sender;
		balances[minter] = 1000;
	}

	function mint(address receiver, uint amount) {
		if (msg.sender != minter) return;
		balances[receiver] += amount;
	}

	function sendCoins(address receiver, uint amount) {
		if (balances[msg.sender] < amount) return;

		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Sent(msg.sender, receiver, amount);
	}
}