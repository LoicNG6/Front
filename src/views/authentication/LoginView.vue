<template>
  <v-container>
    <v-row dense justify="center" alignItem="center" style="text-align:center; border: solid red;">
      <v-col cols="auto" style="border: solid green;">
        <span>Logo</span>
        <h1>Let's Talk</h1>
      </v-col>
    </v-row>

    <VRow justify="center" style="border: solid green;">
      <VCol cols="auto" style="border:solid yellow;">
        <label for="">E-mail* </label>
        <input type="email" placeholder="E-mail" required v-model="email" />
      </VCol>
    </VRow>
    <VRow justify="center" style="border: solid green;">
      <VCol cols="auto" style="border:solid yellow">
        <label for="">Password* </label>
        <input type="text" placeholder="password" required v-model="password" />
      </VCol>
    </VRow>
    <VRow justify="center" style="border: solid green;">
      <VBtn>
        Connexion
      </VBtn>
    </VRow>
  </v-container>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Connexion" />
  </div> -->
</template>

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
