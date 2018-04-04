<template>
  <b-container>
    <div class="card">
      <span id="cardtext_address">Your Address</span>
      <qrcode value="" id="qrcode" ref="qrcode" :options="{ size: 100 }"></qrcode>
      <p id="address"> {{address}} </p>
    </div>
  </b-container>
</template>

<script>

export default {
  name: 'topBar',
  data: function () {
    return {
      network: '',
      token: 0
    }
  },
  computed: {
    address: function () {
      return window.web3.eth.accounts[0]
    }
  },
  beforeCreate: function () {
    let self = this
    window.web3.eth.getAccounts(function (error, result) {
      self.$refs.qrcode.value = result[0]
      if (error) {
        console.log(error)
      }
    })
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

.card
{
  background-color: #000;
  height: 330px;
  width: 514px;
  border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 40px 0 rgba(0, 0, 0, 0.29);
}

#cardtext_address
{
  color: #fff;
  margin-top: 30px;
  margin-left: 50px;
  font-size: 17px;

}

#qrcode
{
  margin-top: 10px;
  margin-left: 37px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
}

#address
{
  font-size: 17px;
  margin-top: 35px;
  margin-left: 37px;
  margin-right: 37px;
  background-color: #fff;
  text-align: center;
  color: #000;
  border-radius: 10px;
  line-height: 35px

}

</style>
