<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <h2 class="title">Column Chart</h2>
    </v-card-title>
    <v-card-text>
      <div id="chartdiv" class="chart"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import 'amcharts3';
import 'amcharts3/amcharts/serial';
import 'amcharts3/amcharts/themes/light';

export default {
  name: 'columnchart',
  mounted () {
    window.AmCharts.makeChart( 'chartdiv', {
      type: 'serial',
      theme: 'light',
      dataProvider: [
        {
          country: 'USA',
          visits: 2025
        }, {
          country: 'China',
          visits: 1882
        }, {
          country: 'Japan',
          visits: 1809
        }, {
          country: 'Germany',
          visits: 1322
        }, {
          country: 'UK',
          visits: 1122
        }, {
          country: 'France',
          visits: 1114
        }, {
          country: 'India',
          visits: 984
        }
      ],
      valueAxes: [ {
        gridColor: '#FFFFFF',
        gridAlpha: 0.2,
        dashLength: 0
      } ],
      gridAboveGraphs: true,
      startDuration: 1,
      graphs: [ {
        balloonText: '[[category]]: <b>[[value]]</b>',
        fillAlphas: 0.8,
        lineAlpha: 0.2,
        type: 'column',
        valueField: 'visits'
      } ],
      chartCursor: {
        categoryBalloonEnabled: false,
        cursorAlpha: 0,
        zoomable: false
      },
      categoryField: 'country',
      categoryAxis: {
        gridPosition: 'start',
        gridAlpha: 0,
        tickPosition: 'start',
        tickLength: 20
      },
      export: {
        enabled: true
      }

    } );
  }
}
</script>

<style lang="css">
.chart {
  height: 346px;
  width: 100%;
}
</style>
