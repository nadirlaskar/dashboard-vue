<template>
  <v-card class="map-wrapper">
    <v-card-title class="text-overline border-bottom-light pa-2">
      {{ widget.title }}
    </v-card-title>
    <v-card-text class="pa-0 d-flex flex-column map-wrapper--body">
      <vue-google-heatmap :points="points" />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "users-by-country",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      isloaded: false,
      widget: this.data,
      points: [
        { lat: 37.786117, lng: -122.440119 },
        { lat: 37.786564, lng: -122.440209 },
        { lat: 37.786905, lng: -122.44027 },
        { lat: 37.786956, lng: -122.440279 },
        { lat: 37.800224, lng: -122.43352 },
        { lat: 37.800155, lng: -122.434101 },
        { lat: 37.80016, lng: -122.43443 },
        { lat: 37.800378, lng: -122.434527 },
        { lat: 37.800738, lng: -122.434598 },
        { lat: 37.800938, lng: -122.43465 },
        { lat: 37.801024, lng: -122.434889 },
        { lat: 37.800955, lng: -122.435392 },
        { lat: 37.800886, lng: -122.435959 },
      ],
    };
  },
};
</script>
<style scoped>
.no-map-error {
  background: #eee;
}
.map-wrapper--body {
  height: 100%;
}
.map-wrapper {
  height: 100%;
  min-height: 300px;
  overflow: hidden;
}
@media screen and (min-width: 769px) {
  .map-wrapper {
    width: calc(50vw - 24px);
  }
}
</style>