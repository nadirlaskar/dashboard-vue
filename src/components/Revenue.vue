<template>
  <v-card class="map-wrapper">
    <v-card-title class="text-overline border-bottom-light pa-2">
      {{ widget.title }}
    </v-card-title>
    <v-card-text class="pa-2 d-flex flex-column line-wrapper">
      <line-chart :chartdata="chart.chartData" :options="chart.chartOptions" />
    </v-card-text>
  </v-card>
</template>
<script>
import lineChart from "./charts/lineChart";
export default {
  name: "revenue-widget",
  components: {
    lineChart,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      widget: this.data,
      chart: {
        views: "1,900,128",
        chartData: {
          datasets: [
            {
              data: Array(10)
                .fill(0)
                .map(() => Math.random() * 10 ** 5),
              backgroundColor: "#67d2ca8c",
              borderColor: "#33c5b6",
              borderWidth: 1,
              pointRadius: 0,
            },
            {
              data: Array(10)
                .fill(0)
                .map(() => Math.random() * 10 ** 5),
              backgroundColor: "#67d2ca8c",
              borderColor: "#33c5b6",
              borderWidth: 1,
              pointRadius: 0,
            },
          ],
          labels: [],
        },
        chartOptions: {
          cutoutPercentage: 70,
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: false
        },
      },
    };
  },
};
</script>
<style scoped>
@media screen and (min-width: 961px) {
  .line-wrapper {
    width: calc(50vw - 24px) !important;
  }
}
</style>