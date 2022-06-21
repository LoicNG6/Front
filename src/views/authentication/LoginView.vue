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
    <VRow justify="center" align="center" style=" margin-top: 10%;">
      <VCol cols="3">
        <label for="" class="label-text">E-MAIL</label>
      </VCol>
      <VCol>
        <input class="input" type="email" placeholder="E-mail" required v-model="email" />
      </VCol>
    </VRow>
    <VRow justify="center" align="center">
      <VCol cols="3">
        <label for="" class="label-text">PASSWORD</label>
      </VCol>
      <VCol>
        <input class="input" type="text" placeholder="Password" required v-model="password" />
      </VCol>
    </VRow>
    <VRow justify="center" style="margin-top: 10%;">
      <VBtn width="100%" rounded large block height="40px" style="color:white; background: linear-gradient(#0000A3, #5C5CFF);">
        CONNEXION
      </VBtn>
    </VRow>
  </VContainer>
</template>

<style lang="scss" scoped>
.label-text {
  color: #a2a2ba,
}

.input {
  border: solid 0.1em #a2a2ba;
  text-align: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
}

input::placeholder {
  color: #aaaaba;
}

.layout {
  background: linear-gradient(#0000A3, #5C5CFF);
  margin-bottom: 7%;
  height: 30px;
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'LoginView',
  // components: {
  //   HelloWorld
  // }

  data() {
    return {
      email: null,
      password: null,
    }
  },
}
</script>
