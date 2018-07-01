<template lang="html">
  <v-dialog v-model="showLoginForm" persistent max-width="290">
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form v-model="valid">
          <v-text-field
            v-model="username"
            label="Username">
          </v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary darken-1" flat @click.native="submitLogin">Submit</v-btn>
        <v-btn color="grey" flat @click.native="showLoginForm = !showLoginForm">Batal</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: '',
    password: ''
  }),
  computed: {
    showLoginForm: {
      get () {
        return this.$store.state.menu.showLoginForm;
      },
      set () {
        this.$store.commit('toggleShowLoginForm');
      }
    },
  },
  methods: {
    closePopup () {

    },

    submitLogin () {
      this.$router.push({
        name: 'General'
      });
    }
  }
}
</script>

<style lang="css">
</style>
