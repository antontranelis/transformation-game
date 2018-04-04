<template>
  <b-col lg="6" sm="12">
    <div class="box">
    <h3>address</h3>
    <span v-if="address">Your address is <b> {{address}}</b></span>
    <span v-else="address">Starte MetaMask oder scanne QR-Code deiner Karte</span></span>
  </div>
  </b-col>
</template>

<script>
  export default {
    name: 'addressBox',
    data () {
      return {
      }
    },
    computed: {
      address: function () {
        return window.web3.eth.accounts[0]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
</style>
