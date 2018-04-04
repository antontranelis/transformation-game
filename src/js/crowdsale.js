import contract from 'truffle-contract'
import MyContract from '@contracts/MyCrowdsale.json'

const Token = {

  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(MyContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  getAddress: function () {
    let self = this
    return self.instance.address
  },

  getOwner: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.owner.call(
        {from: window.web3.eth.accounts[0]}
      ).then(owner => {
        resolve(owner)
      }).catch(err => {
        reject(err)
      })
    })
  },

  mintTokens: function (address, amount) {
    let self = this
    return new Promise((resolve, reject) => {
      self.instance.mintTokens(
        address,
        amount,
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
        console.log(err)
      })
    })
  }
}

export default Token
