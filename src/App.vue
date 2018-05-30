<template>
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <sidenav></sidenav>

    <topnav></topnav>

    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex row="">
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>

</template>

<script>
import Sidenav from './components/common/Sidenav';
import Topnav from './components/common/Topnav';

export default {
  name: 'app',
  components: {
    Sidenav,
    Topnav
  }
}
</script>
