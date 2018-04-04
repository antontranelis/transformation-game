<template>
  <b-row id="top_bar">
    <b-col xl="6" md="12"><span><b>address</b>:&nbsp;{{address}}</span></b-col>
    <b-col xl="2" md="12"><b>token</b>:&nbsp;{{token}}</b-col>
    <b-col xl="4" md="12"><b>network</b>:&nbsp;{{network}}</b-col>
  </b-row>
</template>

<script>
import token from '@/js/erc20Token'

export default {
  name: 'topBar',
  data: function () {
    return {
      network: '',
      address: '',
      token: 0
    }
  },
  mounted: function () {
    let self = this
    window.web3.eth.getAccounts(function (error, result) {
      token.init().then(() => {
        token.balanceOf(window.web3.eth.accounts[0]).then((balance) => {
          self.token = balance / 1000000000000000000
        })
      }).catch(err => {
        console.log(err)
      })
      self.address = window.web3.eth.accounts[0]
      if (error) {
        console.log(error)
      }
      setInterval(function () {
        if (window.web3.eth.accounts[0] !== self.address) {
          console.log(window.web3.eth.accounts[0] + ',' + self.address)
          self.address = window.web3.eth.accounts[0]
          location.reload()
        }
      }, 1000)
    })
    window.web3.version.getNetwork(function (error, result) {
      var string
      var netId = window.web3.version.network
      if (netId === '1') string = 'Ethereum Main Network'
      else if (netId === '3') string = 'Ropsten Test Network'
      else if (netId === '4') string = 'Rinkeby Test Network'
      else if (netId === '42') string = 'Kovan Test Network'
      else string = netId
      self.network = string
      if (error) {
        console.log(error)
      }
    })
    if (window.web3 === undefined) {
      console.log('yes')
      setInterval(function () {
        console.log('iteration')
        if (window.web3 !== undefined) {
          console.log('found web3')
          location.reload()
        }
      }, 1000)
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#top_bar
{
  margin-top: -50px;
  margin-bottom: 50px;
}
</style>
