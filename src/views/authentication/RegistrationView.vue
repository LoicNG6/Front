<template>
  <v-container fluid class="pa-0">
    <VRow justify="center" class="pt-2 mb-4 layout"></VRow>
  </v-container>
  <VContainer style=" width: 30%;">
    <VRow justify="center">
      <VCol cols="auto">
        <img alt="Let's talk logo" :src="require('../../assets/app_logo.png')" width="50" height="50">
      </VCol>
      <VCol cols="auto">
        <h1 class='blue-text' style="text-transform:uppercase">Let's Talk</h1>
      </VCol>
      <VCol cols="12" style="text-align:center">
        <h3>Rejoins l'équipe et raconte nous des histoires passionnates</h3>
      </VCol>
    </VRow>

    <form action="/home" @submit.prevent="register" method="POST">
      <VRow justify="center" align="center" style=" margin-top: 10%;">
        <VCol>
          <label for="" class="label-text">Nom *</label>
          <input class="input" type="text" minlength="2" placeholder="Nom" required v-model="information.firstname" />
        </VCol>
      </VRow>
      <VRow justify="center" align="center">
        <VCol>
          <label for="" class="label-text">Prénom *</label>
          <input class="input" type="text" minlength="2" placeholder="Prénom" required v-model="information.lastname" />
        </VCol>
      </VRow>
      <VRow justify="center" align="center">
        <VCol>
          <label for="" class="label-text">Adresse mail *</label>
          <input class="input" type="email" placeholder="Adresse mail" required v-model="information.email" />
        </VCol>
      </VRow>
      <VRow justify="center" align="center">
        <VCol>
          <label for="" class="label-text">Mot de passe *</label>
          <input class="input" type="password" minlength="4" placeholder="Mot de passe" required
            v-model="information.password" />
        </VCol>
      </VRow>
      <VRow justify="center" align="center">
        <VCol>
          <label for="" class="label-text">Confirmez le mot de passe *</label>
          <input class="input" type="password" placeholder="Mot de passe" required v-model="checkedPassword" />
          <span v-if="!isPasswordChecked && !checkedPassword" style="color: red; font-size:0.6em">Mots de passe
            diférents, veuillez les saisir à
            nouveau</span>
        </VCol>
      </VRow>
      <VRow justify="center" style="margin-top: 7%;">
        <VBtn rounded elevation="3" block height="50px" type="submit"
          style="color:white; background: linear-gradient(#0000A3, #5C5CFF);">
          S'inscrire
        </VBtn>
      </VRow>
      <VRow class="mt-6" style="font-size: 0.8em" justify="center">
        <a href="login">J'ai déjà un compte</a>
      </VRow>
    </form>
  </VContainer>
</template>

<script>
import bcrypt from 'bcryptjs';
export default {
  name: 'RegistrationView',

  data() {
    return {
      checkedPassword: null,
      isPasswordChecked: true,
      information: {},
    }
  },

  methods: {
    register() {
      if (this.checkedPassword === this.information.password) {
        this.information.password = this.encryptPassword(this.information.password);
        console.log("success", "information = ", this.information);
        this.$router.push({ name: 'home' });
      } else {
        this.information.password = null;
        this.checkedPassword = null;
        this.isPasswordChecked = false;
      }
    },

    encryptPassword(password) {
      const salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(password, salt);
    },
  },
}
</script>
