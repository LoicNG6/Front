<template>
  <v-footer padless style="bottom:0; width:100%; background-color: #a0c3ff;">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn>
      <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Let's Talk</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: 'FooterView',

  data: () => ({
    links: [
      'Accueil',
      'À propos de nous',
      "L'équipe",
      'Services',
      'Blog',
      'Nous contacter',
    ],
  }),
}
</script>