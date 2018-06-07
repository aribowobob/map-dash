<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content class="grey lighten-2" light>

      <jumbotron/>

      <data-iterator/>

    </v-content>

  </v-app>
</template>

<script>
/*
 * Topnav dengan nama aplikasi di kiri, link login di kanan
 * Konten berisi Jumbotron, data-iterator
 * Ada state untuk flag display login form: visible/hidden(as modal)
 */
import Topnav from './common/Topnav';
import Jumbotron from './Jumbotron';
import DataIterator from './DataIterator';

export default {
  name: 'welcome',
  components: {
    Topnav, Jumbotron, DataIterator
  }
}
</script>
