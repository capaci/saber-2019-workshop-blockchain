let abi = null
let contract = null
let userAddress = null
let contractAddress = null
let web3 = null

let $contractAddressForm = document.querySelector('#form-contract-address')
let $userAddress = document.querySelector('#user-address')
let $userBalance = document.querySelector('#user-balance')


/**
 * side-effected
 */
window.addEventListener('load', async () => {
    response = await fetch('contracts/abi.json')
    abi = await response.json()

    // Modern dapp browsers...
    if (window.ethereum) {
        web3 = new Web3(ethereum)
        try {
            // Request account access if needed
            result = await ethereum.enable()
        }
        catch (err) {
            console.log(err)
        }
    }
    // Legacy dapp browsers, checking if Web3 has been injected by the browser (Mist/MetaMask)
    else if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider)
    } else {
        window.alert('No web3? You should consider trying MetaMask!')
    }

    await renderUserInfo()
})


const renderUserInfo = async () => {
    let userAddress = await getUserAddress()
    updateUserAddress(userAddress)
    let userBalance = await getAddressBalance(userAddress)
    updateUserBalance(userBalance)
}

const updateUserAddress = async (address) => {
    $userAddress.innerHTML = address
}

const updateUserBalance = async (balance) => {
    $userBalance.innerHTML = balance
}

const setContract = (contractAddress) => {
    contract = new web3.eth.Contract(abi, contractAddress)
}


/**
 * listeners
 */
$contractAddressForm.addEventListener('submit', (e) => {
    e.preventDefault()
    contractAddress = e.target.elements['input-contract-address'].value
    console.log('a', e.target.elements['input-contract-address'])
    setContract(contractAddress)
})


/**
 * no side-effects
 */
const getUserAddress = async () => (await web3.eth.getAccounts())[0]

const getAddressBalance = async (address) => {
    let result =  await web3.eth.getBalance(address)
    return web3.utils.fromWei(result)
}
