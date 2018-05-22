<template>
  <v-app>
    <vue-progress-bar>
    </vue-progress-bar>

    <v-navigation-drawer class="blue lighten-5" width="250"  light fixed :mini-variant.sync="mini" v-model="drawer" app>
      <!-- mini-variant.sync="true" -->
      <v-list class="pa-0">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://dummyimage.com/60x60/000000/fff.jpg&text=map">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>{{user.firstName}} {{user.lastName}}</v-list-tile-title>
          </v-list-tile-content>
         <v-spacer></v-spacer>
          <v-list-tile-action style="min-width:30px;">
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

          </v-list-tile-action >
          <v-list-tile-action style="min-width:30px;">
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

      </v-list>
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="clickMenu(item)" router>
          <v-list-tile-action class="pr-1 pl-2 mr-1">
            <v-icon :class="activeMenuItem.includes(item.title)?'blue--text': ''" :title="item.title"  light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content :class="activeMenuItem.includes(item.title)?'blue--text': ''">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app="">
      <v-toolbar-side-icon @click.native.stop="drawer = !drawer" light></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <div class="text-xs-center pr-3">
      <v-badge left="">
          <span slot="badge">6</span>
          <v-icon large color="grey lighten-1">shopping_cart</v-icon>
        </v-badge>

        <v-badge color="red">
          <span slot="badge">!</span>
          <v-icon large color="grey">mail</v-icon>
        </v-badge>
      </div>
    </v-toolbar>
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
export default {
  name: 'app',
  data () {
    return {
      dialog: false,
      mini: false,
      dialogText: "",
      dialogTitle: "",
      isRootComponent: true,
      // clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "dashboard",
          title: "Dashboard",
          vertical: "Dashboard",
          link: "dashboard"
        },
        {
          icon: "shopping_cart",
          title: "Orders",
          vertical: "Order",
          link: "orders"
        },
        {
          icon: "perm_identity",
          title: "Customers",
          vertical: "Customer",
          link: "customers"
        },
        {
          icon: "bubble_chart",
          title: "Products",
          vertical: "Product",
          link: "products"
        },
        {
          icon: "thumbs_up_down",
          title: "About",
          vertical: "About",
          link: "about"
        }
      ],
      userMenus: [
        {
          icon: "bubble_chart",
          title: "Logout",
          link: "/logout"
        },
        {
          icon: "bubble_chart",
          title: "Change Password",
          link: "/changepassword"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      menuItem: "Orders",
      user: {
        firstName: 'Lorem',
        lastName: 'Ipsum'
      },
      activeMenuItem: 'Dashboard'
    }
  }
}
</script>
