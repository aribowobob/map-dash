<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <sidenav></sidenav>
    <topnav is-login="true" sidenav="true"></topnav>

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex row="">

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
/*
 * Landing page dengan sidenav, komponennya:
 * - Topnav dengan nama aplikasi di kiri, menu di kanan + logout
 * - Konten berisi peta
 * - Sidenav
 * - Peta di klik, muncul dialog box
 */
import Topnav from './common/Topnav';
import Sidenav from './common/Sidenav';

export default {
  name: 'complete',
  components: {
    Topnav,
    Sidenav
  }
}
</script>

<style lang="css">
</style>
