<template>
  <b-container>
    <topBar></topBar>
<div>
  <b-row>
    <b-col>
      <h2>Level 1</h2>
      <p>verbinde deinen Browser mit der Ethereum Blockchain</p>
      <hr>
      <p>der einfachste Weg dich zu verbinden ist die Installation von MetaMask. MetaMask ist eine Erweiterung für deinen Web Browser. Nachdem du dich verbunden hast, kannst du mit deinem Browser DApps (dezentrale Apps) nutzen</p>
      <p>wir werden diese DApp nutzen, um uns dezentral zu organisieren. Zum Beispiel indem wir ...</p>
      <ul>
        <li><b>Cowdfundings</b> für Projkete durchführen</li>
        <li><b>Spielpunke (Token)</b> für die Erledigung von Aufgaben ausschreiben und vertielen</li>
        <li><b>Abstimmungen</b> über Projekte, Aufgaben und die Spielregeln durchführen</li>
      </ul>
      <p>während der Großteil des Spieles vor Ort, in der realen Welt von Mensch zu Mensch stattfindet, ist die DApp ein Hilfsmittel um Projekte und Mensch zu Verbinden, demokratische Kontrolle zu ermöglichen und Anreize zu setzen</p>
      <hr>
    </b-col>
  </b-row>
  <h5>um Level 1 abzuschließen ...</h5>
  <b-row>
    <b-col md="6">
        <ol>
          <li v-bind:class="{ solved: web3Existe }">installiere MetaMask <b-img v-if="web3Existe" src="static/open-iconic/svg/check.svg" alt="check"></b-img></li>
          <li v-bind:class="{ solved: ropstenConnected }">verbinde dich mit dem Ethereum Ropsten Testnet <b-img v-if="ropstenConnected" src="static/open-iconic/svg/check.svg" alt="check"></b-img></li>
        </ol>
    </b-col>
    <b-col md="6">
        <p v-if="!web3Existe"><i>besuche <a href="https://metamask.io/" target="_blank">metamask.io</a> um die MetaMask für deinen Browser herunterzuladen und zu installieren. Kehre im Anschluss hierher zurück und lade die Webseite neu</i></p>
        <p v-if="!ropstenConnected"><i>rechts oben neben der Addressleiste deines Browswers befindet sich ein kleines Icon, welches einen orangen Fuchs zeigt. Klicke auf dieses Icon um MetaMask zu öffnen. Im Anschluss klicke oben links um eine Liste aller verfügbaren Netzwerke zu erhalten. Wähle das "Ropsten Test Netzwerk" aus</i></p>
    </b-col>
  </b-row>
</div>
<hr>
<b-button v-if="web3Existe && ropstenConnected" href="./#/level2">zu Level 2</b-button>
<br><br><br>
</b-container>
</template>

<script>
import TopBar from './TopBar'

export default {
  name: 'Level1',
  components: {
    TopBar
  },
  data () {
    return {
      ropstenConnected: false
    }
  },
  computed: {
    web3Existe: function () {
      return window.web3Existe
    }
  },
  beforeCreate: function () {
    let self = this
    window.web3.version.getNetwork(function (error, result) {
      var string
      var netId = window.web3.version.network
      if (netId === '1') string = 'Ethereum Main Network'
      else if (netId === '3') string = 'Ropsten Test Network'
      else if (netId === '4') string = 'Rinkeby Test Network'
      else if (netId === '42') string = 'Kovan Test Network'
      else string = netId
      self.network = string
      if (netId === '3') self.ropstenConnected = true
      if (error) {
        console.log(error)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#top_bar
{
  margin-top: -50px;
  margin-bottom: 50px;
}

.solved
{
  font-weight: bold;
}
</style>
