import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueGoogleHeatmap from 'vue-google-heatmap';

Vue.config.productionTip = false

Vue.use(VueGoogleHeatmap, {
  apiKey: process.env.GMAP_API_KEY || 'TEST_KEY'
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
