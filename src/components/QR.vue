<template>
  <b-container>
  <topBar></topBar>
<div>
  <h3>QR-Reader</h3>
  <b-row>
    <b-col md="4">
      <p>Scanne QR-Code deiner Karte um deinen Token zu checken</p>
        <b-img id="card" src="static/img/ether-cards4.png"></b-img>
        <br>
        <b-button id="scanButton" v-on:click="startScan">check balance</b-button>
    </b-col>
    <b-col md="8">
      <qrcode-reader id="qrReader" v-if="!paused"ref="qrReader" @decode="onDecode" :paused="paused"></qrcode-reader>
      <h5 v-if="paused">{{address}}</h5>
      <h5 v-if="paused">{{balance}}</h5>
    </b-col>
  </b-row>
  <hr>
  <b-row>
    <b-col md="6">
      <h3>Send Tokens</h3>
      <b-form @submit="sendTokens">
        <b-form-group id="addressGroup" label="Address:" label-for="address">
          <b-form-input id="address" type="text" v-model="sendForm.address" required placeholder="0x...">
          </b-form-input>
        </b-form-group>
        <b-form-group id="amountGroup" label="Amount:" label-for="amount">
          <b-form-input id="amount" type="number" v-model="sendForm.amount" required placeholder="">
          </b-form-input>
        </b-form-group>
          <b-button type="submit">Send</b-button>
      </b-form>
    </b-col>
    <b-col v-show="showMint" md="6" id=mintBox>
      <h3>Mint Tokens</h3>
      <b-form @submit="mintTokens">
        <b-form-group id="addressGroup" label="Address:" label-for="address">
          <b-form-input id="address" type="text" v-model="mintForm.address" required placeholder="0x...">
          </b-form-input>
        </b-form-group>
        <b-form-group id="amountGroup" label="Amount:" label-for="amount">
          <b-form-input id="amount" type="number" v-model="mintForm.amount" required placeholder="">
          </b-form-input>
        </b-form-group>
          <b-button type="submit">Mint</b-button>
      </b-form>
    </b-col>
  </b-row>
</div>
</b-container>
</template>

<script>
import token from '@/js/erc20Token'
import crowdsale from '@/js/crowdsale'
import TopBar from './TopBar'

export default {
  name: 'QR',
  components: {
    TopBar
  },
  data () {
    return {
      paused: true,
      address: '',
      balance: '',
      crowdsaleOwner: '',
      showMint: false,
      sendForm: {
        address: '',
        amount: ''
      },
      mintForm: {
        address: '',
        amount: ''
      }
    }
  },
  mounted: function () {
    crowdsale.init().then(() => {
      crowdsale.getOwner().then((owner) => {
        this.crowdsaleOwner = owner
        if (this.crowdsaleOwner === window.web3.eth.accounts[0]) {
          this.showMint = true
        }
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    startScan () {
      this.paused = false
    },
    onDecode (content) {
      this.address = 'address: ' + content
      if (this.showMint) this.mintForm.address = content
      this.$refs.qrReader.stopCamera()
      this.paused = true
      token.init().then(() => {
        token.balanceOf(content).then((balance) => {
          this.balance = 'balance: ' + balance / 1000000000000000000 + ' Token'
        })
      }).catch(err => {
        console.log(err)
      })
    },
    sendTokens () {
      console.log('send Token ...')
      token.init().then(() => {
        token.transfer(this.sendForm.address, this.sendForm.amount * 1000000000000000000).then((balance) => {
          location.reload()
        })
      }).catch(err => {
        console.log(err)
      })
    },
    mintTokens () {
      console.log('mint Token ...')
      crowdsale.init().then(() => {
        crowdsale.mintTokens(this.mintForm.address, this.mintForm.amount * 1000000000000000000).then((balance) => {
          location.reload()
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

#card
{
  width: 356px;
  margin-left: -15px;

}

#scanButton
{
  margin-left: 0px;
}

#qrReader
{
  height: 345px;
}

#mintBox
{
  color: #e00;

  .form-control
  {
    color: #e00;
  }

  ::placeholder
  {
    color: #e00;
  }
}
</style>
