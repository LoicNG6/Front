<template>
  <div v-if="$route.name == 'login'">
    <v-container fluid class="pa-0">
      <VRow justify="center" class="pt-2 layout">
      </VRow>
    </v-container>
    <VContainer style=" width: 30%; margin-bottom: 5%;">
      <VRow justify="center">
        <VCol cols="auto">
          <img alt="Let's talk logo" :src="require('../../assets/letstalk_logo.png')" width="50" height="50">
        </VCol>
        <VCol cols="auto">
          <h1 class='blue-text' style="text-transform:uppercase">Let's Talk</h1>
        </VCol>
        <VCol cols="12" style="text-align:center">
          <h3>Accéder à Let's talk ici</h3>
        </VCol>
      </VRow>
      <form @submit.prevent="login" method="POST">
        <VRow justify="center" align="center" style=" margin-top: 10%;">
          <VCol>
            <label for="" class="label-text">E-MAIL</label>
            <input class="input" type="email" placeholder="E-mail" required v-model="email" />
          </VCol>
        </VRow>
        <VRow justify="center" align="center">
          <VCol>
            <label for="" class="label-text">PASSWORD</label>
            <input class="input" type="password" placeholder="Password" required v-model="password" />
          </VCol>
        </VRow>
        <VRow justify="center" style="margin-top: 10%;">
          <VBtn rounded elevation="3" block height="50px" type="submit"
            style="color:white; background: linear-gradient(#0000A3, #5C5CFF);">
            CONNEXION
          </VBtn>
        </VRow>
        <VRow style="font-size: 0.8em;" class="mt-10" justify="center">
          <a href="registration">Je n'ai pas de compte et je veux m'inscrire</a>
        </VRow>
      </form>
    </VContainer>
  </div>
  <router-view class="pa-0" />
</template>

<script>

export default {
  name: 'LoginView',

  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    login() {
      console.log("succes", this.$route);
      this.$router.push({ name: 'home' });
    }
  },
}
</script>
