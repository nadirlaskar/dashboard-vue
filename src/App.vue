<template>
  <v-app id="app">
    <NavBar/>
    <v-main>
      <v-container fluid>
        <Dashboard/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/pages/Dashboard';
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: {
    Dashboard,
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    background-color: var(--v-background-base);
  }
</style>