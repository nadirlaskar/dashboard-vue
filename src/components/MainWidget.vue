<template>
  <dashboardContainer group="widgets" :data="widgets">
    <v-col v-for="(widget, i) in widgets" :key="i" :md="['MPA','FEED'].indexOf(widget.id)>=0?3:6" cols="12">
      <acquisition-channel v-if="widget.id=='AC'" :data="widget"/>
      <users-by-country v-if="widget.id=='UBC'" :data="widget"/>
      <revenue-widget v-if="widget.id=='REVENUE'" :data="widget"/>
      <popular-app v-if="widget.id=='MPA'" :data="widget"/>
      <feed v-if="widget.id=='FEED'" :data="widget"/>
    </v-col>
  </dashboardContainer>
</template>

<script>
import dashboardContainer from "./DraggableContainer";
import acquisitionChannel from "./AcquisitionsChannel";
import usersByCountry from "./UsersByCountry";
import revenueWidget from "./Revenue";
import popularApp from "./PopularApp";
import feed from './Feed';
export default {
  name: "Dashboard",
  components: {
    dashboardContainer,
    acquisitionChannel,
    usersByCountry,
    revenueWidget,
    popularApp,
    feed
  },
  data: () => {
    return {
      widgets: [
        {
          id: "AC",
          title: "Acquisitions Channel"
        },
        {
          id: "UBC",
          title: "Users By Country",
        },
        {
          id: "REVENUE",
          title: "Revenue",
        },
        {
          id:"MPA",
          title: "Most Popular App",
        },
        {
          id:"FEED",
          title: "Feed",
        },
      ],
    };
  },

};
</script>
<style>
.border-bottom-light {
  border-bottom: 2px solid #eee;
}
</style>