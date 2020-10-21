<template>
  <v-card>
    <v-card-title class="text-overline border-bottom-light pa-2">
      {{ widget.title }}
    </v-card-title>
    <v-card-text>
      <v-row class="doughnut-wrapper align-center">
        <v-col
          col="12"
          sm="4"
          md="12"
          lg="4"
          xl="4"
          class="doughnut-wrapper--chart-wrapper"
        >
          <div
            class="doughnut-wrapper---chart-wrapper--center-text text-caption font-weight-bold text-center"
          >
            {{ chart.views }}
            <div class="text-caption font-weight-bold">Views Total</div>
          </div>
          <doughnut-chart
            :chartdata="chart.chartData"
            :options="chart.chartOptions"
          />
        </v-col>
        <v-col col="12" sm="8" md="12" lg="8" xl="8">
          <div class="d-flex flex-column doughnut-wrapper--legend">
            <div
              class="d-flex pa-md-2 align-center"
              v-for="(label, i) in chart.chartData.labels"
              :key="i"
            >
              <div
                class="rounded-circle d-inline-block doughnut-wrapper--legend--circle mx-2"
                :style="{
                  backgroundColor:
                    chart.chartData.datasets[0].backgroundColor[i],
                }"
              />
              <div
                class="d-flex flex-column doughnut-wrapper--legend--bar-wrapper pa-1"
              >
                <div class="d-flex flex-no-wrap justify-space-between pb-1">
                  <div class="text-caption font-weight-bold">
                    {{ label }}
                  </div>
                  <div class="text-caption font-weight-bold">
                    +{{ chart.chartData.datasets[0].data[i] }}%
                  </div>
                </div>
                <v-progress-linear
                  :value="chart.chartData.datasets[0].data[i]"
                  color="#aaa"
                  background-color="#eee"
                />
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import doughnutChart from "./charts/dougnut";
export default {
  name: "acquisitions-channel",
  components: {
    doughnutChart,
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
              data: [17, 87, 38, 70, 22],
              backgroundColor: [
                "#a0f3a0",
                "#33c5b6",
                "#135965",
                "#1e8275",
                "#2fbd88",
              ],
            },
          ],
          labels: [
            "Ad Campaign",
            "Other",
            "Direct Traffic",
            "Referral Traffic",
            "Search Engines",
          ],
        },
        chartOptions: {
          cutoutPercentage: 70,
          legend: {
            display: false,
          },
          responsive: true,
        },
      },
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 961px) {
  .doughnut-wrapper {
    width: calc(50vw - 36px);
  }
}
.doughnut-wrapper--chart-wrapper {
  position: relative;
}
.doughnut-wrapper---chart-wrapper--center-text {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  width: fit-content;
  height: fit-content;
}
.doughnut-wrapper--legend--bar-wrapper {
  width: 100%;
}
.doughnut-wrapper--legend--circle {
  min-width: 24px;
  min-height: 24px;
}
</style>