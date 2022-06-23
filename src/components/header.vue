<template>
  <v-card flat tile>
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Let's Talk</v-toolbar-title>
      <v-btn v-if="$route.name !='home'" to="home">
        Home
      </v-btn>

      <v-btn v-if="$route.name != 'articles'" to="articles">
        ARTICLES
      </v-btn>

      <v-btn v-if=" $route.name != 'events'">
        ÉVENEMENTS
      </v-btn>

      <v-btn v-if=" $route.name != 'about'" to="about">
        QUI SOMMES-NOUS ?
      </v-btn>

      <v-btn>
        LOGIN
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>

  </v-card>
</template>

<script>

export default {
  name: 'HeaderView',
}
</script>
