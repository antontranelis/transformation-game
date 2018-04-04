import contract from 'truffle-contract'
import TokenContract from '@contracts/ZeitgeistToken.json'

const Token = {

  contract: null,

  instance: null,

  init: function () {
    let self = this

    return new Promise(function (resolve, reject) {
      self.contract = contract(TokenContract)
      self.contract.setProvider(window.web3.currentProvider)

      self.contract.deployed().then(instance => {
        self.instance = instance
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  },

  balanceOf: function (address) {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.balanceOf.call(
        address || window.web3.eth.defaultAccount,
        {from: window.web3.eth.accounts[0]}
      ).then(balance => {
        resolve(balance)
      }).catch(err => {
        reject(err)
      })
    })
  },

  totalSupply: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.totalSupply.call(
        {from: window.web3.eth.accounts[0]}
      ).then(pseudo => {
        resolve(window.web3.toUtf8(pseudo))
      }).catch(err => {
        reject(err)
      })
    })
  },

  transfer: function (address, amount) {
    let self = this
    console.log(amount)
    return new Promise((resolve, reject) => {
      self.instance.transfer(
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
  },

  destroy: function () {
    let self = this

    return new Promise((resolve, reject) => {
      self.instance.destroy(
        {from: window.web3.eth.accounts[0]}
      ).then(tx => {
        resolve(tx)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default Token
