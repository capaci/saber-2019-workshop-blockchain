let abi = null
let contract = null
let userAddress = null
let contractAddress = null
let web3 = null

let $contractAddressForm = document.querySelector('#form-contract-address')
let $questionDescription = document.querySelector('#question-description')
let $userAddress = document.querySelector('#user-address')
let $userBalance = document.querySelector('#user-balance')
let $answersDescriptions = document.querySelectorAll('.answer-description-title')
let $answersResults = document.querySelectorAll('.votes-counter')


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

const render = async () => {
    renderUserInfo()
    renderVotingInfo()
}

const renderUserInfo = async () => {
    userAddress = await getUserAddress()
    updateUserAddressDOM(userAddress)
    let userBalance = await getAddressBalance(userAddress)
    updateUserBalanceDOM(userBalance)
}

const renderVotingInfo = async () => {
    let question = await getQuestion(contract)
    updateQuestionDescriptionDOM(question)

    let answerId = 0
    let answerDescription = await getAnswer(contract, answerId)
    let answerResult = await getAnswerResult(contract, answerId)
    updateAnswerDescriptionDOM(answerId, answerDescription)
    updateAnswerResultDOM(answerId, answerResult)

    answerId = 1
    answerDescription = await getAnswer(contract, answerId)
    answerResult = await getAnswerResult(contract, answerId)
    updateAnswerDescriptionDOM(answerId, answerDescription)
    updateAnswerResultDOM(answerId, answerResult)


}

const updateUserAddressDOM = address => {
    $userAddress.innerHTML = address
}

const updateUserBalanceDOM = balance => {
    $userBalance.innerHTML = balance
}

const updateQuestionDescriptionDOM = questionDescription => {
    $questionDescription.innerHTML = questionDescription
}

const updateAnswerDescriptionDOM = (id, answerDescription) => {
    $answersDescriptions[id].innerHTML = answerDescription
}

const updateAnswerResultDOM = (id, answerResult) => {
    $answersResults[id].innerHTML = answerResult
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
    setContract(contractAddress)
    render()
})


/**
 * no side-effects
 */
const getAddressBalance = async (address) => {
    let result =  await web3.eth.getBalance(address)
    return web3.utils.fromWei(result)
}

const getAnswer = async (contract, answerId) => await contract.methods.answers(answerId).call()

const getAnswerResult = async (contract, answerId) => await contract.methods.counter(answerId).call()

const getQuestion = async (contract) => await contract.methods.question().call()

const getUserAddress = async () => (await web3.eth.getAccounts())[0]

const getWinningAnswer = async (contract) => await contract.methods.question().call()
