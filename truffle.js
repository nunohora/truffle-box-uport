module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
    	host: "localhost",
    	port: 8545, 
    	network_id: "2",
      gas: 1000000,
    }
  }
};
