<template lang="html">
  <v-toolbar app="">
    <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <div class="text-xs-center pr-3">

      <v-list class="pa-0" style="background: none;">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://dummyimage.com/60x60/000000/fff.jpg&text=map">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{userRealName}}</v-list-tile-title>
          </v-list-tile-content>

          <v-spacer></v-spacer>

          <v-list-tile-action style="min-width:36px;">
            <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition">
              <v-btn icon light slot="activator">
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-for="item in userMenus" :key="item.title" value="true" :to="item.link" router>
                  <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

    </div>
  </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters ({
      userRealName: 'getRealName',
      userMenus: 'getUserMenus'
    }),

    drawer: {
      get () {
        return this.$store.state.menu.drawer;
      },
      set () {
        this.$store.commit('toggleDrawer');
      }
    }
  }
}
</script>

<style lang="css">
</style>
