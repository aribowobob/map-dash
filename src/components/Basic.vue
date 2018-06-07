<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm6 md3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md3>
            Lorem ipsum
          </v-flex>
          <v-flex xs12 sm6 md3>
            Lorem ipsum
          </v-flex>
        </v-layout>
      </v-container>
      <!-- <ul>
        <li>stats</li>
        <li>graph</li>
        <li>table</li>
      </ul> -->
    </v-content>
  </v-app>
</template>

<script>
import Topnav from './common/Topnav';

export default {
  name: 'basic',
  components: {
    Topnav
  }
}
</script>

<style lang="css">
</style>
