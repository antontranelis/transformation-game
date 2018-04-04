<template>
<b-col lg="6" sm="12">
  <div class="box">
    <h3>crowdfunding</h3>
    <span>um das Spiel auszurollen und die daraus folgenden Projekte zu realisieren, brauchen wir - neben vielen motivierten Mitspielern - auch Kapital
      <br><br>um das Spiel finanziell zu unterstützen, sende Ether an die  Adresse {{ crowdsaleAddress }} und erhalte 1000&nbsp;Token pro ETH
      <br><br>um das Projekt mit Fiat-Geld (EUR, USD, ... ) zu unterstützen besuche den <a href="#/shop">Crowdfunding Shop</a>
    </span>
  </div>
</b-col>
</template>

<script>
import crowdsale from '@/js/crowdsale'

export default {
  name: 'crowdfundingBox',
  data () {
    return {
      crowdsaleAddress: ''
    }
  },
  beforeCreate: function () {
    crowdsale.init().then(() => {
      this.crowdsaleAddress = crowdsale.getAddress()
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style lang="scss" scoped>


    #address{
      color: #aaa
    }

</style>
