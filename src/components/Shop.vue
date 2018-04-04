<template>
  <b-container>
<div>
  <b-row>
    <b-col>
      <h2>Shop</h2>
      <p>Um das Spiel zu unterstützen, kaufe Token-Karten und bringe sie in Umlauf!</p>
      <hr>
    </b-col>
  </b-row>
  <b-row>
    <b-col md="6">
      Eine Karte enthält 10 Token.
      <br>
        <ol>
          <li>1 Karte = 10€</li>
          <li>5 Karten = 45€</li>
          <li>10 Karten = 80€</li>
          <li>20 Karten = 140€</li>
          <li>50 Karten = 300€</li>
        </ol>
        <p>zzgl. 5€ Versand</p>
    </b-col>
    <b-col md="6">
        <b-img center id="card" src="static/img/ether-cards2.png"></b-img>
    </b-col>
  </b-row>
  <hr>
</div>
</b-container>
</template>

<script>

export default {
  name: 'Level1',
  components: {
  },
  data () {
    return {
    }
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

.solved
{
  font-weight: bold;
}
</style>
