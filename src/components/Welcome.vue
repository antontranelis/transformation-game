<template>
<b-container>
  <h1>{{ msg }}</h1>
  <p>ist ein gesellschaftliches Experiment: Können wir spielend gemeinsam eine neue Welt erschaffen? </p>
  <hr>

  <b-row>
    <aboutBox></aboutBox>
    <toolsBox></toolsBox>
  </b-row>
  <hr>
  <b-row>
    <blockchainBox></blockchainBox>
    <b-col lg="6" sm="12">
      <div class="box">
        <h3>Ziele</h3>
        <ol>
          <li>herausfinden, ob und wie wir spielend eine neue Welt erschaffen können?</li>
          <li>technologien wie die Blockchain nutzen, um soziale Projekte zu realisieren</li>
          <li>dezentrale gemeinnützige Infrastruktur aufbauen</li>
          <li>zusammenkommen, um gemeinsam Visionen für die Zukunft zu entwickeln</li>
          <li>neue Formen der Kommunikation und Zusammenarbeit ausprobieren</li>
          <li>gemeinsam und voneinander lernen</li>
        </ol>
      </div>
    </b-col>
  </b-row>
  <hr>
  <b-button href="./#/level1">zu Level 1</b-button>
  <br><br><br>
</b-container>
</template>

<script>
import AboutBox from './AboutBox'
import ToolsBox from './ToolsBox'
import CrowdfundingBox from './CrowdfundingBox'
import BlockchainBox from './BlockchainBox'

export default {
  name: 'welcome',
  components: {
    AboutBox,
    ToolsBox,
    CrowdfundingBox,
    BlockchainBox
  },
  data () {
    return {
      msg: 'transformativ game'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#signUp
{
  position: absolute;
  top: 20px;
  display: none;
}

#pseudo
{
  color: #aaa;
}

</style>

<style>
  .box
  {
  padding: 5px;
  }
</style>
