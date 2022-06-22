<template>
  <v-container fluid class="pa-0">
    <VRow justify="center" class="pt-2 layout">
    </VRow>
  </v-container>
  <VContainer style=" width: 30%; margin-bottom: 5%;">
    <VRow justify="center">
      <VCol cols="auto">
        <img alt="Let's talk logo" :src="require('../../assets/app_logo.png')" width="50" height="50">
      </VCol>
      <VCol cols="auto">
        <h1 class='blue-text' style="text-transform:uppercase">Let's Talk</h1>
      </VCol>
      <VCol cols="12" style="text-align:center">
        <h3>Accéder à Let's talk ici</h3>
      </VCol>
    </VRow>
    <form action="/registration" @submit.prevent="login" method="POST">
      <VRow justify="center" align="center" style=" margin-top: 10%;">
        <VCol>
          <label for="" class="label-text">E-MAIL</label>
          <input class="input" type="email" placeholder="E-mail" required v-model="email" />
          <span v-if="credentialsChecked.email == false" style="color: red; font-size:0.6em">
            Adresse mail inconnue
          </span>
        </VCol>
      </VRow>
      <VRow justify="center" align="center">
        <VCol>
          <label for="" class="label-text">PASSWORD</label>
          <input class="input" type="password" placeholder="Password" req0uired v-model="password" />
          <span v-if="credentialsChecked.email == false" style="color: red; font-size:0.6em">
            Mot de passe incorrect
          </span>
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
</template>

<script>

export default {
  name: 'LoginView',

  data() {
    return {
      email: null,
      password: null,
      credentialsChecked: {},
    }
  },
  methods: {
    login() {
      this.axios
        .post("route_vers_l'api", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$router.push({ name: 'home' });
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.email) this.credentialsChecked.email = false;
          if (error.response.password) this.credentialsChecked.password = false;
        });
    }
  },
}
</script>
