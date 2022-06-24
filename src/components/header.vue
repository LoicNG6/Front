<template>
  <v-card flat tile>
    <v-toolbar color="#a0c3ff" dark style="text-transform:capitalize">
      <v-toolbar-title>
        <v-row align="center">
          <v-col cols="auto"><img alt="Let's talk logo" :src="require('../assets/letstalk_logo.png')" width="40" height="40">
          </v-col>
          <v-col>
            <span>Let's Talk</span>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-btn v-if="$route.name != 'home'" to="home">
        Accueil
      </v-btn>

      <v-btn v-if="$route.name != 'articles'" to="articles">
        ARTICLES
      </v-btn>

      <v-btn v-if="$route.name != 'events'">
        ÉVENEMENTS
      </v-btn>

      <v-btn v-if="$route.name != 'about'" to="about">
        QUI SOMMES-NOUS ?
      </v-btn>

      <v-btn to="login">
        Se déconnecter
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
