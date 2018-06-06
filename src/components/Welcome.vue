<template lang="html">
  <v-app>
    <vue-progress-bar></vue-progress-bar>

    <topnav is-login="false" sidenav="false"></topnav>

    <v-content>
      <v-jumbotron color="primary" dark>
        <v-container fluid fill-height>
          <v-layout align-center>
            <v-flex>
              <h3 class="display-3">Webmap App Boilerplate</h3>
              <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
              <v-divider class="my-3"></v-divider>
              <div class="title mb-3">Vivamus velit lorem, pellentesque at quam!</div>
              <v-btn large class="mx-0">See more</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>

      <v-container fluid grid-list-md>
        <v-data-iterator
          :items="items"
          :rows-per-page-items="rowsPerPageItems"
          :pagination.sync="pagination"
          content-tag="v-layout"
          hide-actions
          row
          wrap>
          <v-flex
            slot="item"
            slot-scope="props"
            xs12
            sm6
            md4
            lg3>
            <v-card>
              <v-card-title><h4>{{ props.item.name }}</h4></v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>Calories:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Fat:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Carbs:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Protein:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Sodium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Calcium:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>Iron:</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-data-iterator>
      </v-container>

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

export default {
  name: 'welcome',
  components: {
    Topnav
  },
  data: () => ({
    rowsPerPageItems: [8],
    pagination: {
      rowsPerPage: 8
    },
    items: [
      {
        value: false,
        name: 'Lorem ipsum',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: '14%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Dolor sit amet',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%'
      },
      {
        value: false,
        name: 'Consectetur',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: '6%',
        iron: '7%'
      },
      {
        value: false,
        name: 'Adipiscing elit',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%'
      },
      {
        value: false,
        name: 'Nam molestie',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: '7%',
        iron: '16%'
      },
      {
        value: false,
        name: 'Jermentum purus',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: '0%',
        iron: '0%'
      },
      {
        value: false,
        name: 'Eu maximus',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: '0%',
        iron: '2%'
      },
      {
        value: false,
        name: 'Fusce sodales',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: '0%',
        iron: '45%'
      }
    ]
  })
}
</script>

<style lang="css">
</style>
