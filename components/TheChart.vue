<template>
  <div>
    <client-only>
      <apex-chart
        width="500"
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apex-chart>
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheChart',
  data() {
    return {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 380,
        },
        plotOptions: {
          bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
              position: 'bottom',
            },
          },
        },
        colors: [
          '#33b2df',
          '#546E7A',
          '#d4526e',
          '#13d8aa',
          '#A5978B',
          '#2b908f',
          '#f9a3a4',
          '#90ee7e',
          '#f48024',
          '#69d2e7',
        ],
        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ['#fff'],
          },
          formatter(val: any, opt: any) {
            return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
          },
          offsetX: 0,
          dropShadow: {
            enabled: true,
          },
        },
        stroke: {
          width: 1,
          colors: ['#fff'],
        },
        xaxis: {
          categories: [
            'South Korea',
            'Canada',
            'United Kingdom',
            'Netherlands',
            'Italy',
            'France',
            'Japan',
            'United States',
            'China',
            'India',
          ],
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
        title: {
          text: 'Custom DataLabels',
          align: 'center',
          floating: true,
        },
        subtitle: {
          text: 'Category Names as DataLabels inside bars',
          align: 'center',
        },
        tooltip: {
          theme: 'dark',
          x: {
            show: false,
          },
          y: {
            title: {
              formatter() {
                return ''
              },
            },
          },
        },
      },
    }
  },
})
</script>
