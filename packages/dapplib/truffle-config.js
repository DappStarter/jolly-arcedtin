require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stock rice mirror prosper inner enter metal gauge'; 
let testAccounts = [
"0x1e3bff12e8c07c265d64f34646ad55a72543d08680ff8cf43c05f13c13dd2e01",
"0x8fec317cf18c0826832477afa1363ccf1d9ea486c55ce8999be01f73b2a78f88",
"0xe51e27a20d1dde0766f5b57e46e9b8dd708b8a5011b9c80d731d2c2f363428f6",
"0x3988fa1c8df7ad967bd9f4d00d7982ad3e1a76304ba4738e628e19ee8f2ec12b",
"0x15956a070752304c240fc91cf3e6baf6693e0493ef7b61beed163a945b1dba71",
"0xa89878986f782825127ca955dc66f9b5b304d34dbcd2582930160abf87fd72fb",
"0xaa60ac64924c90f2912773b011a06c682166a70e5060a46e4f15513fbe29f994",
"0x4ae197ad6ce20f6885e9cf536033c4e68a2619db9129087bd7e516ac4290397b",
"0x447557be0c0679b38a9940f36b582ce91ff9ab14d253d7361dd3438b79112492",
"0x1c800839948a37480687e7f0493b9a49964c7e13e51aebe80b5cf0843d118a10"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

