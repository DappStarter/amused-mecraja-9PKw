require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift repeat night hour gesture fantasy equal giggle'; 
let testAccounts = [
"0x3251939bb5255c494c69b52543377f232d125b1b03fda42e322f25e9e9e1103c",
"0x617faab989d31b46b61c7fd9972064b406d5894070f418adbd8f69b3f4c24b20",
"0x20d4a2168b069bff15021a348f64efca2c8eefc1050ed4d372feb80f6e3e1d0b",
"0x7c05429fb97dfbb496ce2631ed69ec8cf7c3c9bef329f503e33ca6760ee15332",
"0x1153f48f0af6c7d30690f5818170e1d91578ae3ac8a9a50380744c5dd27a9044",
"0x209861d7add73a380e1a6ae06db2fedf296bacb92ee82d98b846071e1e434de2",
"0x9353bcb7d7cd17cf4996997b460f40dbde66d557c7f29dba81f4a63f947b4536",
"0xf37a91d352ec34f580396e125b7b1db9308b7dedc452bb6650f4eaa538e8eec6",
"0xeb20effb9ae4ce39e161faa8206e16f8d41f51477f852bd801cb542cba333d57",
"0x9fff01713647f8fc89a8be1b2d74e750516cda8db50be37b1c82a648e164f53d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

