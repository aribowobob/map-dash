<template lang="html">
  <v-navigation-drawer class="blue lighten-5" width="250"  light fixed :mini-variant.sync="mini" v-model="drawer" app>

    <v-list class="pa-0">
      <v-list-tile avatar tag="div">
        <v-list-tile-avatar>
          <img src="https://dummyimage.com/60x60/000000/fff.jpg&text=map">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>{{user.firstName}} {{user.lastName}}</v-list-tile-title>
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

        <v-list-tile-action style="min-width:36px;">
          <v-btn icon @click.native.stop="mini = !mini">
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
              <v-icon :class="activeMenuItem.includes(item.title)?'blue--text': ''" :title="item.title"  light v-html="item.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="clickMenu(subItem)">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="item.title"
          @click="clickMenu(item)">
          <v-list-tile-action class="pr-1 pl-2 mr-1">
            <v-icon :class="activeMenuItem.includes(item.title)?'blue--text': ''" :title="item.title"  light v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content :class="activeMenuItem.includes(item.title)?'blue--text': ''">
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </template>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      mini: false,
      drawer: true,
      user: {
        firstName: 'Lorem',
        lastName: 'Ipsum'
      },
      items: [
        {
          icon: 'local_activity',
          title: 'Attractions'
        },
        {
          icon: 'restaurant',
          title: 'Dining',
          active: true,
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
      activeMenuItem: 'Dashboard'
    };
  },
  methods: {
    clickMenu (item) {
      console.log(item.title);
    }
  }
}
</script>

<style lang="css">
</style>
