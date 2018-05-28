<template lang="html">
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
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    };
  }
}
</script>

<style lang="css">
</style>
