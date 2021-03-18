<template>
  <v-app>
    <v-tabs dark>
    <v-tab to="/">home</v-tab>
    <v-tab to="/Feed">Feed</v-tab>
    <v-tab to="/Users">Users</v-tab>
  </v-tabs>
    

    <v-main >
      <router-view/>
    </v-main>

    <v-footer dark fixed padless>
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Posters.io</strong>
    </v-col>
  </v-footer>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>


