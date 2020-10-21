<template>
  <dashboardContainer group="top-panel" :data="favWidgets">
    <v-col v-for="(widget, i) in favWidgets" :key="i" sm="6" md="3" cols="12">
      <v-card>
        <v-card-text
          class="d-flex flex-no-wrap justify-space-between widget-wrapper"
        >
          <v-progress-circular
            :rotate="-90"
            :size="50"
            :width="5"
            :value="widget.percent"
            >{{ widget.percent }}</v-progress-circular
          >
          <div class="widget-wrapper--title">
            <div class="text-subtitle-1 widget-wrapper--title--text">
              {{ widget.title }}
            </div>
            <div
              class="text-subtitle-1 font-weight-bold widget-wrapper--title--main-text"
            >
              {{ widget.count }}
            </div>
          </div>
          <v-icon large>{{ widget.icon }}</v-icon>
        </v-card-text>
      </v-card>
    </v-col>
  </dashboardContainer>
</template>

<script>
import dashboardContainer from "./DraggableContainer";
export default {
  name: "fav-widgets",
  components: {
    dashboardContainer,
  },
  data: () => {
    return {
      favWidgets: [
        {
          title: "New visits",
          percent: 88,
          count: "57,820",
          icon: "mdi-account",
        },
        {
          title: "Purchases",
          percent: 68,
          count: "$ 89,745",
          icon: "mdi-currency-usd",
        },
        {
          title: "Active Users",
          percent: 76,
          count: "178,391",
          icon: "mdi-emoticon-outline",
        },
        {
          title: "Returned",
          percent: 58,
          count: "32,592",
          icon: "mdi-refresh",
        },
      ],
    };
  },
};
</script>

<style scoped>
.widget-wrapper--title {
  flex-grow: 0.8;
}
</style>