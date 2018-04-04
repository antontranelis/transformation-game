<template>
<b-container>
  <topBar></topBar>
    <b-row>
      <b-col>
        <h2>level 3</h2>
        ...
      </b-col>
    </b-row>
</b-container>
</template>

<script>
import token from '@/js/erc20Token'
import crowdsale from '@/js/crowdsale'
import TopBar from './TopBar'

export default {
  name: 'Level3',
  components: {
    TopBar
  },
  data () {
    return {
      tokenBalance: 0,
      etherBalance: 0,
      crowdsaleAddress: '',
      markers: [
        {id: 'm1', position: {lat: 51.505, lng: -0.09}, draggable: true, visible: true},
        {id: 'm2', position: {lat: 51.8905, lng: -0.09}, draggable: true, visible: false},
        {id: 'm3', position: {lat: 51.005, lng: -0.09}, draggable: true, visible: true},
        {id: 'm4', position: {lat: 50.7605, lng: -0.09}, draggable: true, visible: false}
      ]
    }
  },
  computed: {
    network: function () {
      var string
      var netId = window.web3.version.network
      if (netId === '1') string = 'Ethereum Main Network'
      else if (netId === '3') string = 'Ropsten Test Network'
      else if (netId === '4') string = 'Rinkeby Test Network'
      else if (netId === '42') string = 'Kovan Test Network'
      else string = netId
      console.log('network:' + netId)
      return string
    },
    address: function () {
      return window.web3.eth.accounts[0]
    },
    web3Existe: function () {
      return window.web3Existe
    },
    addressExist: function () {
      return this.address !== undefined
    },
    ropstenConnected: function () {
      return this.network === 'Ropsten Test Network'
    }
  },
  mounted: function () {
    if (window.web3.eth.accounts[0] !== undefined) {
      token.init().then(() => {
        token.balanceOf(window.web3.eth.accounts[0]).then((balance) => {
          this.tokenBalance = balance / 1000000000000000000
        })
      }).catch(err => {
        console.log(err)
      })
      window.web3.eth.getBalance(window.web3.eth.accounts[0], (error, ebalance) => {
        this.etherBalance = ebalance.c[0] / 1000000000000000000
        console.log('ether: ' + ebalance / 1000000000000000000)
        if (error) {
          console.log(error)
        }
      })
    }
    crowdsale.init().then(() => {
      this.crowdsaleAddress = crowdsale.getAddress()
    }).catch(err => {
      console.log(err)
    })
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

#card
{
  width: 356px;
}

#map
{
height: 700px;
}

.nav-link
{
  color: #000 !important;
  font-weight: bold;
}

.solved
{
  font-weight: bold;
}
</style>
