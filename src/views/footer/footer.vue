<template>
  <v-footer color="primary lighten-1" padless style="
    position: absolute;
    bottom: 0;
    width: 100%;">
      <v-row justify="center" class="pt-4">
        <v-btn v-for="link in links" :key="link" color="white" text rounded>
          {{ link }}
        </v-btn>
        <v-col cols="12" class="primary lighten-2 text-center white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
  </v-footer>
</template>

<script>
export default {

  name: 'HomeView',
  data: () => ({
    links: [
      'Home',
      'About Us',
      'Team',
      'Services',
      'Blog',
      'Contact Us',
    ],
  }),
}
</script>