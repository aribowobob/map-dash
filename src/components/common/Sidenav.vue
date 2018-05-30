<template lang="html">
  <v-navigation-drawer class="blue lighten-5" width="250" light fixed :mini-variant.sync="mini" :value="drawer" app>

    <v-list class="pa-0">
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://dummyimage.com/60x60/000000/fff.jpg&text=Logo">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>[Application Name]</v-list-tile-title>
        </v-list-tile-content>

        <v-spacer></v-spacer>

        <v-list-tile-action style="min-width:36px;">
          <v-btn icon @click.native.stop="toggleMiniSidenav">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>

    <v-list>
      <template v-for="item in items">

        <v-list-group
          v-if="item.items && item.items.length > 0"
          v-model="item.active"
          :key="item.title"
          no-action>
          <v-list-tile slot="activator">
            <v-list-tile-action class="pr-1 pl-2 mr-1">
              <v-icon :class="isActiveParentMenu(item.title) ? 'blue--text' : ''" :title="item.title"  light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content :class="isActiveParentMenu(item.title)?'blue--text': ''">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="clickMenu(subItem)">
            <v-list-tile-content :class="isActiveMenuItem(subItem.title)?'blue--text': ''">
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="item.title"
          @click="clickMenu(item)">
          <v-list-tile-action class="pr-1 pl-2 mr-1">
            <v-icon :class="isActiveMenuItem(item.title)?'blue--text': ''" :title="item.title"  light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content :class="isActiveMenuItem(item.title)?'blue--text': ''">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </template>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      items: [
        {
          icon: 'local_activity',
          title: 'Attractions'
        },
        {
          icon: 'restaurant',
          title: 'Dining',
          active: false,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          icon: 'school',
          title: 'Education'
        },
        {
          icon: 'directions_run',
          title: 'Family'
        },
        {
          icon: 'healing',
          title: 'Health'
        },
        {
          icon: 'content_cut',
          title: 'Office'
        },
        {
          icon: 'local_offer',
          title: 'Promotions'
        }
      ]
    };
  },
  computed: {
    ...mapGetters ({
      activeMenuItem: 'getActiveMenuItem'
    }),

    mini: {
      get () {
        return this.$store.state.menu.mini;
      },
      set () {
        this.$store.commit('toggleMini');
      }
    },

    drawer: {
      get () {
        return this.$store.state.menu.drawer;
      }
    }
  },
  methods: {
    clickMenu (menuItem) {
      this.$store.commit('setActiveMenuItem', menuItem.title);

      for (var i in this.items) {
        if (!this.isActiveParentMenu(this.items[i].title) && this.items[i].active) {
          this.items[i].active = false;
        }
      }
    },
    toggleMiniSidenav () {
      this.mini = !this.mini;

      for (let i in this.items) {
        if (this.items[i].items) {
          this.items[i].active = false;
        }
      }
    },
    isActiveMenuItem (title) {
      return this.activeMenuItem.includes(title);
    },
    isActiveParentMenu (title) {
      let self = this;
      let matchedChild = [];
      for (let i in this.items) {
        if (this.items[i].title === title && this.items[i].items) {
          matchedChild = this.items[i].items.filter(function (data) {
            return self.isActiveMenuItem(data.title);
          });
        }
      }
      return matchedChild.length > 0;
    }
  }
}
</script>

<style lang="css">
</style>
