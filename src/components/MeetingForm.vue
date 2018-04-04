<template>
<b-row>
  <b-col>
    <div id="map">
      <v-map ref="map" :zoom=5 :center="[47.413220, -1.219482]">
        <v-tilelayer url="https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibmV4dHF1ZXN0IiwiYSI6ImNqM2x1dzNkbDAxajUyd3F0bmc3b3E0dHQifQ.V4hEw7CC3e_76sNhMxwE3Q"></v-tilelayer>
        <v-marker :lat-lng="[47.413220, -1.219482]"></v-marker>
        <v-marker v-for="item in markers"  :key="item.id" :lat-lng="item.position" :visible="item.visible" :draggable="item.draggable" v-on:l-click="alert(item)"></v-marker>
      </v-map>
    </div>
  </b-col>
  <b-col>
    <h4>keine Treffen in deiner Gegend dabei?</h4>
    <p>Dann werde selbst Veranstalter. Lege einfach einen ort und einen Zeitpunkt fest.</p>
    <p><i>Klicke mit rechts (auf Mobilgeräten lange drücken) an die entsprechende Position in der Map</i></p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="inputGroup1" label="Name des Orts:" label-for="place" :description="this.positionString">
        <b-form-input id="place" type="text" v-model="form.place" required placeholder="...">
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroup2" label="Datum:" label-for="date">
        <b-form-input id="date" type="date" v-model="form.date" required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroup3" label="Zeit:" label-for="time">
        <b-form-input id="time" type="time" v-model="form.time" required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="inputGroup4" label="Kontakt:" label-for="contact">
        <b-form-input id="contact" type="text" v-model="form.contact" required placeholder="...">
        </b-form-input>
      </b-form-group>
        <b-form-group id="inputGroup5" label="Einladungstext:" label-for="contact">
          <b-form-textarea id="text" v-model="form.text" placeholder="..." :rows="3" :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </b-col>
</b-row>
</template>

<script>
export default {
  name: 'meetingForm',
  data () {
    return {
      form: {
        place: '',
        date: '',
        time: '',
        contact: '',
        text: '',
        lat: '',
        lng: '',
        positionString: ''
      },
      show: false,
      markers: [
        {id: 'm1', position: {lat: 51.505, lng: -0.09}, draggable: true, visible: true},
        {id: 'm2', position: {lat: 51.8905, lng: -0.09}, draggable: true, visible: false},
        {id: 'm3', position: {lat: 51.005, lng: -0.09}, draggable: true, visible: true},
        {id: 'm4', position: {lat: 50.7605, lng: -0.09}, draggable: true, visible: false}
      ]
    }
  },
  mounted: function () {
    this.$refs.map.mapObject.on('contextmenu ', this.onMapDblclick)
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.place = ''
      this.form.date = ''
      this.form.time = ''
      this.form.contact = ''
      this.form.text = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    onMapDblclick: function (e) {
      console.log(e)
      this.positionString = 'Position: ' + e.latlng.lat.toString() + ', ' + e.latlng.lng.toString()
      this.lng = e.latlng.lat.toString()
      this.lat = e.latlng.lng.toString()
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
#map
{
height: 700px;
}
</style>

<!-- b-form-1.vue -->
