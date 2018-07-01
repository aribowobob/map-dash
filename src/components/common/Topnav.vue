<template lang="html">
  <div class="top-nav-wrapper">
    <v-toolbar app dark color="blue darken-4">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" v-if="sidenav === 'true'"></v-toolbar-side-icon>
      <v-toolbar-title @click="clickTopMenu('Welcome')">{{appName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <template v-for="menu in visibleMenuItem">
          <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition" :key="menu.title" v-if="menu.items && menu.items.length > 0">
            <v-btn flat slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in menu.items" :key="item.title" @click="clickTopMenu(item.name)">
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

          <v-btn @click="clickTopMenu(menu.name)" :key="menu.title" flat v-else>{{menu.title}}</v-btn>
        </template>
      </v-toolbar-items>
    </v-toolbar>

    <login-popup v-if="isLogin === 'false'"></login-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LoginPopup from './LoginPopup';

export default {
  props: [
    'isLogin',
    'sidenav'
  ],
  components: {
    LoginPopup
  },
  data: () => ({
    topMenus: [
      {
        title: 'Link One',
        name: 'Basic',
        visibleLogin: false,
        visibleLogout: true
      }, {
        title: 'Link Two',
        name: 'General',
        visibleLogin: true,
        visibleLogout: false
      }, {
        title: 'Link Three',
        name: 'Complete',
        visibleLogin: true,
        visibleLogout: false
      }, {
        title: 'Login',
        name: 'Login',
        visibleLogin: false,
        visibleLogout: true
      }, {
        icon: 'more_vert',
        title: 'userMenus',
        name: 'User',
        visibleLogin: true,
        visibleLogout: false,
        items: [
          {
            title: 'Change Password',
            name: 'ChangePassword'
          }, {
            title: 'Logout',
            name: 'Logout'
          }
        ]
      }
    ]
  }),
  computed: {
    ...mapGetters ({
      userRealName: 'getRealName',
      appName: 'getAppName'
    }),

    drawer: {
      get () {
        return this.$store.state.menu.drawer;
      },
      set () {
        this.$store.commit('toggleDrawer');
      }
    },

    visibleMenuItem () {
      return (this.isLogin === 'true')
        ? this.topMenus.filter(item => {
          return item.visibleLogin;
        })
        : this.topMenus.filter(item => {
          return item.visibleLogout;
        });
    }
  },
  methods: {
    clickTopMenu (menu) {
      if (menu === 'Login') {
        this.$store.commit('toggleShowLoginForm');
      } else {
        this.$store.commit('setActiveMenuItem', menu);
        this.$router.push({
          name: menu
        });
      }
    }
  }
}
</script>

<style lang="css">
.top-nav-wrapper {
  position: relative;
  z-index: 1;
}
.top-nav-wrapper + main.content {
  z-index: 0;
}
</style>
