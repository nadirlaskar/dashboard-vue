<template>
  <div>
    <fav-widget></fav-widget>
    <main-widget></main-widget>
  </div>
</template>
<script>
import favWidget from "../FavWidget";
import mainWidget from "../MainWidget";
export default {
  name: "Dashboard",
  components: {
    mainWidget,
    favWidget
  },
  data: () => {
    return {}
  },
};
</script>