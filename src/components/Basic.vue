<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content class="grey lighten-2" light>
      <v-container fluid grid-list-md>

        <stats></stats>

        <v-layout row wrap>
          <v-flex xs12 md6>
            <data-table></data-table>
          </v-flex>

          <v-flex xs12 md6>
            <column-chart></column-chart>
          </v-flex>
        </v-layout>

      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Topnav from './common/Topnav';
import Stats from './Stats';
import DataTable from './DataTable';
import ColumnChart from './ColumnChart';

export default {
  name: 'basic',
  components: {
    Topnav, Stats, DataTable, ColumnChart
  }
}
</script>
