<template>
<b-container>
  <topBar></topBar>
  <div>
    <b-row>
      <b-col>
        <h2>Level 2</h2>
        <p>sehr gut! Du bist jetzt mit der Blockchain verbunden. Besorge dir nun deine ersten Tokens!</p>
        <hr>
        <p>Gewöhnliche Währungen können nur von Banken und Zentralbanken ausgegeben werden.
          Dank Blockchanins und Smart Contracts ist heute jeder in der Lage seine eigenen Tokens zu erschaffen.
          Man muss dafür nur einen speziellen Smart Contract (den Token Contract) auf einer Blockchain hochzuladen.
        </p>
        <p>
          Anstatt Token als Zahlungsmittel oder zu Spekulation zu verwenden, möchten wir ein Spiel spielen. Es ist gleichzeitig ein gesellschaftliches Experiment.
          Token repräsentieren Punkte in diesem Spiel. Sie sollen uns zusammenbringen und helfen eine neue dezentrale Welt zu erschaffen.
          Insbesondere haben sie folgende Funktionen:</p>
          <ul>
            <li><b>Anreize setzen</b>: Spieler erhalten Punkte für die Umsetzung von Aufgaben.
            Sie motivieren uns, uns zu organisieren, Idee zu entwickeln Projekte umzusetzen, das Spiel weiterzuentwickeln und in die Breite zu tragen.
            </li>
            <li><b>Abstimmungen durchführen</b>: Die Gemeinschaft der Spieler kann dezentral über Projekte, Aufgaben, Auszahlungen und Spielregeln abstimmen.
            Umso mehr ein Spieler zu dem Spiel beiträgt, desto mehr Tokens sammelt er und umso größer ist sein Stimmgewicht.</li>
              <li><b>Projekten finanzieren</b>: Tokens können im Rahmen von Crowdfundings gegen Spenden ausgegeben werden, um mit den Erlösen Projekte zu finanzieren.</li>
            </ul>
            Das Grundprinzip dieses Spiels ist die demokratische Schöpfung von neuen Tokens.
            Die Spieler entscheiden selbst, für welche Zwecke neue Tokens erschaffen und ausgeschrieben werden und steuern so die Richtung, in welche sich das Spiel und die daraus folgenden Projekte entwickeln.
            Ob Token langfristig Punkte in ein Spiel bleiben, als Karma zu verstehen sind, einen Wert haben oder als Zahlungsmittel genutzt werden können, hängt ganz von dieser Entwicklung ab.</p>
        <p>Dieses Spiel versucht das beste aus zwei Welten zu vereinen: Die Kraft, Qualität und Gemeinschaft die entsteht, wenn Menschen an einem Ort zusammenkommen und die Möglichkeiten der Organisation und Kollaboration, welche sich online ergeben.</p>
        <p>Karten</p>
        <hr>
        <p>Je nachdem, wie du das Projekt unterstützen magst, hast du vier Möglichkeiten:</p>
      </b-col>
    </b-row>
    <br>
    <b-tabs>
      <b-tab title="1. projekt crowdfunden" active>
        <br>
        <b-row>
          <b-col>
            <p>um das Spiel auszurollen und die daraus folgenden Projekte zu realisieren, brauchen wir - neben vielen motivierten Mitspielern - auch Kapital. Unterstütze das Projekt finanziell indem du am Crowdfunding teilnimmst!</p>
          </b-col>
        </b-row>
        <hr>
        <h4>Am Token Sale teilnehmen</h4>
        <p>Ether (ETH) ist die kryptographische Wärung der Ethereum Blockchain. Sie wird innerhalb des Netzwerks für Zahlungen verwendet.
          Um an unserem <i>Token Sale</i> teilzunehmen, benötigst du zunächst Ether. Im Anschluss sende einen beliebigen ETH-Betrag an die Adresse des <i>Crowdsale&nbsp;Contract</i>: <b>{{crowdsaleAddress}}</b></p>
        <p>Der Preis für einen Token liegt bei 0,001 ETH (1 ETH = 1000 Token)</p>
        <b-row>
          <b-col md="6">
              <ol>
                <li v-bind:class="{ solved: addressExist }">erzeuge eine Ethereum-Adresse
                  <b-img v-if="addressExist" src="static/open-iconic/svg/check.svg" alt="check"></b-img>
                </li>
                <li v-bind:class="{ solved: etherBalance > 0 || tokenBalance > 0}">besorge dir Ether
                  <b-img v-if=" etherBalance > 0 || tokenBalance > 0" src="static/open-iconic/svg/check.svg" alt="check"></b-img>
                </li>
                <li v-bind:class="{ solved: tokenBalance > 0 }">sende Ether an den Crowdsale Contract
                  <b-img v-if="tokenBalance > 0" src="static/open-iconic/svg/check.svg" alt="check"></b-img>
                </li>
              </ol>
                </p>
          </b-col>
          <b-col md="6">
              <p v-if="!addressExist"><i>klicke auf das Icon um MetaMask zu öffnen und folge den Anweisungen</i></p>
              <p v-if="etherBalance == 0 && tokenBalance == 0"><i>besuche <a href="https://faucet.metamask.io/" target="_blank">diese Webseite</a> um Ether zu erhalten. (Da wir uns noch im Test Netzwerk befindne, sind Ether kostenlos)</i></p>
              <p v-if="tokenBalance == 0"><i>öffne MetaMask und sende Ether an die Addresse  des Crowdsale&nbsp;Contract</i></p>
          </b-col>
        </b-row>
        <hr>
        <h4>Projekt mit Euro unterstützen</h4>
        <p>Falls du das Crowdfunding mit Fiat-Geld (EUR, USD) unterstützen möchtest, kannst du Tokens auf Plasitkkarten im <b-link href="#/shop" traget="_blank">Shop</b-link> einkaufen. Wie du diese Karten einlösen, kannst erfährst du im nächsten Tab.</p>
      </b-tab>
      <b-tab title="2. karte einlösen">
        <br>
        <b-row>
          <b-col>
            <p><i>ether.cards</i> sind eine schöne Möglichkeit um Token vor Ort an Helfer herauszugeben, falls diese noch keine Ethereum-Adesse haben. Man kann sie Freundne und Verwanten schenken. Außerdem können wir so Tokens gegen Bar- oder Fiat-Geld angeboten werden.<br><br>
              Du hast schon Token in Form einer Karte erhalten? Dann übertrage jetzt deinen <i>Private Key</i> in MetaMask</p>
          </b-col>
        </b-row>
        <hr>
        <h4>token von Karte übertragen</h4>
        <p>Jeder Ethereum-Account besteht aus einer Adresse (vergleichbar mit einer Kontonummer) und einem <i>private Key</i>.
          Wer den <i>private Key</i> zu einer Address besitzt, ist in der lage auf den zugehörigen Account zuzugreifen und Transaktionen durchzuführen.
          Um über deinen Browser auf deinen Account zuzugreifen, musst du den <i>private Key</i> wie folgt in MetaMask übertragen:</p>
        <b-row>
          <b-col md="6">
              <ol>
                <li><i>private Key</i> aufrubbeln</li>
                <li>Metamask öffnen und <i>Import Existing DEN</i> wählen</li>
                <li>gebe deinen <i>private Key</i> ein und wähle ein Passwort für MetaMask</li>
              </ol>
              <p><br>Falls du schon einen Account in MetaMask erstellt hast, öffne das Menü oben rechts und wähle <i>Log Out</i>. Im Anschluss wähe <i>restore from seed phrase</i></p>
          </b-col>
          <b-col md="6">
              <b-img center id="card" src="static/img/ether-cards3.png"></b-img>
          </b-col>
        </b-row>
        <p><b>Wichtig: Um den Diebstahl deines Accounts zu verhindern, solltest du den private Key im Anschluss auf jeden Fall unkenntlich machen (z.B. mit einem Edding), die Karte vernichten oder an einem sicheren Ort aufbewahren!</b></p>
      </b-tab>
      <b-tab title="3. menschen treffen">
        <br>
        <b-row>
          <b-col>
            <p>Das primäre Ziel dieses Spieles ist, Menschen regional zu vernetzen und deznentrale Projekte zu starten. Gehe zu Treffen in deiner Region, um andere Spieler kennenzulernen, Ideen zu dikutieren, Netzwerke zu gründen und Projekte zu starten.<br><br>
              Jeder Teilnehmer eines erfolgreichen Treffens erhält 5 Tokens.</p>
          </b-col>
        </b-row>
        <hr>
        <h4>finde ein Treffen in deiner Region!</h4>
        <br>
        <div id="map">
          <v-map ref="map" :zoom=5 :center="[47.413220, -1.219482]">
            <v-tilelayer url="https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmV4dHF1ZXN0IiwiYSI6ImNqM2x1dzNkbDAxajUyd3F0bmc3b3E0dHQifQ.V4hEw7CC3e_76sNhMxwE3Q"></v-tilelayer>
            <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
            <v-marker v-for="item in markers"  :key="item.id" :lat-lng="item.position" :visible="item.visible" :draggable="item.draggable" v-on:l-click="alert(item)"></v-marker>
          </v-map>
        </div>
        <hr>
        <h5>kein Treffen in deiner Region geplant?</h5>
        <p>dann werde selbst zum Organisator und verdiene dir so deine ersten Token!</p>
      </b-tab>
      <b-tab title="4. aufgaben erledigen">
        <br>
        <b-row>
          <b-col>
        <ul>
          <li>Treffen organisieren</li>
          <li>Logo entwerfen</li>
          <li>Bloggen / Texte verfassen</li>
          <li>Texte übersetzen</li>
        </ul>
      </b-col>
      </b-row>
      </b-tab>
    </b-tabs>
    <hr>
    <b-button v-if="tokenBalance > 0" href="./#/level3">zu level 3</b-button>
    <br><br><br>
  </div>
</b-container>
</template>

<script>
import token from '@/js/erc20Token'
import crowdsale from '@/js/crowdsale'
import TopBar from './TopBar'
import MeetingForm from './MeetingForm'

export default {
  name: 'Level2',
  components: {
    TopBar,
    MeetingForm
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
