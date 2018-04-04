<template>
  <b-col  lg="6" sm="12">
    <div class="box">
    <h3>score</h3>
    <span>You have <b>{{balance}}</b> Transformation Tokens</span>
  </div>
  </b-col>
</template>

<script>
import token from '@/js/erc20Token'

export default {
  name: 'balanceBox',
  data () {
    return {
      balance: 0
    }
  },
  beforeCreate: function () {
    token.init().then(() => {
      token.balanceOf(window.web3.eth.accounts[0]).then((balance) => {
        this.balance = balance / 1000000000000000000
      })
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
