<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 sm6 md3 v-for="item in stats" :key="item.title">
      <v-card color="white" light>
        <v-container grid-list-lg fluid>
          <div class="title add-margin-bottom">{{item.title}}</div>
          <div class="display-1 text-xs-right">{{item.value}}</div>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    stats: [
      {
        title: 'Item Title #1',
        value: 1234567890
      },
      {
        title: 'Item Title #2',
        value: 8733984
      },
      {
        title: 'Item Title #3',
        value: 678384
      },
      {
        title: 'Item Title #4',
        value: 98183938
      },
    ]
  })
}
</script>

<style lang="css">
.add-margin-bottom {
  margin-bottom: 15px;
}
</style>
