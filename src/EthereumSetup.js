import Web3 from 'web3';

export const greeterContract = async () => {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

    let greeterABI = [{"inputs":[{"internalType":"string","name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"stateMutability":"nonpayable","type":"function","signature":"0xfaf27bca"},{"inputs":[],"name":"greet","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function","constant":true,"signature":"0xcfae3217"}];

    let greeterAddress = '0x1af5cd98258F1782055bE23Bf191A644Ae20fb7f';

    const greeterContract = new web3.eth.Contract(greeterABI,greeterAddress)

    return greeterContract
}

export const greet = async (contract) => {
    const greet = await contract.methods.greet().call()
    return greet
}
