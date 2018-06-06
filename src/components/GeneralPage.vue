<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <topnav is-login="true" sidenav="false"></topnav>

    <v-content>
      <v-container fluid fill-height class="no-padding">
        <v-layout>
          <v-flex row="">
            <l-map :zoom="zoom" :center="center">

              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

              <l-marker :lat-lng="marker" :draggable="false">
                <l-popup :content="text"></l-popup>
              </l-marker>

            </l-map>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
/*
 * General landing page, komponennya:
 * - Topnav dengan nama aplikasi di kiri, menu di kanan + logout
 * - Konten berisi peta
 * - Peta di klik, muncul dialog box
 */
import Topnav from './common/Topnav';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';

export default {
  name: 'general',
  components: {
    Topnav,
    LMap, LTileLayer, LMarker, LPopup
  },
  data: () => ({
    zoom: 15,
    center: L.latLng(-7.47056, 110.21778),
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: L.latLng(-7.47056, 110.21778),
    text: 'Nunc arcu sapien, fermentum vitae hendrerit ornare, maximus non ante. Vivamus sit amet sapien condimentum, tempus est ut, feugiat mauris.'
  })
}
</script>

<style lang="css">
.no-padding {
  padding: 0;
}
</style>
